'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <header className="py-4 md:py-5 px-4 md:px-6 lg:px-8 border-b fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-md z-50 transition-all duration-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--brand-primary)] to-[color:var(--brand-secondary)]">
              levelz
            </Link>
          </motion.div>

          {/* Mobile menu button - only visible on small screens */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
          </Button>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={pathname === "/"
                ? "text-foreground transition-colors text-sm font-medium"
                : "text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              }
            >
              Home
            </Link>
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Features
            </Link>
            <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              How it works
            </Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Pricing
            </Link>
            <Link
              href="/calculator"
              className={pathname === "/calculator"
                ? "text-foreground transition-colors text-sm font-medium"
                : "text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              }
            >
              Calculator
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="h-9" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button size="sm" className="h-9 bg-gradient-to-r from-[color:var(--brand-primary)] to-[color:var(--brand-secondary)] hover:opacity-90 transition-opacity" asChild>
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Add spacing for the fixed header */}
      <div className="pt-16 md:pt-20"></div>
    </>
  );
} 