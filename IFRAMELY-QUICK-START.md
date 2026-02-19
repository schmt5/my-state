# Embedding Quick Start ⚡

Get your XState app embeddable in 2 minutes.

## 🎯 Important: You Don't Need Iframely!

**Good news:** Your app is **already embeddable** using standard HTML iframes. No service or subscription needed!

**What about Iframely?** Iframely's free tier only works for whitelisted providers (Google Maps, YouTube, etc.). For custom sites, they require a paid plan.

**What you DO get:** Rich preview cards on social media (Twitter, LinkedIn, Facebook) using the meta tags we added.

---

## ✅ Option 1: Direct Embedding (Free - Recommended)

### Step 1: Update Your Vercel URL
Open `index.html` and replace `https://your-app.vercel.app/` with your actual Vercel URL (appears multiple times).

### Step 2: Deploy
```bash
git add .
git commit -m "Add embedding meta tags"
git push
```

### Step 3: Embed Anywhere
Use this HTML code on any website:

```html
<iframe 
  src="https://YOUR-ACTUAL-APP.vercel.app" 
  width="100%" 
  height="600px" 
  frameborder="0"
></iframe>
```

**That's it!** Works immediately, no service needed.

### Responsive Embed (16:9)
```html
<div style="position: relative; width: 100%; padding-bottom: 56.25%;">
  <iframe 
    src="https://YOUR-ACTUAL-APP.vercel.app"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
  ></iframe>
</div>
```

---

## ✅ Option 2: Iframely API (Paid)

If you want Iframely's advanced features:

1. Sign up at https://iframely.com (paid plans start ~$49/month)
2. Get your API key
3. Use their API to generate embeds

**Most users don't need this!** Standard iframes work great.

---

## 🎯 What Works Right Now

### ✅ Direct iframe Embedding
- Your own websites
- WordPress (HTML block)
- Notion (/embed command)
- Ghost CMS
- Documentation sites
- React/Next.js apps
- Any HTML page

### ✅ Social Media Rich Previews
- Twitter/X - Shows card with title & description
- LinkedIn - Shows professional preview
- Facebook - Shows Open Graph preview
- Discord - Shows embed card
- Slack - Unfurls with preview

**All from the meta tags we added!**

---

## 📚 Where to Embed

### WordPress
1. Add "Custom HTML" block
2. Paste iframe code
3. Publish

### Notion
1. Type `/embed`
2. Paste your Vercel URL
3. Press Enter

### Your React App
```jsx
<iframe
  src="https://your-app.vercel.app"
  width="100%"
  height="600px"
  frameBorder="0"
/>
```

### Your Documentation
```html
<iframe src="https://your-app.vercel.app" width="100%" height="600px"></iframe>
```

---

## 🧪 Test Your Embed

1. Open `test-embed.html` in your browser
2. Update the URL to your Vercel URL
3. See your app embedded live
4. Works immediately!

---

## 📖 Full Documentation

- **Direct Embedding Guide**: `DIRECT-EMBEDDING.md` (Complete guide, all platforms)
- **Meta Tags Reference**: `META-TAGS-REFERENCE.md` (Technical details)
- **Social Media Previews**: Meta tags in `index.html` enable this

---

## 🎉 Summary

**You have:**
- ✅ Direct iframe embedding (works everywhere, free)
- ✅ Rich social media preview cards
- ✅ Open Graph & Twitter Card support
- ✅ Professional metadata

**You DON'T need:**
- ❌ Iframely subscription
- ❌ API keys
- ❌ Third-party services

**Just use standard HTML iframes!** 🚀

---

## 🔗 Quick Reference

**Basic Embed:**
```html
<iframe src="https://your-app.vercel.app" width="100%" height="600px"></iframe>
```

**Test Locally:**
Open `test-embed.html` in browser

**Full Guide:**
See `DIRECT-EMBEDDING.md`

That's all you need! 🎯