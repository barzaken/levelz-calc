# Levelz - Influencer Marketing Platform

Levelz is a cutting-edge SaaS platform that connects content creators and influencers with companies looking to run impactful influencer marketing campaigns. The platform facilitates the discovery, collaboration, and management of creator partnerships with an intuitive interface and powerful matching algorithm.

![Levelz Platform](https://placeholder-for-levelz-screenshot.com)

## Features

### For Content Creators / Influencers

- **Profile Management**: Create a detailed profile showcasing your work, audience demographics, and expertise
- **Portfolio Showcase**: Upload and display your best content in a beautiful, organized portfolio
- **Social Media Integration**: Connect your social accounts to display metrics and engagement rates
- **Campaign Discovery**: Browse opportunities that match your audience and content style
- **Analytics Dashboard**: Track profile views, campaign performance, and audience growth

### For Companies / Brands

- **Campaign Creation**: Easily create and manage campaigns with detailed targeting options
- **Creator Discovery**: Find the perfect creators based on audience demographics, engagement rates, and content quality
- **Budget Management**: Set campaign budgets and manage payments in one place
- **Performance Tracking**: Monitor campaign metrics and ROI in real-time
- **Communication Tools**: Seamless messaging and contract management built-in

## Technology Stack

- **Frontend Framework**: React with Next.js (App Router)
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **Animation**: Framer Motion for fluid interactions
- **Authentication & Database**: Supabase
- **State Management**: React Context API
- **Form Handling**: React Hook Form with Zod validation
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account (for database and authentication)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/levelz.git
   cd levelz
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
levelz/
├── public/              # Static assets
├── src/                 # Source code
│   ├── app/             # Next.js pages using App Router
│   │   ├── (auth)/      # Authentication routes
│   │   ├── (dashboard)/ # Protected dashboard routes
│   │   └── (marketing)/ # Public marketing routes
│   ├── components/      # Reusable UI components
│   │   └── ui/          # shadcn/ui components
│   ├── context/         # React Context providers
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   │   └── supabase/    # Supabase clients
│   ├── styles/          # Global styles
│   └── types/           # TypeScript type definitions
├── .env.local.example   # Example environment variables
├── middleware.ts        # Next.js middleware (auth protection)
└── tailwind.config.js   # Tailwind CSS configuration
```

## Database Schema

The platform uses the following main tables in Supabase:

- `users` - User accounts and profile types
- `influencer_profiles` - Detailed information for creator accounts
- `company_profiles` - Detailed information for brand accounts
- `social_media_accounts` - Connected social platforms and metrics
- `portfolio_items` - Creator content showcase items
- `campaigns` - Marketing campaigns created by brands
- `matches` - Connections between creators and campaigns
- `conversations` - Messaging between users
- `messages` - Individual messages in conversations

## Features to be Implemented

- Payment processing integration
- Advanced analytics dashboard
- AI-powered content suggestions
- Mobile app versions
- Public API for third-party integrations

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Supabase](https://supabase.io/)
