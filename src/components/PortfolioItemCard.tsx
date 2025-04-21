import { useState } from "react";
import Image from "next/image";
import { Play, Heart, MessageCircle, Share2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type PortfolioItemCardProps = {
  title: string;
  description: string;
  mediaUrl: string;
  mediaType: "image" | "video" | "link";
  metrics?: {
    likes?: number;
    views?: number;
    comments?: number;
    shares?: number;
  };
  className?: string;
};

const formatNumber = (number?: number): string => {
  if (!number) return "0";
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + "K";
  } else {
    return number.toString();
  }
};

export function PortfolioItemCard({
  title,
  description,
  mediaUrl,
  mediaType,
  metrics,
  className,
}: PortfolioItemCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className={cn(className)}
      >
        <Card className="overflow-hidden h-full flex flex-col">
          <div className="relative aspect-video overflow-hidden">
            {mediaType === "image" && (
              <Image
                src={mediaUrl}
                alt={title}
                fill
                className="object-cover transition-transform hover:scale-105"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEDQIHq4C3DAAAAABJRU5ErkJggg=="
                onClick={() => setIsOpen(true)}
              />
            )}
            {mediaType === "video" && (
              <div className="h-full w-full bg-black flex items-center justify-center cursor-pointer" onClick={() => setIsOpen(true)}>
                <div className="relative w-full h-full">
                  <Image
                    src={mediaUrl.replace('.mp4', '.jpg')}
                    alt={title}
                    fill
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full bg-white/25 p-3 backdrop-blur-sm">
                      <Play className="h-8 w-8 text-white fill-white" />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {mediaType === "link" && (
              <div className="h-full w-full bg-muted flex items-center justify-center cursor-pointer" onClick={() => window.open(mediaUrl, '_blank')}>
                <ExternalLink className="h-12 w-12 text-muted-foreground" />
              </div>
            )}
          </div>
          <CardContent className="flex-1 p-4">
            <h3 className="font-semibold truncate">{title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
              {description}
            </p>
          </CardContent>
          {metrics && (
            <CardFooter className="border-t p-3 gap-3 flex-wrap">
              {metrics.views !== undefined && (
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Play className="h-3 w-3" />
                  <span>{formatNumber(metrics.views)}</span>
                </div>
              )}
              {metrics.likes !== undefined && (
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Heart className="h-3 w-3" />
                  <span>{formatNumber(metrics.likes)}</span>
                </div>
              )}
              {metrics.comments !== undefined && (
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MessageCircle className="h-3 w-3" />
                  <span>{formatNumber(metrics.comments)}</span>
                </div>
              )}
              {metrics.shares !== undefined && (
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Share2 className="h-3 w-3" />
                  <span>{formatNumber(metrics.shares)}</span>
                </div>
              )}
            </CardFooter>
          )}
        </Card>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-5xl p-0 gap-0 sm:rounded-2xl overflow-hidden">
          <div className="relative aspect-video w-full">
            {mediaType === "image" && (
              <Image
                src={mediaUrl}
                alt={title}
                fill
                className="object-contain"
              />
            )}
            {mediaType === "video" && (
              <video className="w-full h-full" controls autoPlay>
                <source src={mediaUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-muted-foreground">{description}</p>
            
            {metrics && (
              <div className="flex gap-6 mt-4">
                {metrics.views !== undefined && (
                  <div className="flex items-center gap-2">
                    <Play className="h-4 w-4" />
                    <span>{formatNumber(metrics.views)} views</span>
                  </div>
                )}
                {metrics.likes !== undefined && (
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    <span>{formatNumber(metrics.likes)} likes</span>
                  </div>
                )}
                {metrics.comments !== undefined && (
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    <span>{formatNumber(metrics.comments)} comments</span>
                  </div>
                )}
              </div>
            )}
            
            <div className="mt-6 flex justify-end">
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
} 