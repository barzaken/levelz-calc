export type UserRole = 'influencer' | 'company' | 'admin';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

export interface InfluencerProfile {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  bio: string;
  location: string;
  categories: string[];
  tags: string[];
  pricing: {
    baseRate?: number;
    packages?: {
      name: string;
      description: string;
      price: number;
    }[];
  };
  contact: {
    email?: string;
    phone?: string;
    website?: string;
  };
  analytics: {
    profileViews: number;
    inquiries: number;
  };
  createdAt: string;
  updatedAt: string;
}

export interface SocialMediaAccount {
  id: string;
  profileId: string;
  platform: 'instagram' | 'tiktok' | 'youtube' | 'twitter' | 'facebook' | 'linkedin' | 'other';
  handle: string;
  url: string;
  metrics: {
    followers: number;
    engagement: number;
    averageLikes?: number;
    averageViews?: number;
    averageComments?: number;
  };
  verified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PortfolioItem {
  id: string;
  profileId: string;
  title: string;
  description: string;
  mediaUrl: string;
  mediaType: 'image' | 'video' | 'link';
  metrics: {
    likes?: number;
    views?: number;
    comments?: number;
    shares?: number;
  };
  createdAt: string;
  updatedAt: string;
}

export interface CompanyProfile {
  id: string;
  userId: string;
  name: string;
  description: string;
  industry: string[];
  size: 'startup' | 'small' | 'medium' | 'large' | 'enterprise';
  location: string;
  website: string;
  logo: string;
  contact: {
    email?: string;
    phone?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Campaign {
  id: string;
  companyId: string;
  title: string;
  description: string;
  budget: {
    min: number;
    max: number;
    currency: string;
  };
  targetAudience: {
    demographics: {
      ageRange?: [number, number];
      genders?: string[];
      locations?: string[];
    };
    interests?: string[];
  };
  requirements: {
    platforms?: string[];
    contentTypes?: string[];
    deliverables?: string[];
  };
  status: 'draft' | 'active' | 'paused' | 'completed' | 'cancelled';
  startDate?: string;
  endDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Match {
  id: string;
  campaignId: string;
  influencerId: string;
  status: 'suggested' | 'invited' | 'applied' | 'accepted' | 'rejected' | 'completed';
  relevanceScore: number;
  audienceMatch: number;
  budgetMatch: number;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  content: string;
  attachments?: {
    url: string;
    type: string;
    name: string;
  }[];
  read: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Conversation {
  id: string;
  participants: string[];
  campaignId?: string;
  lastMessage?: string;
  lastMessageAt?: string;
  createdAt: string;
  updatedAt: string;
} 