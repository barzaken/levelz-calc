import { NextResponse } from 'next/server';
import chromium from 'chrome-aws-lambda';
import puppeteer from 'puppeteer-core';

// Helper function to convert Instagram follower/following counts to numbers
function convertToNumber(countStr: string): number {
  if (!countStr || countStr === 'N/A') return 0;
  
  const numStr = countStr.replace(/,/g, '');
  
  if (numStr.includes('K')) {
    return parseFloat(numStr.replace('K', '')) * 1000;
  } else if (numStr.includes('M')) {
    return parseFloat(numStr.replace('M', '')) * 1000000;
  } else if (numStr.includes('B')) {
    return parseFloat(numStr.replace('B', '')) * 1000000000;
  }
  
  return parseInt(numStr, 10) || 0;
}

// Function to estimate post and story prices based on follower count
function estimatePrices(followers: number) {
  // This is a simplified model - real pricing would be more complex
  const postBasePrice = followers > 1000000 ? 10000 : 1000;
  const postMultiplier = followers > 1000000 ? 0.02 : 0.05;
  const storyBasePrice = followers > 1000000 ? 5000 : 500;
  const storyMultiplier = followers > 1000000 ? 0.01 : 0.025;
  
  const postPrice = postBasePrice + (followers * postMultiplier / 1000);
  const storyPrice = storyBasePrice + (followers * storyMultiplier / 1000);
  
  return {
    postPrice: Math.round(postPrice),
    storyPrice: Math.round(storyPrice)
  };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');
  
  if (!username) {
    return NextResponse.json({ error: 'Username is required' }, { status: 400 });
  }
  
  try {
    const browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
    });
    const page = await browser.newPage();
    const url = `https://www.instagram.com/${username}/`;
    
    // Set a custom user agent to avoid detection
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36');
    
    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      
      // Check if there's a cookie consent dialog and accept if it exists
      const cookieButton = await page.$('button[type="submit"]');
      if (cookieButton) {
        await cookieButton.click();
        await page.waitForNavigation({ waitUntil: 'networkidle2' });
      }
      
      // Wait for the profile to load
      await page.waitForSelector('header img', { timeout: 10000 });
      
      // Get profile data
      const profileImageURL = await page.evaluate(() => {
        // Try to get the profile image with different selectors
        const headerImg = document.querySelector('header img') as HTMLImageElement;
        if (headerImg && headerImg.src) return headerImg.src;
        
        // Fallback selectors for profile image
        const profileImg = (document.querySelector('img[data-testid="user-avatar"]') || 
                           document.querySelector('img._aadp')) as HTMLImageElement | null;
        return profileImg ? profileImg.src : null;
      }).catch(() => null);
      
      let displayedUsername = await page.$eval('h2', (el: any) => el.innerText).catch(() => null);
      
      // Handle private accounts
      if (displayedUsername === "Esta conta é privada") {
        displayedUsername = await page.$eval('h1', (el: any) => el.innerText).catch(() => username);
      } else if (!displayedUsername) {
        displayedUsername = username;
      }
      
      // Get additional profile info
      const bio = await page.$eval('span._ap3a._aaco._aacu._aacx._aad7._aade', (el: any) => el.innerText).catch(() => '');
      const posts = await page.$eval('ul li:nth-child(1) span', (el: any) => el.innerText).catch(() => '0');
      const followers = await page.$eval('ul li:nth-child(2) span', (el: any) => el.innerText).catch(() => '0');
      const following = await page.$eval('ul li:nth-child(3) span', (el: any) => el.innerText).catch(() => '0');
      const isVerified = await page.$('svg[aria-label="Verificado"]').then(el => !!el).catch(() => false);
      
      // Convert followers to number for price calculation
      const followersNum = convertToNumber(followers);
      const { postPrice, storyPrice } = estimatePrices(followersNum);
      
      // Ensure we have a valid image URL
      let validatedImageURL = profileImageURL;
      if (validatedImageURL) {
        // Check if it's a valid URL
        try {
          new URL(validatedImageURL);
          
          // If the URL is from Instagram CDN, it should be fine
          // Otherwise, we might need to proxy it
          if (!validatedImageURL.includes('instagram.com') && 
              !validatedImageURL.includes('cdninstagram.com')) {
            console.log('Non-Instagram image URL detected:', validatedImageURL);
          }
        } catch (e) {
          console.error('Invalid image URL:', validatedImageURL);
          validatedImageURL = null;
        }
      }
      
      const profileInfo = {
        avatar: validatedImageURL,
        username: displayedUsername,
        bio: bio,
        posts: posts,
        followers: followers,
        following: following,
        verified: isVerified,
        followersCount: followersNum,
        postPrice,
        storyPrice
      };
      
      await browser.close();
      return NextResponse.json(profileInfo);
      
    } catch (error) {
      console.error(`Error fetching profile info from ${url}:`, error);
      await browser.close();
      return NextResponse.json(
        { 
          error: 'Failed to fetch Instagram profile', 
          message: error instanceof Error ? error.message : String(error) 
        }, 
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error launching puppeteer:', error);
    return NextResponse.json(
      { 
        error: 'Server error', 
        message: error instanceof Error ? error.message : String(error) 
      }, 
      { status: 500 }
    );
  }
}

// Add POST method for compatibility with some clients
export async function POST(request: Request) {
  const body = await request.json();
  const username = body.username;
  
  if (!username) {
    return NextResponse.json({ error: 'Username is required' }, { status: 400 });
  }
  
  // Construct a new URL with search params and reuse the GET handler
  const url = new URL(request.url);
  url.searchParams.set('username', username);
  
  const newRequest = new Request(url.toString(), {
    method: 'GET',
    headers: request.headers,
  });
  
  return GET(newRequest);
} 