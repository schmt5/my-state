# XState v5 + React + Vite

A complete example project demonstrating **XState v5** state machines in a React application with **real-time Stately Inspector** visualization.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

**A new browser window will automatically open** with the Stately Inspector showing real-time state diagrams! 🎉

(If the inspector window doesn't open, check your popup blocker)

## 🌐 Embedding in Notion

This app is **embeddable in Notion**!

**Quick start:**
1. In Notion, type `/embed`
2. Paste: `https://my-state.vercel.app`
3. Press Enter

**Docs:** See `NOTION-EMBED.md` for details

## 📦 What's Included

### 🎯 What You Get

**Official Stately Inspector** - Real-time visualization in a separate window showing:
- Visual state machine diagrams
- Sequence diagrams
- Live state transitions as you interact
- Event tracking and actor communication

### Three XState Machine Examples

1. **Toggle Machine** (`src/machines/toggleMachine.js`)
   - Simple on/off toggle
   - Demonstrates basic state transitions
   - Perfect for learning XState basics

2. **Counter Machine** (`src/machines/counterMachine.js`)
   - Counter with persistent data (context)
   - Demonstrates actions and `assign`
   - Shows how to store and update data in machines

3. **Traffic Light Machine** (`src/machines/trafficLightMachine.js`)
   - Cyclical state flow: green → yellow → red → green
   - Demonstrates multiple states
   - Great example of sequential transitions

### Dual Visualization System

1. **Stately Inspector** (`@statelyai/inspect`) - Already configured! ⭐
   - Opens automatically in a new window
   - Professional state diagrams
   - Sequence diagrams
   - Real-time updates
   - Official XState visualization tool

2. **Built-in React Visualizer** (`StateVisualizer.jsx`)
   - Shows in the main browser window
   - Current state badges
   - Context values
   - Clickable event buttons
   - Expandable state objects

3. **MachineExamples Page** - Beautiful demo with:
   - Interactive controls
   - Live state updates
   - Visual feedback
   - Gradient animations

## 📊 How to Visualize Your Machines

### Option 1: Stately Inspector ⭐ (Already Running!)
The **official real-time inspector** is already configured and will auto-open when you run the app!

```bash
npm run dev
# Inspector window opens automatically at https://stately.ai/inspector
```

Shows professional diagrams that update live as you interact with the app.

### Option 2: Built-in React Visualizer ✅
Already included in the browser! Shows state, context, and events inline.

### Option 3: Stately Studio
1. Visit https://stately.ai/studio
2. Copy any machine from `src/machines/`
3. Paste and edit visually
4. **100% Free** - No signup required!

### Option 4: VS Code Extension
1. Install "XState" extension in VS Code
2. Open any machine file
3. Right-click → "XState: Open Visual Editor"

See **`VISUALIZATION.md`** for complete details on all visualization options!

## 📁 Project Structure

```
my-state/
├── src/
│   ├── machines/              # XState state machines
│   │   ├── toggleMachine.js
│   │   ├── counterMachine.js
│   │   ├── trafficLightMachine.js
│   │   └── index.js
│   │
│   ├── components/
│   │   ├── StateVisualizer.jsx      # Real-time state inspector
│   │   ├── StateVisualizer.css
│   │   ├── MachineExamples.jsx      # Demo page
│   │   └── MachineExamples.css
│   │
│   ├── inspector.js           # Stately Inspector config ⭐
│   ├── App.jsx
│   └── main.jsx
│
├── SETUP.md                   # Setup & troubleshooting guide
├── VISUALIZATION.md           # Complete visualization guide
└── README.md                  # This file
```

## 🛠️ Tech Stack

- **React 19.2.0** - UI framework with React Compiler enabled
- **XState 5.26.0** - State machine library
- **@xstate/react** - React hooks for XState
- **@statelyai/inspect** - Official Stately Inspector ⭐
- **Vite 7** - Lightning-fast build tool
- **Babel React Compiler** - Automatic React optimizations

## 📖 Usage Examples

### Using a Machine in Your Component

```javascript
import { useMachine } from '@xstate/react';
import { toggleMachine } from './machines';
import { inspect } from './inspector';

function MyComponent() {
  const [state, send] = useMachine(toggleMachine, {
    inspect, // Connects to Stately Inspector! ⭐
  });

  return (
    <div>
      <p>Current state: {state.value}</p>
      <button onClick={() => send({ type: 'TOGGLE' })}>
        Toggle
      </button>
    </div>
  );
}
```

### Creating a New Machine

```javascript
import { createMachine } from 'xstate';

export const myMachine = createMachine({
  id: 'myMachine',
  initial: 'idle',
  states: {
    idle: {
      on: {
        START: 'running'
      }
    },
    running: {
      on: {
        STOP: 'idle'
      }
    }
  }
});
```

### Using Context (Data Storage)

```javascript
import { createMachine, assign } from 'xstate';

export const dataMachine = createMachine({
  id: 'data',
  initial: 'active',
  context: {
    count: 0
  },
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

## 🎯 Next Steps

1. **Run the app** - `npm run dev`
2. **Watch the inspector window open** - Real-time diagrams appear automatically!
3. **Explore examples** - Interact and watch states change live
4. **Try Stately Studio** - Copy machines to https://stately.ai/studio for visual editing
5. **Build your own** - Create new machines in `src/machines/`
6. **Learn more** - Check out resources below

## 📚 Resources

- **Stately Inspector Docs:** https://stately.ai/docs/inspector ⭐
- **XState v5 Documentation:** https://stately.ai/docs/xstate
- **Interactive Tutorial:** https://stately.ai/docs/xstate/tutorials
- **Stately Studio:** https://stately.ai/studio (Free visual editor)
- **Examples:** https://github.com/statelyai/xstate/tree/main/examples
- **Discord Community:** https://discord.gg/xstate
- **VS Code Extension:** Search "XState" in VS Code extensions

## 🎨 Features

✅ **Stately Inspector** - Official real-time visualization in separate window ⭐  
✅ **Notion Embedding** - Works in Notion with `/embed` command 🌐  
✅ Three complete XState machine examples  
✅ Dual visualization (Inspector + React component)  
✅ Interactive controls  
✅ Beautiful gradient UI  
✅ TypeScript-ready (add types as needed)  
✅ React 19 with React Compiler  
✅ Hot Module Replacement (HMR)  
✅ Production-ready build setup

## 🐛 Troubleshooting

See **`SETUP.md`** for detailed troubleshooting steps.

**Common issues:**
- **Inspector window doesn't open** → Check popup blocker in your browser
- **Port already in use** → Use `npm run dev -- --port 3000`
- **Module not found** → Run `npm install`
- **Disable inspector** → Set `autoStart: false` in `src/inspector.js`

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🤝 Contributing

Feel free to explore, modify, and extend these examples!

1. Create new machines in `src/machines/`
2. Add new example components
3. Customize the visualizer
4. Build something amazing!

## 📄 License

This project is a learning template - use it however you like!

---

**Happy State Machine Building!** 🎉

For complete visualization options, see **`VISUALIZATION.md`**  
For setup help, see **`SETUP.md`**  
For Notion embedding, see **`NOTION-EMBED.md`**