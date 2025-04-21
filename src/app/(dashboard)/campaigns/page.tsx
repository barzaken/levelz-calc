"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Search, Filter, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { CampaignCard, type CampaignStatus } from "@/components/CampaignCard";

export default function CampaignsPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  
  // Mock campaign data
  const mockCampaigns = [
    {
      id: "camp_1234abcd",
      title: "Summer Collection Launch",
      description: "Promote our new summer collection with lifestyle content showing products in real-world settings.",
      budget: {
        min: 5000,
        max: 15000,
        currency: "USD",
      },
      status: "active" as CampaignStatus,
      startDate: "2023-06-15",
      endDate: "2023-07-15",
      creatorsMatched: 32,
      creatorsEngaged: 8,
    },
    {
      id: "camp_5678efgh",
      title: "Product Review Series",
      description: "Looking for tech reviewers to showcase our new smartphone features and capabilities.",
      budget: {
        min: 3000,
        max: 8000,
        currency: "USD",
      },
      status: "draft" as CampaignStatus,
      startDate: "2023-08-01",
      endDate: "2023-09-01",
      creatorsMatched: 0,
      creatorsEngaged: 0,
    },
    {
      id: "camp_9101ijkl",
      title: "Holiday Gift Guide",
      description: "Create holiday-themed content featuring our products as gift ideas for various demographics.",
      budget: {
        min: 10000,
        max: 25000,
        currency: "USD",
      },
      status: "paused" as CampaignStatus,
      startDate: "2023-11-01",
      endDate: "2023-12-15",
      creatorsMatched: 45,
      creatorsEngaged: 12,
    },
    {
      id: "camp_1213mnop",
      title: "Brand Awareness Campaign",
      description: "Help us increase brand visibility among young adults through creative and engaging content.",
      budget: {
        min: 7500,
        max: 20000,
        currency: "USD",
      },
      status: "active" as CampaignStatus,
      startDate: "2023-05-01",
      endDate: "2023-08-01",
      creatorsMatched: 56,
      creatorsEngaged: 18,
    },
    {
      id: "camp_1415qrst",
      title: "Fitness Challenge Sponsorship",
      description: "Partner with fitness creators to promote our products through a 30-day challenge.",
      budget: {
        min: 8000,
        max: 18000,
        currency: "USD",
      },
      status: "completed" as CampaignStatus,
      startDate: "2023-01-15",
      endDate: "2023-02-15",
      creatorsMatched: 40,
      creatorsEngaged: 15,
    },
    {
      id: "camp_1617uvwx",
      title: "Travel Content Series",
      description: "Seeking travel creators to showcase our products in various destinations around the world.",
      budget: {
        min: 12000,
        max: 30000,
        currency: "USD",
      },
      status: "cancelled" as CampaignStatus,
      startDate: "2023-03-01",
      endDate: "2023-06-01",
      creatorsMatched: 28,
      creatorsEngaged: 3,
    },
  ];

  // Filter campaigns based on active tab and search query
  const filteredCampaigns = mockCampaigns
    .filter(campaign => 
      activeTab === "all" || campaign.status === activeTab
    )
    .filter(campaign => 
      campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
          <h1 className="text-3xl font-bold tracking-tight">Campaigns</h1>
          <p className="text-muted-foreground mt-1">
            Create and manage your influencer marketing campaigns
          </p>
        </div>
        <Button onClick={() => router.push("/campaigns/new")}>
          <Plus className="mr-2 h-4 w-4" /> New Campaign
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Campaigns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockCampaigns.length}</div>
            <CardDescription>
              Across all statuses
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockCampaigns.filter(c => c.status === "active").length}</div>
            <CardDescription>
              Currently running
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Creators</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockCampaigns.reduce((total, campaign) => total + (campaign.creatorsEngaged || 0), 0)}
            </div>
            <CardDescription>
              Engaged in campaigns
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg. Matches</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(mockCampaigns.reduce((total, campaign) => total + (campaign.creatorsMatched || 0), 0) / mockCampaigns.length)}
            </div>
            <CardDescription>
              Per campaign
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search campaigns..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Campaign Tabs and List */}
      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-6 mb-6 h-auto p-1">
          <TabsTrigger value="all" className="py-2 text-xs sm:text-sm">All</TabsTrigger>
          <TabsTrigger value="draft" className="py-2 text-xs sm:text-sm">Draft</TabsTrigger>
          <TabsTrigger value="active" className="py-2 text-xs sm:text-sm">Active</TabsTrigger>
          <TabsTrigger value="paused" className="py-2 text-xs sm:text-sm">Paused</TabsTrigger>
          <TabsTrigger value="completed" className="py-2 text-xs sm:text-sm">Completed</TabsTrigger>
          <TabsTrigger value="cancelled" className="py-2 text-xs sm:text-sm">Cancelled</TabsTrigger>
        </TabsList>
        
        <TabsContent value={activeTab} className="mt-0">
          {filteredCampaigns.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-10 text-center">
                <div className="rounded-full bg-muted p-3 mb-4">
                  <Search className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-1">No campaigns found</h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  {searchQuery ? 
                    "Try adjusting your search terms or filters to find what you're looking for." : 
                    `You don't have any ${activeTab !== "all" ? activeTab : ""} campaigns yet.`}
                </p>
                {!searchQuery && (
                  <Button onClick={() => router.push("/campaigns/new")}>
                    <Plus className="mr-2 h-4 w-4" /> Create Campaign
                  </Button>
                )}
              </CardContent>
            </Card>
          ) : (
            <motion.div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {filteredCampaigns.map((campaign, index) => (
                <motion.div key={campaign.id} variants={itemVariants}>
                  <CampaignCard
                    id={campaign.id}
                    title={campaign.title}
                    description={campaign.description}
                    budget={campaign.budget}
                    status={campaign.status}
                    startDate={campaign.startDate}
                    endDate={campaign.endDate}
                    creatorsMatched={campaign.creatorsMatched}
                    creatorsEngaged={campaign.creatorsEngaged}
                    onClick={() => router.push(`/campaigns/${campaign.id}`)}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
} 