# XState Machine Visualization Guide

This guide explains all the ways you can visualize and debug your XState v5 state machines.

## 🎯 Quick Summary

You have **3 created machine examples** in `src/machines/`:
- `toggleMachine.js` - Simple on/off toggle
- `counterMachine.js` - Counter with context (data)
- `trafficLightMachine.js` - Cyclical state flow

## 📊 Visualization Options

### Option 1: Stately Inspector (Official Real-Time Tool) ⭐ RECOMMENDED

**Package:** `@statelyai/inspect` (Already Installed!)

**What it does:**
- Opens a new browser window/tab with real-time visualization
- Shows state machine diagrams automatically
- Displays sequence diagrams showing actor communication
- Updates live as you interact with your app

**How to use it:**
The inspector is **already configured** in `src/inspector.js` and connected to all three example machines!

Just run the app:
```bash
npm run dev
```

A new window will automatically open at `https://stately.ai/inspector` showing:
- Visual state machine diagrams
- Real-time state transitions
- Event tracking
- Actor communication flows

**Note:** If the window doesn't open, check your browser's popup blocker!

**Configuration:** See `src/inspector.js` for customization options like:
- Filtering events
- Using an iframe instead of popup
- Serialization options

### Option 2: Built-in React Visualizer ✅

**Location:** `src/components/StateVisualizer.jsx`

A custom visual debugger component that shows:
- Current state (highlighted badge)
- Context values (live data)
- Available events (clickable buttons)
- Full state object (collapsible)

**Already included** in the `MachineExamples` component - visible in the browser!

### Option 3: Stately Studio (Online Visual Editor)

**URL:** https://stately.ai/studio

**How to use:**
1. Visit https://stately.ai/studio
2. Click "Create new machine" or "Import"
3. Copy the code from any machine file (e.g., `src/machines/toggleMachine.js`)
4. Paste it into the editor
5. See instant visualization with:
   - Visual state diagram
   - Interactive transitions
   - Live editing
   - Export capabilities

**Pros:**
- ✅ Free to use
- ✅ Professional diagrams
- ✅ Visual editor
- ✅ Works with XState v5
- ✅ No installation needed
- ✅ Great for documentation and sharing

### Option 4: XState VS Code Extension

**Extension Name:** XState VSCode

**How to install:**
1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
3. Search for "XState"
4. Install the official XState extension

**How to use:**
1. Open any machine file (e.g., `src/machines/toggleMachine.js`)
2. Right-click in the editor
3. Select "XState: Open Visual Editor"
4. See the state diagram in a side panel

**Pros:**
- ✅ Visualize while coding
- ✅ No context switching
- ✅ Integrated with your workflow

### Option 5: Console Logging (Simple Debugging)

Add custom logging to see state transitions in the browser console:

```javascript
import { useMachine } from '@xstate/react';
import { toggleMachine } from './machines';

function MyComponent() {
  const [state, send] = useMachine(toggleMachine, {
    inspect: (event) => {
      // Custom logging instead of Stately Inspector
      console.log('🔍 State Event:', event);
    }
  });

  // Or log state changes manually
  console.log('Current state:', state.value);
  console.log('Context:', state.context);

  return (
    <div>
      <button onClick={() => send({ type: 'TOGGLE' })}>
        Toggle
      </button>
      <p>State: {state.value}</p>
    </div>
  );
}
```

**Note:** The Stately Inspector is already configured in this project. You can customize or disable it in `src/inspector.js`.

## 🎨 Example Machine Code for Stately Studio

### Toggle Machine
```javascript
import { createMachine } from 'xstate';

export const toggleMachine = createMachine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: {
      on: {
        TOGGLE: 'active'
      }
    },
    active: {
      on: {
        TOGGLE: 'inactive'
      }
    }
  }
});
```

