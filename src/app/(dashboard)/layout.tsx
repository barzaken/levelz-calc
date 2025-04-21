"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart3, 
  Users, 
  LayoutDashboard, 
  MessageSquare, 
  FileText, 
  Settings, 
  Menu, 
  X,
  LogOut,
  User,
  SunMoon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeProvider";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const { user, signOut } = useAuth();
  const { theme, setTheme } = useTheme();
  
  const isCreator = user?.role === "influencer";
  
  // Reset mobile menu when path changes
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);
  
  // Reset mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileOpen(false);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      title: isCreator ? "My Portfolio" : "Campaigns",
      href: isCreator ? "/portfolio" : "/campaigns",
      icon: isCreator ? <FileText className="h-5 w-5" /> : <BarChart3 className="h-5 w-5" />,
    },
    {
      title: isCreator ? "Opportunities" : "Creators",
      href: isCreator ? "/opportunities" : "/creators",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Messages",
      href: "/messages",
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      title: "Analytics",
      href: "/analytics",
      icon: <BarChart3 className="h-5 w-5" />,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Mobile Nav Toggle */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--brand-primary)] to-[color:var(--brand-secondary)]">
            levelz
          </span>
        </Link>
        <Button variant="ghost" size="icon" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 lg:hidden bg-background border-r"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <Link href="/" className="flex items-center gap-2">
                  <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--brand-primary)] to-[color:var(--brand-secondary)]">
                    levelz
                  </span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsMobileOpen(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                        pathname === item.href
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="p-4 border-t">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback>
                      {user?.email?.charAt(0).toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">
                      {user?.email || "User"}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {user?.role === "influencer" ? "Creator" : "Brand"}
                    </p>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => signOut()}>
                    <LogOut className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <div
        className={`hidden lg:flex flex-col border-r h-screen sticky top-0 ${
          isCollapsed ? "w-[80px]" : "w-[240px]"
        } transition-all duration-300 shrink-0`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          {!isCollapsed && (
            <Link href="/" className="flex items-center gap-2">
              <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-[color:var(--brand-primary)] to-[color:var(--brand-secondary)]">
                levelz
              </span>
            </Link>
          )}
          <Button
            variant="ghost"
            size="icon"
            className={isCollapsed ? "mx-auto" : ""}
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex-1 overflow-y-auto py-4 px-3">
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                  pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                } ${isCollapsed ? "justify-center" : ""}`}
              >
                {item.icon}
                {!isCollapsed && <span>{item.title}</span>}
              </Link>
            ))}
          </nav>
        </div>
        <div className="p-4 border-t">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>
                {user?.email?.charAt(0).toUpperCase() || "U"}
              </AvatarFallback>
            </Avatar>
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">
                  {user?.email || "User"}
                </p>
                <p className="text-xs text-muted-foreground">
                  {user?.role === "influencer" ? "Creator" : "Brand"}
                </p>
              </div>
            )}
            {!isCollapsed ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Settings className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                    <SunMoon className="mr-2 h-4 w-4" />
                    Toggle theme
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings">
                      <User className="mr-2 h-4 w-4" />
                      Profile settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => signOut()}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="ghost" size="icon" onClick={() => signOut()}>
                <LogOut className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container px-4 py-6 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
} 