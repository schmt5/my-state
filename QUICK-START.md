# XState Visualization - Quick Reference Card

## 🚀 Quick Start

```bash
npm install
npm run dev
```

**🎉 A new browser window will auto-open with Stately Inspector!**

(If it doesn't, check your popup blocker)

## 🎯 Four Ways to Visualize XState Machines

### 1️⃣ Stately Inspector (Official Real-Time Tool) ⭐ ALREADY CONFIGURED!

**Package:** `@statelyai/inspect` (already installed!)  
**What:** Professional real-time visualization in separate window  
**Where:** Auto-opens at https://stately.ai/inspector when you run `npm run dev`  
**Shows:** State diagrams, sequence diagrams, live transitions, event tracking  
**Best for:** Real-time development and debugging  
**Config:** `src/inspector.js`  

All three example machines are already connected! Just interact with the app and watch the diagrams update live.

### 2️⃣ Built-in React Visualizer ✅

**What:** Custom React component showing live state updates  
**Where:** In the main browser window at http://localhost:5173  
**Shows:** Current state, context, events, full state object  
**Best for:** Quick inline reference  

### 3️⃣ Stately Studio (Visual Editor)

**URL:** https://stately.ai/studio  
**Steps:**
1. Visit the URL
2. Copy machine code from `src/machines/`
3. Paste into editor
4. See instant diagram!

**Shows:** Beautiful state diagrams, transitions, guards, actions  
**Best for:** Learning, documentation, presentations  

### 4️⃣ VS Code Extension

**Name:** "XState" (search in VS Code extensions)  
**Steps:**
1. Install extension
2. Open machine file
3. Right-click → "XState: Open Visual Editor"

**Shows:** Diagram in VS Code sidebar  
**Best for:** Coding while visualizing  

## 📦 What's in This Project

### Three Example Machines

| Machine | File | What It Does |
|---------|------|--------------|
| Toggle | `src/machines/toggleMachine.js` | Simple on/off switch |
| Counter | `src/machines/counterMachine.js` | Counter with data storage |
| Traffic Light | `src/machines/trafficLightMachine.js` | Green → Yellow → Red cycle |

### Components

- `StateVisualizer.jsx` - Shows machine state in real-time
- `MachineExamples.jsx` - Demo page with all three machines

## 💡 Quick Code Examples

### Use a Machine

```javascript
import { useMachine } from '@xstate/react';
import { toggleMachine } from './machines';
import { inspect } from './inspector'; // ⭐ Inspector connection

function App() {
  const [state, send] = useMachine(toggleMachine, {
    inspect, // ⭐ Sends events to Stately Inspector!
  });
  
  return (
    <div>
      <p>State: {state.value}</p>
      <button onClick={() => send({ type: 'TOGGLE' })}>
        Toggle
      </button>
    </div>
  );
}
```

### Create a New Machine

```javascript
import { createMachine } from 'xstate';

export const myMachine = createMachine({
  id: 'myMachine',
  initial: 'idle',
  states: {
    idle: {
      on: { START: 'active' }
    },
    active: {
      on: { STOP: 'idle' }
    }
  }
});
```

### Add Context (Data)

```javascript
import { createMachine, assign } from 'xstate';

export const dataMachine = createMachine({
  context: { count: 0 },
  states: {
    active: {
      on: {
        INCREMENT: {
          actions: assign({
            count: ({ context }) => context.count + 1
          })
        }
      }
    }
  }
});
```

## 🔧 Inspector Configuration

Edit `src/inspector.js` to customize:

```javascript
import { createBrowserInspector } from '@statelyai/inspect';

const inspector = createBrowserInspector({
  autoStart: true,  // Auto-open inspector window
  filter: (event) => true,  // Filter events
  iframe: null,  // Use popup window (or specify iframe)
});

export const { inspect } = inspector;
```

## 🔗 Essential Links

- **Inspector Docs:** https://stately.ai/docs/inspector ⭐
- **XState Docs:** https://stately.ai/docs/xstate
- **Studio:** https://stately.ai/studio
- **Examples:** https://github.com/statelyai/xstate/tree/main/examples
- **Discord:** https://discord.gg/xstate

## 📖 Full Guides in This Project

- `VISUALIZATION.md` - Complete visualization guide with all options
- `README.md` - Full project documentation
- `SETUP.md` - Detailed setup & troubleshooting

## 🎉 What's Already Set Up

✅ **Stately Inspector** - Package installed, configured, and connected  
✅ Inspector opens automatically on `npm run dev`  
✅ All three machines send events to inspector  
✅ Built-in React visualizer in browser  
✅ Beautiful demo page with interactive controls  

---

**Need help?** Check the guides above or visit the Discord community!