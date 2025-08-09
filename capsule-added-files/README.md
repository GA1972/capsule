# Capsule
Internal meeting recorder + AI notemaker.

## Setup
1. Install dependencies
   ```bash
   pnpm install
   ```
2. Create `.env.local` from `.env.example`
3. Enable Google Auth in Supabase and add redirect URLs:
   - http://localhost:3000/auth/callback
   - https://<your-vercel>.vercel.app/auth/callback
4. Run locally
   ```bash
   pnpm dev
   ```

## Deploy
1. Push to GitHub
2. Import to Vercel
3. Add env vars in Vercel
4. Deploy
