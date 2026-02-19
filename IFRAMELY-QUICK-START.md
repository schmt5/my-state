# Iframely Quick Start ⚡

Get your XState app working with Iframely in 5 minutes.

## 🎯 What You Need to Do

### 1. Update Your Vercel URL (2 minutes)

Open `index.html` and replace **3 instances** of `https://your-app.vercel.app/` with your actual Vercel URL:

```html
<!-- Line ~15 -->
<meta property="og:url" content="https://YOUR-ACTUAL-URL.vercel.app/" />

<!-- Line ~26 -->
<meta property="og:image" content="https://YOUR-ACTUAL-URL.vercel.app/preview.png" />

<!-- Line ~33 -->
<meta property="twitter:url" content="https://YOUR-ACTUAL-URL.vercel.app/" />

<!-- Line ~44 -->
<meta property="twitter:image" content="https://YOUR-ACTUAL-URL.vercel.app/preview.png" />
```

**Find your Vercel URL:**
- Go to https://vercel.com/dashboard
- Click your project
- Copy the URL (e.g., `https://my-state-xyz123.vercel.app`)

### 2. Create Preview Image (Optional - 3 minutes)

Create a 1200x630px image showing your app:

**Option A: Screenshot**
1. Open your app at full size (1280x720 minimum)
2. Take a screenshot
3. Crop to 1200x630px
4. Save as `public/preview.png`

**Option B: Quick Design**
1. Go to https://www.canva.com
2. Use "Facebook Post" template (1200x630)
3. Add your app name + tagline + screenshot
4. Download as PNG
5. Save to `public/preview.png`

**Option C: Skip It**
Delete these lines from `index.html`:
```html
<meta property="og:image" content="..." />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="twitter:image" content="..." />
```

### 3. Deploy (30 seconds)

```bash
git add .
git commit -m "Add Iframely integration"
git push
```

Wait for Vercel to deploy (usually ~30 seconds).

### 4. Test (1 minute)

Go to: https://iframely.com/try

Enter your Vercel URL and click "Test URL"

**You should see:**
- ✅ Title: "XState v5 + React Demo | Interactive State Machines"
- ✅ Description: Your app description
- ✅ Image: Your preview image (if added)
- ✅ Embed code ready to copy

---

## 🎉 Done!

Your app is now embeddable! Use it:

### In WordPress
Install Iframely plugin, paste your URL

### In Notion
Add `/embed` block, paste your URL

### In Your Site
```html
<iframe src="https://your-app.vercel.app" 
        width="100%" 
        height="600px">
</iframe>
```

### Share on Social Media
Just paste the URL - rich preview appears automatically!

---

## 🐛 Troubleshooting

**Preview not showing?**
- Add `?refresh=true` to Iframely test URL
- Wait 2-5 minutes after deployment
- Check image URL in browser: `https://your-url.vercel.app/preview.png`

**Wrong title/description?**
- Verify changes deployed: View source of your live site
- Clear Iframely cache: https://iframely.com/try?refresh=true&url=YOUR_URL

**Need help?**
- See `IFRAMELY.md` for detailed docs
- See `IFRAMELY-CHECKLIST.md` for full checklist
- See `META-TAGS-REFERENCE.md` for technical details

---

## 📚 What's Included

Your app now has:
- ✅ Open Graph meta tags (Facebook, LinkedIn, Discord)
- ✅ Twitter Card meta tags
- ✅ Iframely-specific meta tags
- ✅ Responsive embed support
- ✅ Rich preview for social sharing

All configured and ready to use! 🚀