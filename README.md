# SharedLens - Classification & Attribute Management System

A comprehensive enterprise solution for managing product classification schemas and attribute definitions across the product value chain.

## Overview

SharedLens implements the "Shared Lens Concept" - a strategic framework that eliminates organizational and data silos by integrating Static (Engineering) Attributes and Transactional (Business) Attributes into a unified knowledge base.

### Key Features

- **Enterprise Attribute Registry**: Centralized management of all product attributes with governance metadata
- **Classification Schema Management**: Hierarchical commodity and category classification system
- **Progress Tracking**: Real-time metrics and dashboards for classification development
- **Multi-System Integration**: Designed to integrate with PLM (Windchill), ERP (Oracle), PIM, and other enterprise systems
- **Data Governance**: Built-in data quality rules, audit logging, and stewardship tracking

## Tech Stack

- **Framework**: Next.js 16 (App Router) with TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Database**: PostgreSQL with Drizzle ORM
- **Deployment**: Vercel
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 20+ and npm
- PostgreSQL database (local or cloud-hosted)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your database connection string:
```
DATABASE_URL="postgres://username:password@localhost:5432/sharedlens"
```

3. Generate and run database migrations:
```bash
npm run db:generate
npm run db:migrate
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure environment variables:
   - Add `DATABASE_URL` with your PostgreSQL connection string
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

### Database Setup for Production

For production deployment, you can use:

- **Vercel Postgres**: Built-in PostgreSQL database
- **Neon**: Serverless PostgreSQL at [neon.tech](https://neon.tech)
- **Supabase**: Open-source alternative at [supabase.com](https://supabase.com)

## Project Structure

```
SharedLens/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Dashboard (metrics & overview)
│   ├── attributes/               # Attribute registry
│   ├── classification/           # Classification schema
│   └── settings/                 # System settings
├── components/
│   ├── ui/                       # shadcn/ui base components
│   └── navigation.tsx            # Main navigation
├── lib/
│   ├── db/                       # Database configuration
│   │   ├── schema.ts             # Drizzle ORM schema definitions
│   │   └── index.ts              # Database client
│   ├── types/                    # TypeScript type definitions
│   └── utils.ts                  # Utility functions
└── docs/                         # Project documentation
```

## Current Status: POC (v0.1.0)

This is a Proof of Concept implementation with:

- ✅ Core UI components and navigation
- ✅ Database schema design
- ✅ Mock data for demonstration
- ✅ Dashboard with metrics
- ✅ Attribute registry interface
- ✅ Classification schema display
- 🔄 Database integration (in progress)
- 🔄 External system integration (planned)

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint
- `npm run db:generate`: Generate database migrations
- `npm run db:migrate`: Run database migrations
- `npm run db:studio`: Open Drizzle Studio (database GUI)

## Documentation

See the `docs/` directory for additional documentation:

- `SharedLens.md`: Executive summary and departmental applications
- `SharedLens-Requirements.md`: Detailed requirements and attribute framework
- `Data Map.pdf`: System architecture and data flow diagrams

## License

Proprietary - Internal Use Only
