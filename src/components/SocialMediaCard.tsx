import { 
  Instagram, 
  Twitter, 
  Youtube, 
  Facebook, 
  Linkedin, 
  Check,
  TrendingUp,
  Users,
  HeartPulse,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type SocialMediaPlatform = 
  "instagram" | 
  "tiktok" | 
  "youtube" | 
  "twitter" | 
  "facebook" | 
  "linkedin" | 
  "other";

type SocialMediaMetrics = {
  followers: number;
  engagement: number;
  averageLikes?: number;
  averageViews?: number;
  averageComments?: number;
};

type SocialMediaCardProps = {
  platform: SocialMediaPlatform;
  handle: string;
  url: string;
  metrics: SocialMediaMetrics;
  verified: boolean;
  className?: string;
};

const formatNumber = (number: number): string => {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + "K";
  } else {
    return number.toString();
  }
};

export function SocialMediaCard({
  platform,
  handle,
  url,
  metrics,
  verified,
  className,
}: SocialMediaCardProps) {
  const platformConfig = {
    instagram: {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
      textColor: "text-white",
    },
    tiktok: {
      name: "TikTok",
      icon: <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M19.589 6.686a4.795 4.795 0 0 1-3.77-4.242V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.822 4.822 0 0 1-1.003-.104z"/></svg>,
      color: "bg-black",
      textColor: "text-white",
    },
    youtube: {
      name: "YouTube",
      icon: <Youtube className="h-5 w-5" />,
      color: "bg-red-600",
      textColor: "text-white",
    },
    twitter: {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      color: "bg-blue-400",
      textColor: "text-white",
    },
    facebook: {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      color: "bg-blue-600",
      textColor: "text-white",
    },
    linkedin: {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      color: "bg-blue-700",
      textColor: "text-white",
    },
    other: {
      name: "Other",
      icon: <Users className="h-5 w-5" />,
      color: "bg-gray-600",
      textColor: "text-white",
    },
  };
  
  const config = platformConfig[platform];

  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn(className)}
    >
      <Card>
        <CardHeader className={cn(
          "flex flex-row items-center gap-2 rounded-t-lg", 
          config.color, 
          config.textColor
        )}>
          {config.icon}
          <span className="font-semibold">{config.name}</span>
          {verified && (
            <span className="ml-auto bg-white/20 rounded-full p-1">
              <Check className="h-3 w-3" />
            </span>
          )}
        </CardHeader>
        <CardContent className="pt-4">
          <div className="flex flex-col space-y-3">
            <div>
              <p className="text-sm font-medium">{handle}</p>
              <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:underline"
              >
                View profile
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="flex flex-col items-center border rounded-md p-2">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Users className="h-3 w-3" />
                  <span>Followers</span>
                </div>
                <p className="font-semibold">{formatNumber(metrics.followers)}</p>
              </div>
              
              <div className="flex flex-col items-center border rounded-md p-2">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <HeartPulse className="h-3 w-3" />
                  <span>Engagement</span>
                </div>
                <p className="font-semibold">{metrics.engagement.toFixed(1)}%</p>
              </div>
              
              {metrics.averageLikes && (
                <div className="flex flex-col items-center col-span-2 border rounded-md p-2">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <TrendingUp className="h-3 w-3" />
                    <span>Avg. Likes</span>
                  </div>
                  <p className="font-semibold">{formatNumber(metrics.averageLikes)}</p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
} 