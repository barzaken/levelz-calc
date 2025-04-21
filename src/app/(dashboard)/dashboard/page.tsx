"use client";

import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Users, MessageSquare, FileText } from "lucide-react";

export default function DashboardPage() {
  const { user } = useAuth();
  const isCreator = user?.role === "influencer";

  // Animation variants for staggered animations
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

  // Mock data for dashboard
  const creatorStats = [
    {
      title: "Profile Views",
      value: "1,285",
      change: "+12.5%",
      trend: "up",
      icon: <Users className="h-5 w-5" />
    },
    {
      title: "New Opportunities",
      value: "8",
      change: "+3",
      trend: "up",
      icon: <FileText className="h-5 w-5" />
    },
    {
      title: "Active Campaigns",
      value: "3",
      change: "No change",
      trend: "neutral",
      icon: <BarChart3 className="h-5 w-5" />
    },
    {
      title: "Unread Messages",
      value: "12",
      change: "+5",
      trend: "up",
      icon: <MessageSquare className="h-5 w-5" />
    },
  ];

  const brandStats = [
    {
      title: "Active Campaigns",
      value: "4",
      change: "+1",
      trend: "up",
      icon: <BarChart3 className="h-5 w-5" />
    },
    {
      title: "Creator Matches",
      value: "28",
      change: "+15",
      trend: "up",
      icon: <Users className="h-5 w-5" />
    },
    {
      title: "Engagement Rate",
      value: "4.2%",
      change: "+0.3%",
      trend: "up",
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      title: "Unread Messages",
      value: "7",
      change: "+2",
      trend: "up",
      icon: <MessageSquare className="h-5 w-5" />
    },
  ];

  const stats = isCreator ? creatorStats : brandStats;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Welcome back{user?.email ? `, ${user.email.split('@')[0]}` : ''}! Here's an overview of your {isCreator ? "creator profile" : "brand campaigns"}.
        </p>
      </div>

      <motion.div 
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {stats.map((stat, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <div className={`${
                  stat.trend === "up" 
                    ? "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400" 
                    : stat.trend === "down" 
                    ? "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                    : "bg-muted text-muted-foreground"
                } rounded-full p-1`}>
                  {stat.icon}
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <CardDescription className={stat.trend === "up" ? "text-green-600 dark:text-green-400" : stat.trend === "down" ? "text-red-600 dark:text-red-400" : ""}>
                  {stat.change}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>{isCreator ? "Recent Opportunities" : "Recent Campaign Performance"}</CardTitle>
              <CardDescription>
                {isCreator ? "Opportunities matching your profile" : "Overview of your recent campaigns"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border p-4 text-center">
                <p className="text-muted-foreground">This feature will be available soon.</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>{isCreator ? "Portfolio Performance" : "Top Creators"}</CardTitle>
              <CardDescription>
                {isCreator ? "How your content is performing" : "Your best performing creators"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border p-4 text-center">
                <p className="text-muted-foreground">This feature will be available soon.</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
} 