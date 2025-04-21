import { Calendar, Tag, Users, ChevronRight, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export type CampaignStatus = "draft" | "active" | "paused" | "completed" | "cancelled";

export type CampaignCardProps = {
  id: string;
  title: string;
  description: string;
  budget: {
    min: number;
    max: number;
    currency: string;
  };
  status: CampaignStatus;
  startDate?: string;
  endDate?: string;
  creatorsMatched?: number;
  creatorsEngaged?: number;
  className?: string;
  onClick?: () => void;
};

const formatCurrency = (value: number, currency: string): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
};

const formatDate = (dateString?: string): string => {
  if (!dateString) return "N/A";
  
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const getStatusStyles = (status: CampaignStatus) => {
  switch (status) {
    case "draft":
      return "bg-muted text-muted-foreground";
    case "active":
      return "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400";
    case "paused":
      return "bg-amber-100 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400";
    case "completed":
      return "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400";
    case "cancelled":
      return "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export function CampaignCard({
  id,
  title,
  description,
  budget,
  status,
  startDate,
  endDate,
  creatorsMatched,
  creatorsEngaged,
  className,
  onClick,
}: CampaignCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn(className)}
    >
      <Card className="h-full flex flex-col overflow-hidden">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-start">
            <Badge className={cn("h-6", getStatusStyles(status))}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Badge>
            <div className="text-sm text-muted-foreground">ID: {id.substring(0, 8)}</div>
          </div>
          <CardTitle className="text-xl mt-2">{title}</CardTitle>
          <CardDescription className="line-clamp-2">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-3">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-1.5">
                <Tag className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">
                  {formatCurrency(budget.min, budget.currency)} - {formatCurrency(budget.max, budget.currency)}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">
                  {formatDate(startDate)} {endDate ? `to ${formatDate(endDate)}` : ""}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex flex-col space-y-1 p-3 bg-muted/50 rounded-md">
                <div className="flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Matches</span>
                </div>
                <span className="text-2xl font-semibold">{creatorsMatched || 0}</span>
                <span className="text-xs text-muted-foreground">potential creators</span>
              </div>
              
              <div className="flex flex-col space-y-1 p-3 bg-muted/50 rounded-md">
                <div className="flex items-center gap-1.5">
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Engaged</span>
                </div>
                <span className="text-2xl font-semibold">{creatorsEngaged || 0}</span>
                <span className="text-xs text-muted-foreground">confirmed creators</span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-0 border-t px-6 py-4">
          <Button 
            variant="outline" 
            className="w-full justify-between"
            onClick={onClick}
          >
            View Campaign
            <ChevronRight className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
} 