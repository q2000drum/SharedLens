# SharedLens - UOM Conflict Management System

A comprehensive enterprise solution for managing Unit of Measure conflicts between engineering specifications and procurement constraints.

## Overview

SharedLens implements the "Shared Lens Concept" - a strategic framework that provides cross-functional visibility into the gap between engineering requirements and procurement reality. The system transforms UOM conflicts from hidden friction into visible, manageable trade-offs through multi-perspective item representation.

### Key Features

- **UOM Conflict Detection**: Automatic identification of dimensional mismatches between engineering specs and supplier packaging
- **Multi-Lens Item Views**: Switch between Engineering, Procurement, Manufacturing, and Finance perspectives of the same item
- **Impact Analysis**: Real-time calculation of waste costs, utilization rates, and annual impact projections
- **Review Workflow**: Collaborative decision-making process with approval chains and alternatives evaluation
- **Cost Visibility**: Track material waste impact across the organization with detailed financial metrics
- **Cross-Functional Collaboration**: Discussion threads and notifications to bridge engineering and procurement teams

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
│   ├── page.tsx                  # Main Dashboard (Classification & Attributes)
│   ├── uom-dashboard/            # UOM Conflict Dashboard
│   ├── conflicts/                # UOM conflicts detailed list view
│   ├── items/[id]/               # Item detail with lens switching
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
└── docs/
    └── UOM/                      # UOM conflict documentation
        ├── UOM Conflict Management Feature.md
        └── Unit of Measurement - Study
```

## Current Status: POC (v0.2.0) - Dual Dashboard

This is a Proof of Concept implementation with two main areas:

### Original Dashboard (/)
- ✅ Commodity classification tracking
- ✅ Component classification metrics
- ✅ Attribute completion rates
- ✅ Classification development status

### UOM Conflict Management (/uom-dashboard)
- ✅ UOM conflict dashboard with key metrics
- ✅ Clickable metrics to access detailed conflict views
- ✅ Conflicts list view with detailed impact analysis
- ✅ Multi-lens item detail view (Engineering, Procurement, Manufacturing, Conflict Analysis)
- ✅ Conflict severity classification (Critical, High, Medium, Low)
- ✅ Utilization rate and waste cost calculations
- ✅ Alternatives evaluation framework
- ✅ Mock data based on cable/wire scenarios from documentation
- 🔄 Review workflow implementation (planned)
- 🔄 Discussion threads (planned)
- 🔄 Database integration (planned)
- 🔄 External system integration (planned)

## Navigation Guide

The application has two main workflows:

### 1. Classification & Attributes Workflow
- **Dashboard** (`/`) - Overview of commodity and component classification progress
- **Attributes** (`/attributes`) - Attribute registry management
- **Classification** (`/classification`) - Classification schema management

### 2. UOM Conflict Management Workflow
- **UOM Dashboard** (`/uom-dashboard`) - Overview of UOM conflicts with key metrics
  - Click on "Active Conflicts" metric card to jump to conflicts list
  - Click "View All UOM Conflicts" button at bottom
- **UOM Conflicts** (`/conflicts`) - Detailed list of all UOM conflicts
  - View conflict details, impact analysis, and review status
  - Click "View Details" to see individual item
- **Item Detail** (`/items/[id]`) - Multi-lens view of individual items
  - Switch between Engineering, Procurement, Conflict Analysis, and Manufacturing views

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint
- `npm run db:generate`: Generate database migrations
- `npm run db:migrate`: Run database migrations
- `npm run db:studio`: Open Drizzle Studio (database GUI)

## UOM Conflict Scenarios

The POC demonstrates several real-world UOM conflict scenarios:

### Example 1: Cable Assembly (Dimensional Conflict - Medium)
- **Engineering**: Requires 47.5M of cable
- **Procurement**: Supplier sells in 50M spools only
- **Impact**: 2.5M waste per unit, 95% utilization, $12.50 waste cost
- **Annual Impact**: $6,250 (500 units/year)

### Example 2: Stainless Steel Tube (Exceeds Package - High)
- **Engineering**: Requires 2.3M length
- **Procurement**: Supplier sells in 2M lengths
- **Impact**: Must buy 2 packages, 1.7M excess, 57.5% utilization
- **Annual Impact**: $19,125 (250 units/year)

### Example 3: Fiber Optic Cable (Exceeds Package - Critical)
- **Engineering**: Requires 75M
- **Procurement**: Supplier sells in 50M spools
- **Impact**: Must buy 2 spools, 25M excess, $125 waste per unit
- **Annual Impact**: $46,875 (150 units/year)

## Documentation

See the `docs/UOM/` directory for detailed documentation:

- `UOM Conflict Management Feature.md`: Complete feature requirements and data model
- `Unit of Measurement - Study`: Engineering vs Procurement perspectives analysis

## License

Proprietary - Internal Use Only
