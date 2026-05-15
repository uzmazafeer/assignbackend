# Deployment Guide - Vercel

## ✅ Issues Fixed

1. **Case Sensitivity** - Changed `authController.js` to `AuthController.js` in imports
2. **CORS Configuration** - Added proper CORS settings for production
3. **Graceful Shutdown** - Added signal handlers for Vercel
4. **Environment Variables** - Added Vercel environment variable configuration
5. **Error Handling** - Added global error handler middleware
6. **Express Export** - App now exports default for Vercel compatibility

## 🚀 Deploy to Vercel

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
cd d:\backend01\assignbackend
vercel
```

### Step 4: Set Environment Variables on Vercel

After deployment, go to your Vercel project dashboard and add these environment variables:

**Variable 1: MONGODB_URI**
- Name: `MONGODB_URI`
- Value: `mongodb+srv://uzmazafeer483_db_user:uzma1002@cluster0.smtm9hj.mongodb.net/uzmazafeer483_db?retryWrites=true&w=majority`

**Variable 2: JWT_SECRET**
- Name: `JWT_SECRET`
- Value: `your-production-secret-key-change-this-to-something-secure`

**Variable 3: NODE_ENV** (optional)
- Name: `NODE_ENV`
- Value: `production`

## 📝 Environment Variables Setup

Create a `.env.production` file locally:
```
MONGODB_URI=mongodb+srv://uzmazafeer483_db_user:uzma1002@cluster0.smtm9hj.mongodb.net/uzmazafeer483_db?retryWrites=true&w=majority
JWT_SECRET=your-production-secret-key
NODE_ENV=production
```

## 🔗 Vercel Configuration

The `vercel.json` file contains:
- Build configuration for Node.js
- Route mapping for all API calls
- Environment variable references

## 🌐 Update Frontend for Production

Update the API URL in `public/index.html`:

```javascript
// Change this line in the script section:
const API_URL = 'http://localhost:3000/api';

// To your Vercel URL:
const API_URL = 'https://your-project-name.vercel.app/api';
```

## ✅ Verification Checklist

- [ ] All imports use correct case (AuthController.js)
- [ ] Environment variables set on Vercel dashboard
- [ ] MongoDB URI is correct and accessible
- [ ] JWT_SECRET is set to a secure value
- [ ] Frontend API URL points to Vercel deployment
- [ ] CORS origins include your frontend domain

## 📊 Common Errors Fixed

| Error | Cause | Solution |
|-------|-------|----------|
| FUNCTION_INVOCATION_FAILED | Wrong import case | Fixed - now using AuthController.js |
| MongoDB connection failed | Wrong environment variables | Add MONGODB_URI to Vercel env vars |
| CORS error | Frontend calling wrong API | Update frontend API_URL |
| 404 errors | Module not found | All imports now case-correct |

## 🔄 Redeployment

To redeploy after making changes:
```bash
vercel --prod
```

## 📱 Frontend Deployment (Optional)

You can also deploy the frontend separately:

1. Create a separate frontend folder with HTML/CSS/JS
2. Deploy to Vercel, Netlify, or GitHub Pages
3. Update the API_URL to point to your backend API

## 🛠️ Troubleshooting

### If you still get errors:

1. **Check Vercel logs:**
   ```bash
   vercel logs
   ```

2. **Verify environment variables are set:**
   - Go to Vercel Dashboard → Project → Settings → Environment Variables
   - Ensure MONGODB_URI and JWT_SECRET are there

3. **Test locally first:**
   ```bash
   npm start
   ```

4. **Check MongoDB connection:**
   - Ensure IP whitelist includes Vercel IPs (0.0.0.0/0 for testing)

## ✨ Success Indicators

- API returns `{ message: 'Server is running' }` on GET `/api/health`
- Authentication endpoints work correctly
- User can register and login from deployed frontend
- JWT tokens are properly generated and validated
