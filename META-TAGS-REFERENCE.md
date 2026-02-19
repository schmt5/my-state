# Meta Tags Reference & Validation

Quick reference for all meta tags in your XState app for Iframely integration.

## 🎯 Current Meta Tags in index.html

### Basic HTML Meta Tags
```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>XState v5 + React Demo | Interactive State Machines</title>
<meta name="description" content="Interactive XState v5 state machine examples with real-time Stately Inspector visualization. Explore toggle, traffic light, and counter machines with live diagrams." />
```

### Open Graph (Facebook, LinkedIn, Discord)
```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://your-app.vercel.app/" />
<meta property="og:title" content="XState v5 + React Demo | Interactive State Machines" />
<meta property="og:description" content="Interactive XState v5 state machine examples with real-time Stately Inspector visualization. Explore toggle, traffic light, and counter machines with live diagrams." />
<meta property="og:image" content="https://your-app.vercel.app/preview.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

### Twitter Cards
```html
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://your-app.vercel.app/" />
<meta property="twitter:title" content="XState v5 + React Demo | Interactive State Machines" />
<meta property="twitter:description" content="Interactive XState v5 state machine examples with real-time Stately Inspector visualization. Explore toggle, traffic light, and counter machines with live diagrams." />
<meta property="twitter:image" content="https://your-app.vercel.app/preview.png" />
```

### Iframely Specific
```html
<meta name="iframely:card" content="player" />
<meta name="iframely:width" content="1280" />
<meta name="iframely:height" content="720" />
```

---

## ✅ Validation Checklist

### Before Deployment
- [ ] All `https://your-app.vercel.app/` URLs updated to actual Vercel URL
- [ ] Title is descriptive and < 70 characters
- [ ] Description is clear and 150-200 characters
- [ ] Image URL points to actual image (or meta tags removed if no image)
- [ ] Image dimensions match actual file (1200x630px recommended)

### After Deployment
- [ ] Visit your URL and "View Source" to verify meta tags
- [ ] Test at https://iframely.com/try
- [ ] Test at https://developers.facebook.com/tools/debug/
- [ ] Test at https://cards-dev.twitter.com/validator
- [ ] Share on social media to verify preview

---

## 🔍 Testing Your Meta Tags

### 1. View Source Method
1. Deploy to Vercel
2. Open your URL in browser
3. Right-click → "View Page Source"
4. Search for `<meta property="og:` to verify tags

### 2. Iframely Testing
```
https://iframely.com/try?url=https://your-app.vercel.app
```

### 3. Facebook Debugger
```
https://developers.facebook.com/tools/debug/?q=https://your-app.vercel.app
```

### 4. Twitter Card Validator
```
https://cards-dev.twitter.com/validator
```

### 5. LinkedIn Post Inspector
```
https://www.linkedin.com/post-inspector/
```

---

## 📐 Meta Tag Requirements

### Title
- **Length**: 55-70 characters (optimal for all platforms)
- **Format**: `Primary Title | Secondary Info`
- **Current**: "XState v5 + React Demo | Interactive State Machines" ✅ (54 chars)

### Description
- **Length**: 150-200 characters (optimal)
- **Content**: Clear value proposition
- **Current**: 170 characters ✅

### Image
- **Size**: 1200x630px (Facebook/OG standard)
- **Formats**: JPG, PNG, GIF, WebP
- **Max file size**: 8MB (5MB recommended)
- **Min size**: 200x200px
- **Aspect ratio**: 1.91:1 (preferred)

### URL
- **Format**: Absolute URL with https://
- **Must be publicly accessible**
- **No redirects preferred**

---

## 🎨 Image Guidelines

### Recommended Preview Image Specs
```
Width: 1200px
Height: 630px
Format: PNG or JPG
File size: < 1MB
Location: public/preview.png
```

### Image Content Ideas
1. Screenshot of your app with state machine diagram
2. Logo + tagline + visual elements
3. Animated state machine transition (GIF)
4. Code snippet + visual output
5. Split view: code + running app

### Quick Image Creation Tools
- **Canva**: Use "Facebook Post" template (1200x630)
- **Figma**: Create 1200x630 frame
- **Photoshop**: New file → 1200x630px
- **Screenshot + Crop**: Full page screenshot, crop to 1.91:1

---

## 🚫 Common Mistakes

### ❌ Relative URLs
```html
<!-- WRONG -->
<meta property="og:image" content="/preview.png" />

<!-- CORRECT -->
<meta property="og:image" content="https://your-app.vercel.app/preview.png" />
```

### ❌ Localhost URLs
```html
<!-- WRONG -->
<meta property="og:url" content="http://localhost:5173/" />

<!-- CORRECT -->
<meta property="og:url" content="https://your-app.vercel.app/" />
```

