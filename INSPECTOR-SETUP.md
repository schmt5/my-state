# 🎉 Stately Inspector - Setup Complete!

## ✅ What's Installed & Configured

Your project now has the **official Stately Inspector** fully configured and ready to use!

### Installed Package
- **@statelyai/inspect** - The official XState v5 inspector package

### Configuration Files
- **`src/inspector.js`** - Inspector configuration and setup
- **`src/components/MachineExamples.jsx`** - All machines connected to inspector

### Connected Machines
All three example machines are already sending events to the inspector:
- ✅ Toggle Machine
- ✅ Counter Machine
- ✅ Traffic Light Machine

## 🚀 How to Use

### Start the App
```bash
npm run dev
```

**What happens:**
1. Your app starts at http://localhost:5173
2. **A new browser window automatically opens** at https://stately.ai/inspector
3. The inspector window shows real-time diagrams of your state machines

### What You'll See in the Inspector

**State Machine Diagrams:**
- Visual representation of your machine structure
- States shown as nodes
- Transitions shown as arrows
- Current state highlighted

**Sequence Diagrams:**
- Timeline of events
- Actor communication flows
- Event history

**Real-Time Updates:**
- Click buttons in your app
- Watch the inspector update live
- See state transitions happen in real-time

## 🔧 Configuration

### Current Settings (in `src/inspector.js`)

```javascript
import { createBrowserInspector } from "@statelyai/inspect";

const inspector = createBrowserInspector({
  autoStart: true,  // Opens automatically
  // url: 'https://stately.ai/inspector',  // Default URL
  // iframe: null,  // Use popup window
});

export const { inspect } = inspector;
```

### Customize the Inspector

**Disable Auto-Start:**
```javascript
const inspector = createBrowserInspector({
  autoStart: false,
});

// Manually start when needed
inspector.start();
```

**Filter Events:**
```javascript
const inspector = createBrowserInspector({
  filter: (inspEvent) => {
    // Skip mouse move events
    if (inspEvent.type === '@xstate.event') {
      return inspEvent.event.type !== 'mouse.move';
    }
    return true;
  },
});
```

**Use an Iframe Instead of Popup:**
```javascript
const inspector = createBrowserInspector({
  iframe: document.getElementById('inspector-iframe'),
});
```

**Serialize Events:**
```javascript
const inspector = createBrowserInspector({
  serialize: (inspEvent) => {
    // Custom serialization logic
    return inspEvent;
  },
});
```

## 🔌 Connecting Machines to Inspector

### Already Connected (see `MachineExamples.jsx`)

```javascript
import { useMachine } from '@xstate/react';
import { toggleMachine } from '../machines';
import { inspect } from '../inspector';

function MyComponent() {
  const [state, send] = useMachine(toggleMachine, {
    inspect,  // 👈 This connects the machine to the inspector!
  });

  return (
    <button onClick={() => send({ type: 'TOGGLE' })}>
      {state.value}
    </button>
  );
}
```

### Connect New Machines

When you create a new machine, just pass `inspect` to `useMachine`:

```javascript
import { useMachine } from '@xstate/react';
import { myNewMachine } from './machines/myNewMachine';
import { inspect } from './inspector';

function NewComponent() {
  const [state, send] = useMachine(myNewMachine, {
    inspect,  // 👈 Add this!
  });
  
  // ... rest of component
}
```

## 🐛 Troubleshooting

### Inspector Window Doesn't Open

**Problem:** Popup blocked by browser

**Solution:**
1. Check your browser's address bar for popup blocker icon
2. Allow popups for localhost:5173
3. Refresh the page

**Alternative:** Use an iframe instead (see Configuration above)

### Inspector Shows "No actors"

**Problem:** Machines not connected to inspector

**Solution:**
- Make sure you're passing `{ inspect }` to `useMachine`
- Check that `src/inspector.js` is imported correctly
- Verify `autoStart` is `true`

### Inspector Only Works in Development

**This is intentional!**

The inspector only runs when `import.meta.env.DEV` is `true`. This prevents it from opening in production builds.

To disable in development, set `autoStart: false` in `src/inspector.js`.

## 📚 Inspector Features

### What the Inspector Shows

**State Machines Tab:**
- All active machines
- Current states (highlighted)
- Available transitions
- Machine definitions

**Events Tab:**
- Event history
- Event payload data
- Timestamps
- Event sources

**Sequence Diagram:**
- Visual timeline
- Actor communication
- Event flow
- State changes

### Inspector Controls

**Play/Pause:** Stop/resume event tracking
**Clear:** Clear event history
**Download:** Export events as JSON
**Filter:** Show/hide specific event types

## 🎯 Best Practices

### Development Workflow

1. **Start your app** with `npm run dev`
2. **Keep inspector window open** on second monitor (or tab)
3. **Interact with your app** in main window
4. **Watch state changes** in inspector window
5. **Debug issues** by reviewing event history and state transitions

### Performance Tips

- Use `filter` to exclude noisy events (mouse moves, etc.)
- Clear event history periodically for long-running sessions
- Disable inspector in production (already configured)

### Team Collaboration

- Share inspector screenshots for bug reports
- Export event sequences for reproduction steps
- Use Stately Studio for documentation (copy machines from `src/machines/`)

## 🔗 Additional Resources

**Official Documentation:**
- Inspector Docs: https://stately.ai/docs/inspector
- XState Docs: https://stately.ai/docs/xstate
- Stately Studio: https://stately.ai/studio

**Community:**
- Discord: https://discord.gg/xstate
- GitHub: https://github.com/statelyai/xstate

**Project Docs:**
- `README.md` - Full project documentation
- `VISUALIZATION.md` - All visualization options
- `QUICK-START.md` - Quick reference card

## 🎊 You're All Set!

Run `npm run dev` and watch your state machines come to life in the Stately Inspector!

The inspector will help you:
- ✅ Understand state flow visually
- ✅ Debug complex state transitions
- ✅ See event sequences
- ✅ Track actor communication
- ✅ Build better state machines

Happy coding! 🚀