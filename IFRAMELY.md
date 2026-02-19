# Iframely Integration Guide

This guide explains how to use your Vercel-hosted XState app with **Iframely** for rich embeds and URL previews.

## 🎯 What is Iframely?

Iframely is a service that generates rich embed codes and URL previews for your content. It automatically fetches metadata from your site and creates beautiful embeds that can be used in blogs, documentation, CMSs, and more.

## ✅ What's Already Configured

Your app is now configured with:

1. **Open Graph meta tags** - For social sharing (Facebook, LinkedIn, etc.)
2. **Twitter Card meta tags** - For Twitter/X previews
3. **Iframely-specific meta tags** - For embed behavior
4. **Responsive viewport** - For mobile-friendly embeds

All meta tags are in `index.html` and will be included when Iframely fetches your URL.

## 🚀 Quick Start

### 1. Update Your Vercel URL

In `index.html`, replace `https://your-app.vercel.app/` with your actual Vercel URL:

```html
<meta property="og:url" content="https://your-actual-app.vercel.app/" />
```

Update this in **3 places**:
- Line 15: `og:url`
- Line 33: `twitter:url`
- Line 26 & 44: Image URLs (or remove if no preview image)

### 2. (Optional) Add a Preview Image

Create a preview image (1200x630px recommended) and add it to `public/preview.png`.

If you don't have a preview image, remove these lines from `index.html`:
```html
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

Vercel will automatically deploy your changes.

### 4. Test with Iframely

Visit: https://iframely.com/try

Enter your Vercel URL (e.g., `https://your-app.vercel.app/`) and click "Test URL"

You should see:
- Title: "XState v5 + React Demo | Interactive State Machines"
- Description: Your app description
- Preview image (if added)
- Embed code ready to use

## 📊 How Iframely Works

1. **User enters your URL** into Iframely
2. **Iframely fetches** your `index.html`
3. **Reads meta tags** (Open Graph, Twitter, oEmbed)
4. **Generates embed code** based on the metadata
5. **Returns iframe** or rich preview

## 🎨 Customizing Embeds

### Meta Tag Reference

```html
<!-- Basic Info -->
<title>Your App Title</title>
<meta name="description" content="Your description" />

<!-- Open Graph (Facebook, LinkedIn) -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://your-url.com/" />
<meta property="og:title" content="Your Title" />
<meta property="og:description" content="Your description" />
<meta property="og:image" content="https://your-url.com/image.png" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Your Title" />
<meta property="twitter:description" content="Your description" />
<meta property="twitter:image" content="https://your-url.com/image.png" />

<!-- Iframely Specific -->
<meta name="iframely:card" content="player" />
<meta name="iframely:width" content="1280" />
<meta name="iframely:height" content="720" />
```

### Embed Size Options

You can control embed dimensions with Iframely meta tags:

```html
<!-- Small embed (default) -->
<meta name="iframely:width" content="640" />
<meta name="iframely:height" content="480" />

<!-- Large embed (current) -->
<meta name="iframely:width" content="1280" />
<meta name="iframely:height" content="720" />

<!-- Full width -->
<meta name="iframely:width" content="100%" />
<meta name="iframely:height" content="600" />
```

## 🔧 Using Iframely API

If you want to use Iframely programmatically:

### 1. Sign up for Iframely

Visit: https://iframely.com/

### 2. Get your API key

From your dashboard: https://iframely.com/dashboard

### 3. Make API requests

```javascript
// Example API call
const url = 'https://your-app.vercel.app/';
const apiKey = 'your-api-key';

fetch(`https://iframe.ly/api/iframely?url=${encodeURIComponent(url)}&api_key=${apiKey}`)
  .then(res => res.json())
  .then(data => {
    console.log('Embed HTML:', data.html);
    console.log('Title:', data.meta.title);
    console.log('Description:', data.meta.description);
  });
