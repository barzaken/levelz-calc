'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowLeft, ArrowRight, Minus, Plus, Instagram, Search, Users, User2, AlertCircle, CheckCircle as VerifiedIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/layout/Navbar';

// Define types for Instagram account data
interface InstagramAccountData {
  username: string;
  avatar?: string | null;
  bio?: string;
  posts?: string;
  followers: string;
  following: string;
  verified: boolean;
  followersCount: number;
  postPrice: number;
  storyPrice: number;
}

export default function Calculator() {
  const [username, setUsername] = useState('');
  const [accountData, setAccountData] = useState<InstagramAccountData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [postCount, setPostCount] = useState(1);
  const [storyCount, setStoryCount] = useState(1);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!username.trim()) {
      setError('Please enter an Instagram username');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      // Call our Instagram API endpoint
      const normalizedUsername = username.toLowerCase().replace('@', '').trim();
      const response = await fetch(`/api/instagram?username=${encodeURIComponent(normalizedUsername)}`);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch Instagram data');
      }
      
      const data = await response.json();
      setAccountData(data);
    } catch (err) {
      console.error('Error fetching Instagram data:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch Instagram data');
    } finally {
      setLoading(false);
    }
  };

  const incrementPostCount = () => {
    setPostCount(prev => prev + 1);
  };

  const decrementPostCount = () => {
    setPostCount(prev => prev > 0 ? prev - 1 : 0);
  };

  const incrementStoryCount = () => {
    setStoryCount(prev => prev + 1);
  };

  const decrementStoryCount = () => {
    setStoryCount(prev => prev > 0 ? prev - 1 : 0);
  };

  // Format large numbers for display
  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  // Format currency for display
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Calculate total price
  const calculateTotal = () => {
    if (!accountData) return 0;
    
    const postTotal = accountData.postPrice * postCount;
    const storyTotal = accountData.storyPrice * storyCount;
    
    return postTotal + storyTotal;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="py-12 px-4 md:px-6 max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" className="mb-4 py-1 px-3">
                <Instagram className="h-3.5 w-3.5 mr-1 text-[color:var(--brand-primary)]" />
                Instagram Price Calculator
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Calculate Influencer Rates</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Enter any Instagram username to see estimated costs for sponsored content
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="p-6 border">
              <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Input
                    type="text"
                    placeholder="Enter Instagram username (e.g. nike)"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="h-12 pl-10"
                  />
                  <Instagram className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                </div>
                <Button 
                  type="submit" 
                  className="h-12 bg-gradient-to-r from-[color:var(--brand-primary)] to-[color:var(--brand-secondary)] hover:opacity-90 transition-opacity"
                  disabled={loading}
                >
                  {loading ? 'Searching...' : 'Calculate Rates'}
                  {!loading && <Search className="ml-2 h-4 w-4" />}
                </Button>
              </form>
              {error && (
                <div className="mt-4 p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-md flex items-start gap-2 text-red-700 dark:text-red-400">
                  <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{error}</p>
                </div>
              )}
              <p className="mt-4 text-sm text-muted-foreground">
                Try searching for popular accounts like "nike", "cristiano", or "kimkardashian"
              </p>
            </Card>
          </motion.div>

          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin h-8 w-8 border-4 border-[color:var(--brand-primary)] border-t-transparent rounded-full"></div>
            </div>
          )}

          {accountData && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <Card className="p-6 border">
                  <div className="flex flex-col items-center">
                    {accountData.avatar ? (
                      <div className="relative w-16 h-16 mb-4">
                        <Image 
                          src={accountData.avatar} 
                          alt={accountData.username} 
                          fill
                          className="rounded-full object-cover border"
                          sizes="64px"
                          onError={(e) => {
                            // Hide the image on error and show fallback
                            e.currentTarget.style.display = 'none';
                            const parent = e.currentTarget.parentElement;
                            if (parent) {
                              parent.innerHTML = `
                                <div class="w-16 h-16 rounded-full bg-gradient-to-r from-[color:var(--brand-primary)] to-[color:var(--brand-secondary)] flex items-center justify-center text-white text-2xl font-bold">
                                  ${accountData.username.charAt(0).toUpperCase()}
                                </div>
                              `;
                            }
                          }}
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[color:var(--brand-primary)] to-[color:var(--brand-secondary)] flex items-center justify-center text-white text-2xl font-bold mb-4">
                        {accountData.username.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div className="flex items-center justify-center">
                      <h2 className="text-2xl font-bold">{accountData.username}</h2>
                      {accountData.verified && (
                        <span className="ml-1 inline-flex items-center">
                          <VerifiedIcon size={16} className="text-blue-500" />
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-6">Instagram Creator</p>
                    
                    {accountData.bio && (
                      <p className="text-sm text-center mb-4 text-muted-foreground">{accountData.bio}</p>
                    )}
                    
                    <div className="grid grid-cols-3 w-full gap-2 text-center">
                      {accountData.posts && (
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Posts</p>
                          <p className="text-base font-semibold">{accountData.posts}</p>
                        </div>
                      )}
                      <div>
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Users className="h-4 w-4 text-[color:var(--brand-primary)]" />
                          <span className="font-medium text-sm">Followers</span>
                        </div>
                        <p className="text-base font-bold">{accountData.followers}</p>
                      </div>
                      <div>
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <User2 className="h-4 w-4 text-[color:var(--brand-secondary)]" />
                          <span className="font-medium text-sm">Following</span>
                        </div>
                        <p className="text-base font-bold">{accountData.following}</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border col-span-2">
                  <h3 className="text-xl font-semibold mb-6">Pricing Calculator</h3>
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-center pb-4 border-b">
                      <div>
                        <h4 className="font-medium">Instagram Posts</h4>
                        <p className="text-sm text-muted-foreground">Standard feed posts</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-8 w-8 rounded-full"
                          onClick={decrementPostCount}
                          disabled={postCount === 0}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center font-medium">{postCount}</span>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-8 w-8 rounded-full"
                          onClick={incrementPostCount}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <span className="w-24 text-right font-medium">
                          {formatCurrency(accountData.postPrice * postCount)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pb-4 border-b">
                      <div>
                        <h4 className="font-medium">Instagram Stories</h4>
                        <p className="text-sm text-muted-foreground">24-hour temporary content</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-8 w-8 rounded-full"
                          onClick={decrementStoryCount}
                          disabled={storyCount === 0}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center font-medium">{storyCount}</span>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-8 w-8 rounded-full"
                          onClick={incrementStoryCount}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <span className="w-24 text-right font-medium">
                          {formatCurrency(accountData.storyPrice * storyCount)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-2">
                      <div>
                        <h4 className="text-lg font-semibold">Total Estimated Cost</h4>
                      </div>
                      <div className="text-xl font-bold text-[color:var(--brand-primary)]">
                        {formatCurrency(calculateTotal())}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Button className="w-full bg-gradient-to-r from-[color:var(--brand-primary)] to-[color:var(--brand-secondary)] hover:opacity-90 transition-opacity" asChild>
                      <Link href="/signup">
                        Get Started With Campaign <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </div>
              
              <Card className="p-6 border bg-muted/30">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">How prices are calculated</h3>
                  <p className="text-muted-foreground mb-4">
                    Prices are estimated based on follower count, engagement rate, and industry benchmarks. 
                    Actual prices may vary based on factors like niche, audience quality, and content format.
                  </p>
                  <div className="inline-flex items-center text-sm gap-1 text-[color:var(--brand-primary)]">
                    <Link href="#" className="flex items-center hover:underline">
                      Learn more about our pricing methodology
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Button variant="outline" className="gap-2" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </main>

      <footer className="py-8 px-4 md:px-6 lg:px-8 border-t">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Levelz. All pricing is estimated and for demonstration purposes only.
          </p>
        </div>
      </footer>
    </div>
  );
} 