### ❌ Missing Image Dimensions
```html
<!-- INCOMPLETE -->
<meta property="og:image" content="https://..." />

<!-- COMPLETE -->
<meta property="og:image" content="https://..." />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

### ❌ Title Too Long
```html
<!-- TOO LONG (truncated on social media) -->
<title>This is a Really Long Title That Will Get Cut Off When Shared on Social Media Platforms</title>

<!-- OPTIMAL -->
<title>XState v5 + React Demo | Interactive State Machines</title>
```

---

## 🔧 Customization Options

### Different Card Types

**Summary Card (Text-focused)**
```html
<meta property="twitter:card" content="summary" />
```

**Large Image Card (Current)**
```html
<meta property="twitter:card" content="summary_large_image" />
```

**Player Card (Video/Interactive)**
```html
<meta property="twitter:card" content="player" />
<meta property="twitter:player" content="https://your-app.vercel.app" />
<meta property="twitter:player:width" content="1280" />
<meta property="twitter:player:height" content="720" />
```

### Embed Sizes

**Small Embed**
```html
<meta name="iframely:width" content="640" />
<meta name="iframely:height" content="480" />
```

**Medium Embed**
```html
<meta name="iframely:width" content="960" />
<meta name="iframely:height" content="540" />
```

**Large Embed (Current)**
```html
<meta name="iframely:width" content="1280" />
<meta name="iframely:height" content="720" />
```

**Full Width**
```html
<meta name="iframely:width" content="100%" />
<meta name="iframely:height" content="600" />
```

---

## 🎯 Per-Route Meta Tags (Advanced)

For SPAs like yours, meta tags in `index.html` apply to all routes. To have different meta tags per route:

### Option 1: React Helmet
```bash
npm install react-helmet-async
```

```jsx
import { Helmet } from 'react-helmet-async';

function TogglePage() {
  return (
    <>
      <Helmet>
        <title>Toggle Machine | XState Demo</title>
        <meta property="og:title" content="Toggle Machine | XState Demo" />
        <meta property="og:description" content="Learn XState basics with this simple toggle machine example" />
      </Helmet>
      {/* Your component */}
    </>
  );
}
```

### Option 2: Pre-rendering (Vercel)
Add `vercel.json`:
```json
{
  "routes": [
    { "handle": "filesystem" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

Then use a plugin like `vite-plugin-prerender`.

---

## 📊 Testing Matrix

| Platform | Tool | What It Shows |
|----------|------|---------------|
| Iframely | https://iframely.com/try | Embed preview, metadata |
| Facebook | https://developers.facebook.com/tools/debug/ | OG tags, scraping status |
| Twitter | https://cards-dev.twitter.com/validator | Card preview, errors |
| LinkedIn | https://www.linkedin.com/post-inspector/ | Preview, debug info |
| Slack | Paste URL in Slack | Unfurl preview |
| Discord | Paste URL in Discord | Embed preview |

---

## 🚀 Quick Update Command

```bash
# 1. Update index.html with your Vercel URL
# 2. Commit and push
git add index.html
git commit -m "Update meta tags with Vercel URL"
git push

# 3. Wait for Vercel deployment (~30 seconds)
# 4. Test with Iframely
# Open: https://iframely.com/try?url=https://your-app.vercel.app
```

---

## 📚 Additional Resources

- **Open Graph Protocol**: https://ogp.me/
- **Twitter Cards Guide**: https://developer.twitter.com/en/docs/twitter-for-websites/cards
- **Iframely Docs**: https://iframely.com/docs
- **Meta Tag Validator**: https://metatags.io/
- **Image Size Validator**: https://www.websiteplanet.com/webtools/meta-tags/

---

## ✅ Final Checklist

Before considering your Iframely integration complete:

- [ ] `index.html` updated with actual Vercel URL
- [ ] Preview image created (1200x630px) and uploaded to `public/`
- [ ] Deployed to Vercel
- [ ] Tested with Iframely: https://iframely.com/try
- [ ] Tested with Facebook Debugger
- [ ] Tested with Twitter Card Validator
- [ ] Preview image loads correctly
- [ ] Title and description display correctly
- [ ] Embed works in an iframe (test with `test-embed.html`)
- [ ] No console errors when embedded
- [ ] Responsive layout works in embed

---

## 🎉 Success!

Once all items are checked, your XState app is fully optimized for:
- ✅ Iframely embeds
- ✅ Social media sharing
- ✅ Rich URL previews
- ✅ CMS integrations
- ✅ Documentation sites
- ✅ Blog posts

Share your embeddable XState demos with the world! 🚀