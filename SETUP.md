# Setup Guide

## Quick Fix: Node.js / Vite Version Issue

You're currently running **Node.js v20.11.1**, but Vite 8 beta requires Node.js 20.19+ or 22.12+.

### Option 1: Downgrade Vite to v5 (Recommended - Fastest) ⭐

Run this command to install a stable version of Vite that works with your Node version:

```bash
npm install vite@^5.4.0 --save-dev
```

Then remove the override in `package.json`:
1. Open `package.json`
2. Delete the entire `"overrides"` section:
   ```json
   "overrides": {
     "vite": "^8.0.0-beta.13"
   }
   ```

Then run:
```bash
npm install
npm run dev
```

### Option 2: Upgrade Node.js

**Using nvm (Node Version Manager):**
```bash
# Install nvm first if you haven't: https://github.com/nvm-sh/nvm
nvm install 22
nvm use 22
```

**Or download from nodejs.org:**
- Visit https://nodejs.org/
- Download Node.js 22.x LTS
- Install and restart your terminal

Then run:
```bash
npm install
npm run dev
```

## After Setup

Once you've fixed the version issue, run:

```bash
npm run dev
```

Then open your browser to the URL shown (usually http://localhost:5173)

You'll see:
- ✅ Three interactive XState machine examples
- ✅ Real-time state visualization
- ✅ Interactive controls
- ✅ Beautiful UI with state inspection

## Project Structure

```
my-state/
├── src/
│   ├── machines/              # XState state machines
│   │   ├── toggleMachine.js   # Simple toggle example
│   │   ├── counterMachine.js  # Counter with context
│   │   ├── trafficLightMachine.js  # Cyclical states
│   │   └── index.js           # Export all machines
│   │
│   ├── components/
│   │   ├── StateVisualizer.jsx      # State inspection component
│   │   ├── StateVisualizer.css
│   │   ├── MachineExamples.jsx      # Demo page
│   │   └── MachineExamples.css
│   │
│   ├── App.jsx                # Main app component
│   └── main.jsx               # Entry point
│
├── VISUALIZATION.md           # Guide to visualizing machines
├── SETUP.md                   # This file
└── package.json
```

## What's Included

### 1. Toggle Machine
- Simple on/off state
- Demonstrates basic transitions
- Event: `TOGGLE`

### 2. Counter Machine  
- Stores count in context
- Demonstrates actions and assign
- Events: `INCREMENT`, `DECREMENT`, `RESET`

### 3. Traffic Light Machine
- Cyclical state flow (green → yellow → red → green)
- Demonstrates multiple states
- Event: `NEXT`

### 4. State Visualizer Component
Each example includes a beautiful visualizer showing:
- Current state (highlighted badge)
- Context data (JSON display)
- Available events (clickable buttons)
- Full state object (expandable)

## External Visualization Tools

### Stately Studio (Recommended)
1. Visit https://stately.ai/studio
2. Copy any machine from `src/machines/`
3. Paste and visualize instantly
4. Free to use, no signup required

### VS Code Extension
1. Install "XState" extension in VS Code
2. Open any machine file
3. Right-click → "XState: Open Visual Editor"

See `VISUALIZATION.md` for complete details!

## Troubleshooting

### Issue: "npm run dev" fails with Node.js error
**Solution:** Follow Option 1 or 2 above to fix version mismatch

### Issue: Port already in use
**Solution:** Kill the process or use a different port:
```bash
npm run dev -- --port 3000
```

### Issue: Module not found errors
**Solution:** Reinstall dependencies:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: React hooks error
**Solution:** Make sure you're using React 19.2.0 (already in package.json)

## Next Steps

1. Fix the Node/Vite version issue (see above)
2. Run `npm run dev`
3. Explore the three machine examples
4. Try visualizing machines in Stately Studio
5. Read `VISUALIZATION.md` for more options
6. Build your own state machines!

## Learn More

- **XState v5 Docs:** https://stately.ai/docs/xstate
- **Tutorial:** https://stately.ai/docs/xstate/tutorials
- **Examples:** https://github.com/statelyai/xstate/tree/main/examples
- **Discord:** https://discord.gg/xstate

Happy coding! 🎉