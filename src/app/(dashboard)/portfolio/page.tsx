"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Info, Globe, MapPin, Mail } from "lucide-react";
import { SocialMediaCard } from "@/components/SocialMediaCard";
import { PortfolioItemCard } from "@/components/PortfolioItemCard";

type SocialMediaPlatform = 
  "instagram" | 
  "tiktok" | 
  "youtube" | 
  "twitter" | 
  "facebook" | 
  "linkedin" | 
  "other";

export default function PortfolioPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("portfolio");
  
  // Mock data for the creator profile
  const mockProfile = {
    firstName: "Alex",
    lastName: "Johnson",
    bio: "Creative content creator focused on lifestyle, travel, and tech reviews. I help brands connect with audiences through authentic storytelling and engaging visuals.",
    location: "Los Angeles, CA",
    categories: ["Lifestyle", "Travel", "Tech"],
    tags: ["authentic", "creative", "storytelling", "travel photography"],
    contact: {
      email: "alex@example.com",
      website: "https://alexjohnson.co",
    },
    pricing: {
      baseRate: 1500,
      packages: [
        {
          name: "Basic",
          description: "1 post with rights for 30 days",
          price: 800,
        },
        {
          name: "Standard",
          description: "3 posts with rights for 60 days",
          price: 2000,
        },
        {
          name: "Premium",
          description: "5 posts + 2 Stories with unlimited usage rights",
          price: 3500,
        },
      ],
    },
  };
  
  const mockSocialAccounts = [
    {
      platform: "instagram" as SocialMediaPlatform,
      handle: "@alexcreates",
      url: "https://instagram.com/alexcreates",
      metrics: {
        followers: 125000,
        engagement: 4.2,
        averageLikes: 5200,
      },
      verified: true,
    },
    {
      platform: "tiktok" as SocialMediaPlatform,
      handle: "@alexcreates",
      url: "https://tiktok.com/@alexcreates",
      metrics: {
        followers: 78500,
        engagement: 8.7,
        averageLikes: 6800,
      },
      verified: false,
    },
    {
      platform: "youtube" as SocialMediaPlatform,
      handle: "Alex Johnson Creates",
      url: "https://youtube.com/c/alexjohnsoncreates",
      metrics: {
        followers: 45000,
        engagement: 3.8,
        averageLikes: 2300,
      },
      verified: true,
    },
  ];
  
  const mockPortfolioItems = [
    {
      title: "Summer Travel Series - Coastal Italy",
      description: "A week-long adventure exploring the Amalfi Coast and capturing the beautiful Mediterranean scenery and local cuisine.",
      mediaUrl: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca",
      mediaType: "image" as "image" | "video" | "link",
      metrics: {
        likes: 8750,
        views: 92300,
        comments: 342,
        shares: 1280,
      },
    },
    {
      title: "Tech Review - Latest Smartphone Camera Test",
      description: "Putting the newest flagship smartphone camera to the test in various lighting conditions and scenarios.",
      mediaUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      mediaType: "image" as "image" | "video" | "link",
      metrics: {
        likes: 6230,
        views: 87500,
        comments: 578,
        shares: 890,
      },
    },
    {
      title: "Morning Routine - Productivity Habits",
      description: "My daily morning routine that helps me stay productive and energized throughout the day.",
      mediaUrl: "https://example.com/videos/morning-routine.mp4",
      mediaType: "video" as "image" | "video" | "link",
      metrics: {
        likes: 12800,
        views: 156000,
        comments: 842,
        shares: 3200,
      },
    },
    {
      title: "Home Office Setup 2023",
      description: "Tour of my current home office setup with all the tech and accessories I use for content creation.",
      mediaUrl: "https://images.unsplash.com/photo-1593062096033-9a26b09da705",
      mediaType: "image" as "image" | "video" | "link",
      metrics: {
        likes: 9480,
        views: 112000,
        comments: 756,
        shares: 1840,
      },
    },
    {
      title: "Brand Partnership - Luxury Hotel Stay",
      description: "Collaborated with a luxury hotel brand to showcase their amazing property and amenities.",
      mediaUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      mediaType: "image" as "image" | "video" | "link",
      metrics: {
        likes: 10200,
        views: 135000,
        comments: 620,
        shares: 2400,
      },
    },
    {
      title: "5 Tips for Better Content Creation",
      description: "Sharing my top 5 tips for creating more engaging and authentic content on social media.",
      mediaUrl: "https://example.com/videos/content-tips.mp4",
      mediaType: "video" as "image" | "video" | "link",
      metrics: {
        likes: 15700,
        views: 210000,
        comments: 1240,
        shares: 5300,
      },
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Portfolio</h1>
          <p className="text-muted-foreground mt-1">
            Showcase your best work and manage your creator profile
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Content
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="show"
          >
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Your public creator profile</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{mockProfile.firstName} {mockProfile.lastName}</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{mockProfile.location}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="h-8">
                    Edit Profile
                  </Button>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-1">Bio</h4>
                  <p className="text-sm text-muted-foreground">{mockProfile.bio}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-1">Categories</h4>
                  <div className="flex flex-wrap gap-1">
                    {mockProfile.categories.map((category, index) => (
                      <span key={index} className="bg-secondary text-secondary-foreground rounded-full px-2.5 py-0.5 text-xs">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-1">Tags</h4>
                  <div className="flex flex-wrap gap-1">
                    {mockProfile.tags.map((tag, index) => (
                      <span key={index} className="border rounded-full px-2.5 py-0.5 text-xs text-muted-foreground">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-2 border-t">
                  <h4 className="text-sm font-medium mb-2">Contact Information</h4>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>{mockProfile.contact.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <a href={mockProfile.contact.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        {mockProfile.contact.website.replace('https://', '')}
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <div className="mt-6">
            <h3 className="font-semibold mb-3 flex items-center gap-1.5">
              <Info className="h-4 w-4 text-muted-foreground" />
              <span>Profile Completeness: 85%</span>
            </h3>
            <div className="w-full bg-muted rounded-full h-2.5">
              <div className="bg-primary h-2.5 rounded-full w-[85%]"></div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Complete your profile to improve visibility in creator searches.
            </p>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              <TabsTrigger value="social">Social Accounts</TabsTrigger>
            </TabsList>
            
            <TabsContent value="portfolio" className="mt-0">
              <motion.div
                className="grid gap-6 sm:grid-cols-2"
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                {mockPortfolioItems.map((item, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <PortfolioItemCard
                      title={item.title}
                      description={item.description}
                      mediaUrl={item.mediaUrl}
                      mediaType={item.mediaType}
                      metrics={item.metrics}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="social" className="mt-0">
              <motion.div
                className="grid gap-6 sm:grid-cols-3"
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                {mockSocialAccounts.map((account, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <SocialMediaCard
                      platform={account.platform}
                      handle={account.handle}
                      url={account.url}
                      metrics={account.metrics}
                      verified={account.verified}
                    />
                  </motion.div>
                ))}
                <motion.div variants={itemVariants}>
                  <Card className="h-full flex flex-col items-center justify-center p-6 border-dashed">
                    <Plus className="h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm font-medium mb-2">Connect New Account</p>
                    <p className="text-xs text-muted-foreground text-center mb-4">
                      Add another social media account to enhance your creator profile
                    </p>
                    <Button variant="outline" size="sm">Connect</Button>
                  </Card>
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
} 