# M&M Dashboard

Dashboard for Mind and Machine DFW networking group.

## Tech Stack

- **Next.js 14+** — React framework
- **TypeScript** — Type safety
- **Tailwind CSS** — Styling with brand colors
- **Prisma** — ORM for PostgreSQL
- **Supabase** — PostgreSQL hosting
- **Next.js Auth** — Authentication (Module 2)

## Brand Colors

- **Primary Orange**: `#FF6600`
- **Primary Blue**: `#0052CC`
- **Cyan**: `#00CCFF`
- **Light**: `#F5F5F5`
- **Dark**: `#1A1A1A`

## Project Structure

```
app/              → Next.js app directory
├── layout.tsx    → Root layout with nav/footer
├── page.tsx      → Home page
└── globals.css   → Tailwind imports

prisma/
├── schema.prisma → Database schema

generated/        → Prisma client (generated)
public/           → Static assets
```

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Supabase

1. Create a free [Supabase](https://supabase.com) project
2. Go to **Settings > Database > Connection String > URI**
3. Copy the connection string and paste into `.env`:
   ```
   DATABASE_URL="postgresql://..."
   ```

### 3. Run Migrations
```bash
npx prisma migrate dev --name init
```

### 4. Start Dev Server
```bash
npm run dev
```

Visit http://localhost:3000

## Module Plan

**Phase 1 - Foundation** (Modules 1-4)
- [x] Module 1: App Foundation ← **You are here**
- [ ] Module 2: Authentication & Roles
- [ ] Module 3: Core UI Shell
- [ ] Module 4: Dashboard Home

**Phase 2 - Core Operations** (Modules 5-8)
- [ ] Module 5: Task Management
- [ ] Module 6: Meetings & Action Items
- [ ] Module 7: Events
- [ ] Module 8: Event Themes

See [M&M-Dashboard-Module-Plan.md](../../M&M-Dashboard-Module-Plan.md) for full plan.

## Development Guidelines

- Use TypeScript for all new code
- Keep components in `components/` folder
- Database models go in `prisma/schema.prisma`
- API routes go in `app/api/`
- Environment variables in `.env`

## Git Workflow

1. Create a branch for each module
2. Push to GitHub when module is complete
3. Update this README
4. Save to GitHub before starting next module

## Next Steps

- [ ] Set up Supabase account and DATABASE_URL
- [ ] Run `npx prisma migrate dev --name init`
- [ ] Verify `npm run dev` works
- [ ] Commit and push to GitHub
- [ ] Move to Module 2: Authentication & Roles