### Counter Machine
```javascript
import { createMachine, assign } from 'xstate';

export const counterMachine = createMachine({
  id: 'counter',
  initial: 'active',
  context: {
    count: 0,
    maxCount: 10
  },
  states: {
    active: {
      on: {
        INCREMENT: {
          actions: assign({
            count: ({ context }) => context.count + 1
          })
        },
        DECREMENT: {
          actions: assign({
            count: ({ context }) => context.count - 1
          })
        },
        RESET: {
          actions: assign({
            count: 0
          })
        }
      }
    }
  }
});
```

### Traffic Light Machine
```javascript
import { createMachine } from 'xstate';

export const trafficLightMachine = createMachine({
  id: 'trafficLight',
  initial: 'green',
  states: {
    green: {
      on: {
        NEXT: 'yellow'
      }
    },
    yellow: {
      on: {
        NEXT: 'red'
      }
    },
    red: {
      on: {
        NEXT: 'green'
      }
    }
  }
});
```

## 🚀 Getting Started

1. **Run the app with Stately Inspector**:
   ```bash
   npm run dev
   ```
   A new window will open automatically with real-time visualization!

2. **Or paste any machine into Stately Studio**:
   - Go to https://stately.ai/studio
   - Copy machine code from `src/machines/`
   - Paste and visualize!

3. **Or install VS Code extension**:
   - Search for "XState" in VS Code extensions
   - Open any machine file
   - Right-click → "XState: Open Visual Editor"

## 🎯 What's Already Configured

✅ **Stately Inspector** - Package installed and configured in `src/inspector.js`  
✅ **All machines connected** - Toggle, Counter, and Traffic Light all send events to inspector  
✅ **Auto-start enabled** - Inspector opens automatically in development mode  
✅ **Popup window** - Opens at https://stately.ai/inspector with live diagrams

## 📚 Additional Resources

- **XState v5 Docs:** https://stately.ai/docs/xstate
- **Stately Studio:** https://stately.ai/studio
- **XState Discord:** https://discord.gg/xstate (Community support)
- **Examples Repository:** https://github.com/statelyai/xstate/tree/main/examples

## 💡 Tips

1. **For Real-Time Development:** Use Stately Inspector (already configured!)
2. **For Learning:** Use Stately Studio to see how machines work visually
3. **For Quick Reference:** Use the built-in React visualizer in the browser
4. **For Debugging:** Use the inspector with custom filtering (see `src/inspector.js`)
5. **For Documentation:** Export diagrams from Stately Studio

## ⚠️ Important Notes

- **XState v5** is installed in this project
- **@statelyai/inspect** is the official inspector package for v5 (already installed!)
- The old `@xstate/inspect` package only works with v4 (not compatible with this project)
- Stately Inspector auto-opens in development mode - check popup blocker if it doesn't appear
- You can disable auto-start by setting `autoStart: false` in `src/inspector.js`

## 🔧 Customizing the Inspector

Edit `src/inspector.js` to customize:

```javascript
import { createBrowserInspector } from '@statelyai/inspect';

const inspector = createBrowserInspector({
  // Filter out noisy events
  filter: (inspEvent) => {
    if (inspEvent.type === '@xstate.event') {
      return inspEvent.event.type !== 'mouse.move';
    }
    return true;
  },
  
  // Use iframe instead of popup
  iframe: document.getElementById('inspector-iframe'),
  
  // Disable auto-start
  autoStart: false,
});

// Manually start if autoStart is false
inspector.start();
```

## 🎉 What's Already Set Up

✅ **Stately Inspector** package installed (`@statelyai/inspect`)  
✅ Inspector configured in `src/inspector.js`  
✅ All three example machines connected to inspector  
✅ Three example machines in `src/machines/`  
✅ `StateVisualizer` component in `src/components/StateVisualizer.jsx`  
✅ `MachineExamples` component showcasing all machines  
✅ Beautiful styling with gradients and animations  
✅ Interactive controls for all machines  
✅ Real-time state inspection in browser AND inspector window  

Just run `npm run dev` and watch the magic happen! 🪄