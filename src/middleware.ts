import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createServerClient, type CookieOptions } from '@supabase/ssr';

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-url', request.url);

  // Check if Supabase credentials are available
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  // If credentials are missing, skip authentication and grant access
  if (!supabaseUrl || !supabaseAnonKey || supabaseUrl === '' || supabaseAnonKey === '') {
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  // Create a server client
  const supabase = createServerClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          });
          requestHeaders.set('Set-Cookie', request.cookies.toString());
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.delete(name);
          requestHeaders.set('Set-Cookie', request.cookies.toString());
        },
      },
    }
  );

  // Check if we have a session
  const { data: { session } } = await supabase.auth.getSession();

  // Define authentication rules
  const path = request.nextUrl.pathname;
  const isAuthRoute = path.startsWith('/login') || path.startsWith('/signup') || path.startsWith('/reset-password');
  const isApiRoute = path.startsWith('/api');
  const isPublicRoute = path === '/' || path.startsWith('/_next') || path.startsWith('/public');
  
  // If the user is not logged in and trying to access a protected route, redirect them to the login page
  if (!session && !isAuthRoute && !isApiRoute && !isPublicRoute) {
    const redirectUrl = new URL('/login', request.url);
    redirectUrl.searchParams.set('from', request.nextUrl.pathname);
    return NextResponse.redirect(redirectUrl);
  }

  // If the user is logged in and trying to access an auth route, redirect them to the dashboard
  if (session && isAuthRoute) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Continue to the route
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
}; 