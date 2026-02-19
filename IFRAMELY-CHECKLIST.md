# Iframely Setup Checklist ✅

Quick checklist to get your XState app working with Iframely.

## 📋 Setup Steps

### 1. Update Your Vercel URL
- [ ] Open `index.html`
- [ ] Find `https://your-app.vercel.app/` (appears 3 times)
- [ ] Replace with your actual Vercel URL
- [ ] Save the file

### 2. Create Preview Image (Optional but Recommended)
- [ ] Create a 1200x630px image showing your app
- [ ] Save as `public/preview.png`
- [ ] Or remove image meta tags if skipping this step

**To remove image tags if not using:**
```html
<!-- Delete these lines from index.html -->
<meta property="og:image" content="..." />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="twitter:image" content="..." />
```

### 3. Deploy to Vercel
```bash
git add .
git commit -m "Add Iframely meta tags"
git push
```

- [ ] Verify deployment completes successfully
- [ ] Visit your Vercel URL to confirm it loads

### 4. Test with Iframely
- [ ] Go to https://iframely.com/try
- [ ] Enter your Vercel URL
- [ ] Click "Test URL"
- [ ] Verify title, description, and image appear correctly

### 5. Test on Social Platforms (Optional)
- [ ] Facebook: https://developers.facebook.com/tools/debug/
- [ ] Twitter: https://cards-dev.twitter.com/validator
- [ ] LinkedIn: Share the URL and preview

## ✨ What You Should See

When testing on Iframely, you should see:

```
Title: XState v5 + React Demo | Interactive State Machines
Description: Interactive XState v5 state machine examples with real-time Stately Inspector visualization...
Image: Your preview image (if added)
Embed Type: Player/Website
Status: ✓ Ready to embed
```

## 🎯 Quick Commands

```bash
# Deploy to Vercel
git add .
git commit -m "Configure Iframely integration"
git push

# Test meta tags locally
npm run build
npm run preview
# Then view source in browser
```

## 🐛 Common Issues

### Preview not showing?
1. Clear Iframely cache: Add `?refresh=true` to test URL
2. Wait 2-5 minutes after deployment
3. Check that image URL is absolute (starts with https://)

### Wrong title/description?
1. Check `index.html` meta tags
2. Deploy changes
3. Clear cache at https://iframely.com/try?refresh=true&url=YOUR_URL

### Image not loading?
1. Verify `public/preview.png` exists
2. Check image is < 8MB
3. Test image URL directly: `https://your-app.vercel.app/preview.png`

## 📚 Reference Files

- `IFRAMELY.md` - Full documentation
- `index.html` - Meta tags location
- `public/preview.png` - Preview image

## ✅ Done!

Once all checkboxes are complete, your app is ready to be embedded anywhere with Iframely!

Share your URL and watch it generate beautiful rich previews automatically. 🎉