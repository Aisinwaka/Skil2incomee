# Skill2Income Deployment Guide

This guide covers deploying Skill2Income to production using Netlify (Frontend) and Railway/Render (Backend).

## 📊 Architecture Overview

```
┌─────────────────────────────────────┐
│    Netlify (Frontend)               │
│  - Next.js 14                       │
│  - React + TypeScript               │
│  - Tailwind CSS                     │
└────────────┬────────────────────────┘
             │
             │ HTTPS API Calls
             │
┌────────────▼────────────────────────┐
│    Railway/Render (Backend)         │
│  - Express.js                       │
│  - Node.js 18+                      │
│  - PostgreSQL Database              │
│  - Redis Cache                      │
└─────────────────────────────────────┘
```

---

## 🎯 PART 1: Deploy Frontend to Netlify

### Prerequisites
- GitHub account (✅ you have it)
- Netlify account (create free at [netlify.com](https://netlify.com))
- Backend API URL (we'll get this in Part 2)

### Step 1: Create Netlify Account
1. Go to [netlify.com](https://netlify.com)
2. Click **Sign Up**
3. Choose **GitHub** and authorize Netlify to access your repositories

### Step 2: Create New Site from Git
1. In Netlify dashboard, click **"Add new site"** → **"Import an existing project"**
2. Select **GitHub** as your provider
3. Search for and select `Aisinwaka/Skil2incomee`
4. Select **main** branch

### Step 3: Configure Build Settings
Netlify should auto-detect Next.js, but verify:

**Build settings:**
- **Build command**: `npm run build --prefix frontend`
- **Publish directory**: `frontend/.next`
- **Base directory**: (leave empty)

### Step 4: Add Environment Variables
Before deploying, add environment variables:

1. Click **Site Settings** → **Build & Deploy** → **Environment**
2. Click **Edit variables**
3. Add these variables:

```
NEXT_PUBLIC_API_URL = https://your-backend-url.railway.app
```

**Note**: We'll update this with the actual backend URL after Part 2.

### Step 5: Deploy
Click **Deploy site** and wait for the build to complete.

✅ **Your frontend is now live at**: `https://your-site-name.netlify.app`

---

## 🚀 PART 2: Deploy Backend to Railway

### Why Railway?
- ✅ PostgreSQL support
- ✅ Redis support
- ✅ Easy environment variables
- ✅ Free tier available
- ✅ 1-click deployment from GitHub

### Step 1: Create Railway Account
1. Go to [railway.app](https://railway.app)
2. Click **Create Account**
3. Sign up with GitHub

### Step 2: Create New Project
1. Click **"New Project"**
2. Select **Deploy from GitHub repo**
3. Select `Aisinwaka/Skil2incomee`

### Step 3: Add PostgreSQL Database
1. In Railway dashboard, click **"+ New Service"**
2. Select **Database** → **PostgreSQL**
3. Configure:
   - **Name**: skill2income-db
   - Click **Create**

### Step 4: Add Redis Cache
1. Click **"+ New Service"**
2. Select **Database** → **Redis**
3. Configure:
   - **Name**: skill2income-redis
   - Click **Create**

### Step 5: Configure Backend Service
1. Click **"+ New Service"**
2. Select **GitHub Repo**
3. Choose `Aisinwaka/Skil2incomee`
4. Name it: `skill2income-api`

**Set build and start commands:**
- **Build command**: `cd backend && npm install && npm run build`
- **Start command**: `cd backend && npm run start`

### Step 6: Add Environment Variables
In Railway, go to your backend service and add these variables:

```env
# Server
NODE_ENV=production
PORT=4000

# Database (Railway auto-provides these)
DATABASE_URL=${{Postgres.DATABASE_URL}}
REDIS_URL=${{Redis.REDIS_URL}}

# Authentication Secrets (⚠️ Change these!)
JWT_SECRET=your-super-secret-jwt-key-min-32-chars
JWT_EXPIRE=7d
REFRESH_TOKEN_EXPIRE=30d

# Third-party APIs
OPENAI_API_KEY=your-openai-api-key
GOOGLE_CLIENT_ID=your-google-oauth-id
GOOGLE_CLIENT_SECRET=your-google-oauth-secret

# Email (Gmail example)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-specific-password

# Frontend URL (for CORS)
FRONTEND_URL=https://your-netlify-site.netlify.app

# AWS S3 (optional, for file uploads)
AWS_ACCESS_KEY_ID=your-aws-key
AWS_SECRET_ACCESS_KEY=your-aws-secret
AWS_S3_BUCKET=skill2income-uploads
AWS_REGION=us-east-1
```

### Step 7: Deploy Backend
1. Railway auto-deploys when you push to GitHub
2. You'll see the deploy logs
3. Once deployed, go to **Settings** → **Generate Domain**
4. Copy your backend URL (e.g., `https://skill2income-api.railway.app`)

✅ **Your backend is now live!**

---

## 🔗 PART 3: Connect Frontend to Backend

### Update Netlify Environment Variables
1. Go back to Netlify dashboard
2. Go to **Site Settings** → **Build & Deploy** → **Environment**
3. Update `NEXT_PUBLIC_API_URL` with your Railway backend URL:
   ```
   NEXT_PUBLIC_API_URL = https://skill2income-api.railway.app
   ```

4. Trigger a new deploy:
   - Go to **Deploys** → **Trigger deploy** → **Deploy site**

✅ **Frontend and backend are now connected!**

---

## 🧪 Testing Your Deployment

1. **Test Frontend**: Visit `https://your-site.netlify.app`
2. **Test Backend API**: Visit `https://your-backend-url/api/health`
3. **Check CORS**: In browser console, test API calls
4. **Test Auth**: Create an account and verify login works

---

## 📊 Database Migrations

After deploying backend, run migrations:

**Option 1: Railway CLI**
```bash
railway run npm run db:migrate
```

**Option 2: Prisma Studio**
```bash
npx prisma studio --data-proxy
```

---

## 🔐 Security Checklist

- [ ] Change `JWT_SECRET` to a random 32+ character string
- [ ] Use strong database passwords
- [ ] Enable HTTPS (automatic on Netlify & Railway)
- [ ] Set up environment variables (never commit `.env`)
- [ ] Configure CORS properly (only allow your Netlify domain)
- [ ] Set up error monitoring (Sentry)
- [ ] Enable rate limiting
- [ ] Use OAuth for authentication (Google)

---

## 🐛 Troubleshooting

### Frontend won't deploy
- Check that `frontend/package.json` exists
- Verify build command is correct
- Check build logs in Netlify

### Backend deployment fails
- Ensure `backend/package.json` has correct dependencies
- Check Node.js version is 18+
- Verify all environment variables are set
- Check Railway logs for errors

### API calls fail (CORS error)
- Add your Netlify URL to backend CORS config
- In `backend/src/server.ts`, update CORS settings:
  ```typescript
  app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000'
  }));
  ```

### Database connection fails
- Verify `DATABASE_URL` is correct
- Check database is running
- Run migrations: `npm run db:migrate`

---

## 📈 Monitoring & Logs

### Netlify Logs
- Dashboard → **Deploys** → Click deploy → **View logs**

### Railway Logs
- Dashboard → Select service → **Logs** tab
- Real-time logs as requests come in

### Database Logs
- Railway → PostgreSQL service → **Logs**

---

## 🔄 Continuous Deployment

Both Netlify and Railway auto-deploy when you push to GitHub:

```bash
git add .
git commit -m "feat: add new feature"
git push origin main
```

- Netlify redeploys frontend (2-3 minutes)
- Railway redeploys backend (1-2 minutes)

---

## 💰 Costs

### Netlify
- **Free tier**: ✅ Perfect for most projects
  - 300 build minutes/month
  - Unlimited bandwidth
  - Custom domain support

### Railway
- **Free tier**: ✅ $5 monthly credit
  - Good for small projects
  - PostgreSQL & Redis included
- **Pay-as-you-go**: Scale as needed

---

## 🎓 Next Steps

1. ✅ Deploy frontend to Netlify
2. ✅ Deploy backend to Railway
3. ✅ Connect them together
4. ✅ Set up custom domain (optional)
5. ✅ Monitor and maintain

---

## 📞 Support

- **Netlify Docs**: https://docs.netlify.com
- **Railway Docs**: https://docs.railway.app
- **Next.js Docs**: https://nextjs.org/docs
- **Express Docs**: https://expressjs.com

---

**Built with ❤️ for Skill2Income**
