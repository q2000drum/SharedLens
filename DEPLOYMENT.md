# SharedLens Deployment Guide

## Quick Start - Deploy to Vercel

### Prerequisites
- GitHub account
- Vercel account (free tier is sufficient for POC)
- PostgreSQL database (see options below)

### Step 1: Prepare Your Database

Choose one of these options:

#### Option A: Vercel Postgres (Recommended for POC)
1. Go to your Vercel dashboard
2. Click "Storage" → "Create Database" → "Postgres"
3. Name it `sharedlens-db`
4. Copy the connection string provided

#### Option B: Neon (Serverless PostgreSQL)
1. Sign up at [neon.tech](https://neon.tech)
2. Create a new project called "SharedLens"
3. Copy the connection string from the dashboard

#### Option C: Supabase
1. Sign up at [supabase.com](https://supabase.com)
2. Create a new project
3. Go to Settings → Database
4. Copy the connection string (URI format)

### Step 2: Push to GitHub

```bash
# Initialize git if not already done
git add .
git commit -m "Initial SharedLens POC implementation"

# Push to your GitHub repository
git remote add origin <your-github-repo-url>
git push -u origin main
```

### Step 3: Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Project"
3. Select your GitHub repository
4. Configure the project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (leave as is)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)

5. Add Environment Variables:
   - Click "Environment Variables"
   - Add: `DATABASE_URL` = `<your-postgres-connection-string>`

6. Click "Deploy"

### Step 4: Run Database Migrations

After your first deployment:

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Link your project:
```bash
vercel link
```

4. Pull environment variables:
```bash
vercel env pull .env.local
```

5. Run migrations locally (they will apply to production DB):
```bash
npm run db:generate
npm run db:migrate
```

### Step 5: Verify Deployment

1. Visit your deployment URL (provided by Vercel)
2. You should see the SharedLens dashboard
3. Navigate through:
   - Dashboard (metrics overview)
   - Attributes (attribute registry)
   - Classification (commodity hierarchy)
   - Settings (system info)

## Local Development

To run the project locally:

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your DATABASE_URL

# Generate and run migrations
npm run db:generate
npm run db:migrate

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Troubleshooting

### Build Errors

**Error: Missing environment variables**
- Solution: Ensure `DATABASE_URL` is set in Vercel's environment variables

**Error: Cannot connect to database**
- Solution: Check that your database connection string is correct and the database is accessible from Vercel's servers

**Error: Module not found**
- Solution: Run `npm install` locally and ensure `package-lock.json` is committed

### Runtime Errors

**Database connection failed**
- Verify DATABASE_URL format: `postgres://user:password@host:port/database`
- Check if database allows external connections
- For Vercel Postgres: Ensure you're using the pooled connection string

**Pages not loading**
- Check browser console for errors
- Verify build completed successfully in Vercel dashboard
- Check deployment logs in Vercel

## Production Considerations

For production deployment beyond POC:

1. **Database Backups**: Enable automated backups on your database provider
2. **Monitoring**: Set up Vercel Analytics and error tracking
3. **Environment Variables**: Use separate databases for staging/production
4. **Security**:
   - Add authentication (NextAuth.js recommended)
   - Set up rate limiting
   - Configure CORS policies
5. **Performance**:
   - Enable Vercel Edge Network
   - Configure caching strategies
   - Optimize database queries

## Updating the Deployment

To deploy updates:

```bash
git add .
git commit -m "Your update message"
git push origin main
```

Vercel will automatically:
1. Detect the push
2. Build the project
3. Run tests (if configured)
4. Deploy to production

## Rolling Back

If you need to rollback:

1. Go to Vercel dashboard
2. Select your project
3. Click "Deployments"
4. Find the previous working deployment
5. Click "..." → "Promote to Production"

## Support

For deployment issues:
- Check [Vercel Documentation](https://vercel.com/docs)
- Review build logs in Vercel dashboard
- Check database provider documentation
- Review this project's README.md

## Next Steps

After successful deployment:

1. **Customize**: Update branding and styling
2. **Integrate**: Connect to real data sources (PLM, ERP, PIM)
3. **Extend**: Add authentication and user management
4. **Scale**: Implement caching and optimization
5. **Monitor**: Set up logging and analytics

---

**Deployment Status**: ✅ Ready for Vercel deployment
