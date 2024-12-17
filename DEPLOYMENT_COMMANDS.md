# Deployment Command Guide
Last Updated: 2024-12-17 09:07 PST

## Phase 1: Local Verification

### 1. Verify Build
```bash
# Clean previous build
rm -rf .next

# Fresh install of dependencies
npm ci

# Build the project
npm run build

# Test locally
npm run start
```

Success Indicators:
- Build completes without errors
- Local server starts at http://localhost:3000
- Pages load without console errors

## Phase 2: GitHub Setup

### 1. Initialize Git (if not already done)
```bash
# Check git status
git status

# If not initialized:
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial commit - ready for deployment"
```

### 2. Connect to GitHub
```bash
# Add GitHub remote (replace with your repository URL)
git remote add origin YOUR_GITHUB_REPO_URL

# Push code
git push -u origin main
```

Success Indicators:
- No error messages in terminal
- Code visible on GitHub website

## Phase 3: Pre-Deployment Checklist

### 1. Required Files Check
- [x] next.config.mjs (configured for Cloudflare)
- [x] package.json (all dependencies listed)
- [x] cloudflare.json (build settings)
- [x] .gitignore (excludes node_modules, .next)

### 2. Environment Variables
```bash
# Create production environment file
touch .env.production

# Add required variables (if any)
# NEXT_PUBLIC_API_URL=https://your-api.com
```

## Phase 4: Cloudflare Setup Steps

1. Account Access
   - Navigate to: https://dash.cloudflare.com
   - Sign up or log in
   - Select "Pages" from left sidebar

2. New Project Setup
   - Click "Create Project"
   - Select "Connect to Git"
   - Choose your repository

3. Build Settings
```json
{
  "Build command": "npm run build",
  "Build output directory": ".next",
  "Root directory": "/",
  "Node.js version": "18"
}
```

## Emergency Rollback Plan

### If Deployment Fails
```bash
# Revert to last working commit
git revert HEAD

# Push revert
git push origin main
```

### If Site is Down
1. Access Cloudflare Dashboard
2. Go to Pages > Your Project
3. Click "Deployments"
4. Select "Roll back to previous deployment"

## Verification Steps

1. Build Output Check
```bash
# Check build output size
du -sh .next

# Verify static files
ls -la .next/static
```

2. Local Production Test
```bash
# Build and start
npm run build
npm run start

# Check in browser:
# - Home page loads
# - Search works
# - Resources display
# - No console errors
```

## Important Notes

1. DO NOT proceed to next step if current step shows errors
2. Keep this document open during deployment
3. Document any errors or warnings
4. Save all terminal outputs

## Support Resources

1. Next.js Deployment Docs:
   https://nextjs.org/docs/deployment

2. Cloudflare Pages Docs:
   https://developers.cloudflare.com/pages

3. Common Error Solutions:
   - Build fails: Check node version
   - 404 errors: Check output directory
   - Blank page: Check build command
