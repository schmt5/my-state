# Design System Documentation

## 🎨 Design Philosophy

This project uses a **minimalistic, documentation-focused design** with the following principles:

### Core Principles

1. **Clarity over decoration** - Clean, readable interface without distractions
2. **No animations or transitions** - Static, predictable UI for documentation
3. **Monochromatic color scheme** - Focus on content, not colors
4. **Simple borders and spacing** - Clear visual hierarchy
5. **Readable typography** - Optimized for reading code and explanations

## 🎯 Purpose

This design is optimized for **documentation and educational purposes**, not marketing or engagement. The goal is to present XState machines clearly and allow users to focus on understanding the concepts.

## 📐 Design System

### Color Palette

**Primary Colors:**
- `#2c3e50` - Dark blue-gray (headings, buttons, primary elements)
- `#34495e` - Medium blue-gray (button hover, accents)
- `#7f8c8d` - Medium gray (body text, descriptions)
- `#95a5a6` - Light gray (secondary text)

**Backgrounds:**
- `#ffffff` - White (main background, cards)
- `#f8f9fa` - Off-white (demo areas, footer)
- `#ecf0f1` - Light gray (inactive states)

**Borders:**
- `#e0e0e0` - Light border color
- `#34495e` - Dark border for code blocks

**Code Syntax:**
- Background: `#2c3e50`
- Text: `#ecf0f1`

### Typography

**Font Stack:**
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", 
             "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", 
             "Helvetica Neue", sans-serif;
```

**Monospace (Code):**
```css
font-family: "Courier New", Consolas, Monaco, monospace;
```

**Font Sizes:**
- Page Title: `2.5rem` (40px)
- Section Heading: `1.5rem` (24px)
- Subsection: `1.3rem` (20.8px)
- Body Text: `1rem` (16px)
- Small Text: `0.9rem` (14.4px)

**Font Weights:**
- Headings: `600` (semi-bold)
- Body: `400` (regular)
- Strong: `600` (semi-bold)

**Line Height:**
- Headings: `1.2`
- Body: `1.6`
- Code: `1.5`

### Spacing System

Consistent spacing using multiples of 8px:

- `8px` - Minimal spacing
- `16px` - Small spacing
- `24px` - Medium spacing
- `32px` - Large spacing
- `40px` - Extra large spacing
- `48px` - Section spacing
- `60px` - Major section spacing

### Border Radius

**Consistent across all elements:**
- Cards, buttons, inputs: `4px` (subtle, minimal)
- Circular elements: `50%` (traffic lights, toggle icons)

### Borders

**All borders:**
- Width: `1px` or `2px` (for emphasis)
- Style: `solid`
- Color: `#e0e0e0` (light) or `#2c3e50` (dark)

**No gradients, shadows, or effects** - Simple, flat design

## 🧱 Component Styles

### Cards

```css
background: white;
border: 1px solid #e0e0e0;
border-radius: 4px;
padding: 32px;
```

**Hover state:**
```css
border-color: #2c3e50;
background: #fafafa;
```

### Buttons

```css
background: #2c3e50;
color: white;
border: 1px solid #2c3e50;
padding: 12px 24px;
border-radius: 4px;
font-weight: 600;
cursor: pointer;
```

**Hover state:**
```css
background: #34495e;
border-color: #34495e;
```

**Active state:**
```css
background: #1a252f;
```

### Links

```css
color: #2c3e50;
text-decoration: none;
border-bottom: 1px solid transparent;
```

**Hover state:**
```css
border-bottom: 1px solid #2c3e50;
```

### Code Blocks

```css
background: #2c3e50;
color: #ecf0f1;
border: 1px solid #34495e;
border-radius: 4px;
padding: 20px;
font-family: "Courier New", monospace;
font-size: 0.9rem;
line-height: 1.6;
```

### Demo Areas

```css
background: #f8f9fa;
border: 1px solid #e0e0e0;
border-radius: 4px;
padding: 40px;
```

### State Visualizer

```css
background: white;
border: 1px solid #e0e0e0;
border-radius: 4px;
padding: 24px;
color: #2c3e50;
```

**State Badge:**
```css
background: #2c3e50;
color: white;
padding: 10px 20px;
border-radius: 4px;
font-weight: 600;
text-transform: uppercase;
```

## 🚫 What We Avoid

**NO:**
- ❌ CSS transitions (`transition: none` everywhere)
- ❌ CSS animations
- ❌ CSS transforms (scale, translate, rotate)
- ❌ Gradients (linear or radial)
- ❌ Box shadows
- ❌ Drop shadows
- ❌ Glow effects
- ❌ Backdrop filters
- ❌ Opacity changes on hover
- ❌ Color transitions
- ❌ Fancy hover effects

