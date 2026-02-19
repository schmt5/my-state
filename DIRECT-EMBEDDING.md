# Direct Embedding Guide 🚀

Your XState app is **already embeddable** without needing Iframely's paid service! Here's how to embed it anywhere.

## 🎯 Why You Don't Need Iframely

**Important:** Iframely's free tier only shows interactive embeds for whitelisted providers (like Google Maps, YouTube, etc.). For custom sites like yours, Iframely requires a paid plan.

**Good news:** You can embed your site anywhere using standard HTML iframes - no service needed!

## ✅ Direct Embedding Methods

### Method 1: Basic iframe (Works Everywhere)

```html
<iframe 
  src="https://your-app.vercel.app" 
  width="100%" 
  height="600px" 
  frameborder="0"
  allowfullscreen
></iframe>
```

**Use this for:**
- Your own websites
- Documentation sites
- Blog posts
- Portfolio pages

### Method 2: Responsive 16:9 iframe

```html
<div style="position: relative; width: 100%; padding-bottom: 56.25%; overflow: hidden;">
  <iframe 
    src="https://your-app.vercel.app"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
    allowfullscreen
  ></iframe>
</div>
```

**Use this for:**
- Responsive layouts
- Mobile-friendly embeds
- Fluid width containers

### Method 3: Fixed Size Player

```html
<iframe 
  src="https://your-app.vercel.app"
  width="1280"
  height="720"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
```

**Use this for:**
- Full-screen demos
- Presentation slides
- Desktop-first layouts

## 📱 Platform-Specific Embedding

### WordPress

**Method 1: HTML Block**
1. Add a "Custom HTML" block
2. Paste your iframe code
3. Publish

**Method 2: Embed Block**
1. Add an "Embed" block
2. Paste your Vercel URL
3. WordPress auto-creates iframe

### Notion

1. Type `/embed`
2. Paste your Vercel URL
3. Press Enter
4. Notion creates an iframe automatically

### Ghost CMS

1. Type `/html` for HTML card
2. Paste iframe code
3. Or use `/embed` and paste URL

### Medium

Medium doesn't support custom iframes, but you can:
1. Use a screenshot with link
2. Link directly to your app

### Webflow

1. Add an "Embed" element
2. Paste your iframe code
3. Style the container as needed

### React Application

```jsx
function EmbeddedDemo() {
  return (
    <div className="embed-container">
      <iframe
        src="https://your-app.vercel.app"
        width="100%"
        height="600px"
        frameBorder="0"
        allowFullScreen
        title="XState Demo"
      />
    </div>
  );
}
```

### Next.js Application

```jsx
export default function DemoPage() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="https://your-app.vercel.app"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        title="XState Demo"
      />
    </div>
  );
}
```

### HTML Email (Limited Support)

Many email clients block iframes. Instead:
```html
<a href="https://your-app.vercel.app">
  <img src="https://your-app.vercel.app/preview.png" alt="XState Demo" />
  <p>Click to view interactive demo →</p>
</a>
```

## 🎨 Styling Your Embeds

### Add Border and Shadow

```html
<iframe 
  src="https://your-app.vercel.app"
  style="width: 100%; height: 600px; border: 2px solid #667eea; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.2);"
></iframe>
```

### Dark Mode Container

```html
<div style="background: #1a1a1a; padding: 20px; border-radius: 12px;">
  <iframe 
    src="https://your-app.vercel.app"
    style="width: 100%; height: 600px; border: none; border-radius: 8px;"
  ></iframe>
</div>
```

### Card Style Embed

```html
<div style="max-width: 1200px; margin: 0 auto; padding: 20px; background: white; border-radius: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
  <h2 style="margin-bottom: 16px; color: #333;">Interactive XState Demo</h2>
  <iframe 
    src="https://your-app.vercel.app"
    style="width: 100%; height: 600px; border: 1px solid #e0e0e0; border-radius: 8px;"
  ></iframe>
</div>
```

## 🔗 Embed Specific Pages

You can embed specific routes from your app:

```html
<!-- Toggle Machine -->
<iframe src="https://your-app.vercel.app/toggle" width="100%" height="600px"></iframe>

<!-- Traffic Light Machine -->
<iframe src="https://your-app.vercel.app/traffic-light" width="100%" height="600px"></iframe>

<!-- Home Page -->
<iframe src="https://your-app.vercel.app/" width="100%" height="600px"></iframe>
```

## 📊 Social Media Sharing

While you can't embed iframes on social media, your meta tags will create rich previews:

### Twitter/X
Just paste your URL - shows card with title & description

### LinkedIn
Paste your URL - shows professional preview card

### Facebook
Paste your URL - shows Open Graph preview

### Discord
Paste your URL - shows embed card

### Slack
Paste your URL - unfurls with preview

## 🛠️ Advanced: Embed with Query Parameters

Pass data to your embedded app:

```html
<iframe src="https://your-app.vercel.app?theme=dark&page=toggle"></iframe>
```

Then in your React app:
```jsx
const params = new URLSearchParams(window.location.search);
const theme = params.get('theme'); // 'dark'
const page = params.get('page'); // 'toggle'
```

## 🔒 Security Considerations

### Allow Specific Permissions

```html
<iframe 
  src="https://your-app.vercel.app"
  width="100%"
  height="600px"
  allow="accelerometer; clipboard-write; encrypted-media"
  sandbox="allow-scripts allow-same-origin"
></iframe>
```

### Sandbox Attribute Options
- `allow-scripts` - Allows JavaScript
- `allow-same-origin` - Allows localStorage access
- `allow-forms` - Allows form submission
- `allow-popups` - Allows window.open()

## 📱 Responsive Design

### Mobile-First Approach

```html
<style>
  .embed-responsive {
    position: relative;
    width: 100%;
    padding-bottom: 75%; /* 4:3 for mobile */
  }
  
  @media (min-width: 768px) {
    .embed-responsive {
      padding-bottom: 56.25%; /* 16:9 for desktop */
    }
  }
  
  .embed-responsive iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
</style>

<div class="embed-responsive">
  <iframe src="https://your-app.vercel.app"></iframe>
</div>
```

## 🎯 Testing Your Embeds

### Local Testing
Open `test-embed.html` in your browser to test locally.

### Production Testing
After deploying to Vercel:
1. Create a simple HTML file
2. Add your iframe code
3. Open in browser
4. Verify it loads and works

### Check for Issues
- ✅ App loads correctly
- ✅ No console errors
- ✅ Interactive features work
- ✅ Responsive on mobile
- ✅ No scroll issues

## ❌ What Doesn't Work

### Email Clients
Most email clients block iframes. Use images with links instead.

### Social Media Posts
You can't embed iframes in Twitter, Facebook, LinkedIn posts. They'll show preview cards instead.

### Some CMS Platforms
Some platforms strip iframes for security. Check their documentation.

## ✅ What DOES Work

### Your Own Website
✅ Complete control, full functionality

### Documentation Sites
✅ GitBook, Docusaurus, MkDocs, etc.

### Notion & Confluence
✅ Support embed blocks

### WordPress & Ghost
✅ Support custom HTML/embeds

### Webflow & Framer
✅ Support embed elements

### React/Next.js/Vue Apps
✅ Full iframe support

## 📚 Example: Full Embed Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>XState Demo Embed</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      padding: 20px;
    }
    .container {
      max-width: 1400px;
      margin: 0 auto;
    }
    h1 {
      color: white;
      text-align: center;
      margin-bottom: 30px;
    }
    .embed-wrapper {
      background: white;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    }
    .embed-container {
      position: relative;
      width: 100%;
      padding-bottom: 56.25%;
      overflow: hidden;
      border-radius: 8px;
    }
    .embed-container iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎯 Interactive XState Demo</h1>
    <div class="embed-wrapper">
      <div class="embed-container">
        <iframe 
          src="https://your-app.vercel.app"
          allowfullscreen
          allow="accelerometer; clipboard-write; encrypted-media"
        ></iframe>
      </div>
    </div>
  </div>
</body>
</html>
```

## 🚀 Quick Reference

**Basic Embed:**
```html
<iframe src="https://your-app.vercel.app" width="100%" height="600px"></iframe>
```

**Responsive Embed:**
```html
<div style="position:relative;padding-bottom:56.25%">
  <iframe src="https://your-app.vercel.app" style="position:absolute;top:0;left:0;width:100%;height:100%"></iframe>
</div>
```

**That's it!** No Iframely subscription needed. 🎉

---

## 🎯 Summary

**You DON'T need Iframely because:**
- ✅ Standard iframes work everywhere
- ✅ No cost or API limits
- ✅ Full control over styling
- ✅ Works immediately

**You DO have (from meta tags):**
- ✅ Rich social media previews
- ✅ Professional preview cards
- ✅ Open Graph support
- ✅ Twitter Card support

**Bottom line:** Your app is fully embeddable right now using standard HTML iframes! 🚀