```

### 4. Use the embed code

```html
<!-- Iframely returns something like this -->
<div class="iframely-embed">
  <div class="iframely-responsive" style="padding-bottom: 56.25%;">
    <iframe src="https://your-app.vercel.app/" 
            frameborder="0" 
            allowfullscreen>
    </iframe>
  </div>
</div>
```

## 📱 Embedding in Different Platforms

### WordPress
1. Install Iframely plugin: https://wordpress.org/plugins/iframely/
2. Paste your Vercel URL
3. Automatic rich embed appears

### Notion
1. Add `/embed` block
2. Paste your Vercel URL
3. Notion automatically fetches metadata

### Medium
1. Paste your URL on its own line
2. Medium auto-embeds using Open Graph tags

### Ghost CMS
1. Use bookmark or embed card
2. Paste your Vercel URL

### Custom Site
```html
<!-- Use Iframely embed.js -->
<script async src="//cdn.iframe.ly/embed.js"></script>

<!-- Add your URL -->
<div class="iframely-embed">
  <a href="https://your-app.vercel.app/" data-iframely-url>XState Demo</a>
</div>
```

## 🎯 Best Practices

### 1. Preview Image
- **Size**: 1200x630px (Facebook/LinkedIn standard)
- **Format**: PNG or JPG
- **Content**: App screenshot or logo with text
- **File size**: < 8MB
- **Location**: `public/preview.png`

### 2. Description
- **Length**: 150-200 characters
- **Keywords**: Include "XState", "state machines", "React"
- **Clear value**: What users will see/learn

### 3. Title
- **Length**: 60-70 characters
- **Format**: `Primary Title | Secondary Info`
- **Descriptive**: Clear purpose of the app

### 4. URL Structure
- Use clean URLs: `/toggle`, `/traffic-light`
- Each route can have its own meta tags (requires SSR or pre-rendering)

## 🐛 Troubleshooting

### Iframely doesn't show my preview image
1. Make sure image is publicly accessible
2. Check image URL is absolute (starts with `https://`)
3. Verify image size is < 8MB
4. Test image URL directly in browser

### Embed shows wrong title/description
1. Clear Iframely cache: https://iframely.com/try?refresh=true&url=YOUR_URL
2. Check meta tags in deployed site (View Source)
3. Wait 5-10 minutes after deployment

### Iframe doesn't load
1. Check for X-Frame-Options headers (shouldn't block on Vercel)
2. Test URL directly in browser
3. Check browser console for errors

### Changes not showing up
1. Deploy changes to Vercel
2. Clear Iframely cache with `?refresh=true`
3. Hard refresh your browser (Ctrl+Shift+R / Cmd+Shift+R)

## 📚 Resources

- **Iframely Docs**: https://iframely.com/docs
- **Open Graph Protocol**: https://ogp.me/
- **Twitter Cards**: https://developer.twitter.com/en/docs/twitter-for-websites/cards
- **Test Your Meta Tags**: 
  - Iframely: https://iframely.com/try
  - Facebook: https://developers.facebook.com/tools/debug/
  - Twitter: https://cards-dev.twitter.com/validator

## 🎉 Example Use Cases

### 1. Documentation Site
Embed your XState examples in docs:
```markdown
Check out this interactive state machine demo:
[Embed: https://your-app.vercel.app/toggle]
```

### 2. Blog Post
```html
<iframe src="https://your-app.vercel.app/traffic-light" 
        width="100%" 
        height="600px" 
        frameborder="0">
</iframe>
```

### 3. Portfolio
Show interactive demos in your portfolio site using Iframely embeds.

### 4. Social Sharing
Share on Twitter/LinkedIn with rich preview cards automatically generated.

---

## 🚀 Next Steps

1. ✅ Update `index.html` with your actual Vercel URL
2. ✅ (Optional) Create `public/preview.png` preview image
3. ✅ Deploy to Vercel
4. ✅ Test at https://iframely.com/try
5. ✅ Share your embeddable XState demos!

**Happy embedding!** 🎉