**YES:**
- ✅ Simple border color changes
- ✅ Background color changes (solid colors only)
- ✅ Text decoration (underline on hover)
- ✅ Clear, static visual feedback

## 📱 Responsive Design

**Breakpoints:**
- Mobile: `< 768px`
- Desktop: `≥ 768px`

**Mobile Adjustments:**
- Reduce padding: `32px → 24px → 16px`
- Reduce font sizes: `2.5rem → 2rem`
- Single column layouts
- Stack buttons vertically
- Smaller icons and elements

## 🎯 Layout Patterns

### Page Structure

```
┌─────────────────────────────────────┐
│         Page Header                 │
│  (title, description, breadcrumb)   │
├─────────────────────────────────────┤
│                                     │
│         Demo Area                   │
│  (interactive machine controls)     │
│                                     │
├─────────────────────────────────────┤
│                                     │
│      State Visualizer               │
│  (current state, context, events)   │
│                                     │
├─────────────────────────────────────┤
│                                     │
│       Code Section                  │
│  (machine definition)               │
│                                     │
├─────────────────────────────────────┤
│                                     │
│      Machine Info                   │
│  (explanation, use cases)           │
│                                     │
└─────────────────────────────────────┘
```

### Grid Systems

**Machine Cards (Home):**
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
gap: 24px;
```

**Event Buttons:**
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
gap: 10px;
```

## 📋 Component Inventory

### Home Page
- Machine cards (grid layout)
- Info banner
- Footer with links

### Machine Pages
- Page header with back link
- Demo area with controls
- State visualizer
- Code display
- Machine info section

### Interactive Elements
- Action buttons (primary)
- Event buttons (in visualizer)
- Navigation links
- Code blocks (readonly)

## 🔧 CSS Architecture

**File Organization:**
```
/src
  /components
    - StateVisualizer.css      (visualizer component)
    - MachineExamples.css      (legacy, for reference)
  /pages
    - HomePage.css             (home page specific)
    - Page.css                 (shared page styles)
    - PageLayout.css           (layout utilities)
  - App.css                    (global styles, reset)
```

**Naming Convention:**
- BEM-inspired but simplified
- Semantic class names
- Component-scoped styles
- No utility class frameworks

## 📖 Usage Guidelines

### For New Components

1. **Start with structure** - Use semantic HTML
2. **Apply base styles** - White background, border, padding
3. **Add typography** - Use defined font sizes and weights
4. **Keep it flat** - No shadows, gradients, or effects
5. **Test responsiveness** - Check mobile breakpoints

### For Styling Machine Examples

1. **Use demo-area** - Consistent container for demos
2. **Center content** - Keep demos visually centered
3. **Clear states** - Make active/inactive obvious
4. **Readable controls** - Large, clear buttons

### For Documentation

1. **Code blocks** - Use dark background, light text
2. **Inline code** - Light gray background
3. **Clear hierarchy** - Proper heading levels
4. **Scannable** - Use lists and short paragraphs

## ✅ Design Checklist

When creating new pages or components:

- [ ] No CSS transitions or animations
- [ ] No gradients or shadows
- [ ] Consistent border radius (4px)
- [ ] Consistent spacing (multiples of 8px)
- [ ] Monochromatic color scheme
- [ ] Readable font sizes
- [ ] Clear hover states (without transitions)
- [ ] Mobile responsive
- [ ] Semantic HTML
- [ ] Accessible contrast ratios

## 🎨 Design Rationale

**Why minimalistic?**
- Documentation should be clear and distraction-free
- Code examples are the star, not the UI
- Easier to screenshot and embed in other docs
- Faster load times, better performance
- Timeless aesthetic that won't look dated

**Why no transitions?**
- Documentation should be predictable
- Screen recordings are clearer
- Better for accessibility (reduced motion)
- Simpler mental model for users
- Faster perceived performance

**Why monochromatic?**
- Focus on content, not decoration
- Professional, technical appearance
- Consistent with code editor aesthetics
- Reduces cognitive load
- Universal accessibility

## 🔄 Future Considerations

If expanding the design system:

1. **Maintain simplicity** - Don't add unnecessary complexity
2. **Document changes** - Update this file with any new patterns
3. **Test accessibility** - Ensure WCAG compliance
4. **Keep it fast** - No heavy CSS libraries
5. **Stay focused** - Design serves the documentation purpose

---

**Last Updated:** 2026-02-10  
**Design System Version:** 1.0.0