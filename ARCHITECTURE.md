# Architecture Documentation

## 🏗️ Generic Machine Architecture

This project uses a **decoupled, generic architecture** where the UI is completely separated from the state machine logic. There are no machine-specific UI components - only a universal visualizer that works with ANY XState machine.

## 🎯 Core Principle

**"The UI doesn't know about the machine, and the machine doesn't know about the UI."**

- No custom toggle buttons for toggle machines
- No custom traffic lights for traffic light machines
- Just generic state + event visualization that works universally

## 📐 Architecture Layers

```
┌─────────────────────────────────────────────────┐
│           Page Component (Route)                │
│  - Manages machine instance with useMachine()   │
│  - Passes state/send to generic components      │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│        MachineDemo (Generic Component)          │
│  - Shows current state (any machine)            │
│  - Shows available events (any machine)         │
│  - Shows context (if exists)                    │
│  - Machine-agnostic UI                          │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│       StateVisualizer (Debug Component)         │
│  - Additional inspection tools                  │
│  - Works with any machine                       │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│          XState Machine (Pure Logic)            │
│  - No UI dependencies                           │
│  - Pure state machine definition                │
│  - Events, states, transitions only             │
└─────────────────────────────────────────────────┘
```

## 🧩 Component Hierarchy

### 1. **Page Components** (Route Level)
- `TogglePage.jsx`
- `TrafficLightPage.jsx`

**Responsibilities:**
- Create machine instance with `useMachine()`
- Manage inspector controls
- Pass state/send to generic components
- Provide machine-specific documentation

**Does NOT:**
- Render machine-specific UI
- Know about toggle buttons or traffic lights
- Hard-code event names

### 2. **MachineDemo Component** (Generic Visualizer)
- `src/components/MachineDemo.jsx`

**Responsibilities:**
- Display current state (works for ANY state value)
- Display available events as buttons (reads from `state.nextEvents`)
- Display context (if exists)
- Show machine code
- Completely machine-agnostic

**Props:**
```javascript
<MachineDemo
  state={state}           // Current machine state
  send={send}             // Send function
  title="Demo Title"      // Display title
  description="..."       // Description text
  machineCode="..."       // Code string to display
/>
```

**Does NOT:**
- Know machine names
- Hard-code events
- Render custom UI per machine type

### 3. **StateVisualizer Component** (Debug Tool)
- `src/components/StateVisualizer.jsx`

**Responsibilities:**
- Show detailed state inspection
- Display context in JSON format
- Show available events
- Provide expandable state object view

**Does NOT:**
- Assume machine structure
- Hard-code event names

## 🎨 UI Components

### Generic Components ✅
- `MachineDemo` - Universal machine visualizer
- `StateVisualizer` - Universal state inspector
- Event buttons (generated from `state.nextEvents`)
- State badge (displays any state value)

### Machine-Specific Components ❌
- ~~Toggle button with checkmark~~
- ~~Traffic light with colored circles~~
- ~~Custom icons per machine~~

## 📊 Data Flow

```
User Click
    ↓
Event Button (generic)
    ↓
send({ type: EVENT_NAME })
    ↓
XState Machine
    ↓
State Transition
    ↓
New State + Context
    ↓
React Re-render
    ↓
MachineDemo displays new state
```

## 🔧 How Events Are Discovered

**Automatic Event Discovery:**
```javascript
const [state, send] = useMachine(toggleMachine);

// XState automatically provides available events
const availableEvents = state.nextEvents;  
// → ['TOGGLE'] or ['NEXT'] or ['INCREMENT', 'DECREMENT']

// Generic component renders buttons for each
availableEvents.map(event => (
  <button onClick={() => send({ type: event })}>
    {event}
  </button>
))
```

**No hard-coding required!** The UI adapts to whatever events the machine exposes.

## 📁 File Organization

```
src/
├── machines/                    # Pure state machine logic
│   ├── toggleMachine.js         # Just states, events, transitions
│   ├── trafficLightMachine.js   # No UI logic
│   └── index.js
│
├── components/                  # Generic, reusable components
│   ├── MachineDemo.jsx          # Universal machine visualizer
│   ├── MachineDemo.css
│   ├── StateVisualizer.jsx      # Universal state inspector
│   └── StateVisualizer.css
│
├── pages/                       # Route-level containers
│   ├── HomePage.jsx             # Machine index
│   ├── TogglePage.jsx           # Toggle machine route
│   └── TrafficLightPage.jsx     # Traffic light route
│
└── hooks/
    └── useInspector.js          # Inspector control logic
```

## 🎯 Benefits of This Architecture

### ✅ Scalability
- Add new machines without creating new UI components
- Works with ANY XState machine automatically
- No UI refactoring needed per machine

### ✅ Maintainability
- Single source of truth for visualization
- Changes to UI affect all machines equally
- No duplicated UI code

### ✅ Focus on State Machines
- Documentation focuses on machine logic
- UI doesn't distract from state concepts
- Clear separation of concerns

### ✅ Reusability
- Generic components work everywhere
- Easy to test (no machine-specific mocking)
- Can be used in other projects

### ✅ Consistency
- All machines look and behave the same way
- Predictable user experience
- Easier to learn and understand

## 📝 Adding a New Machine

To add a new machine, you only need:

### 1. Create the Machine (Pure Logic)
```javascript
// src/machines/myMachine.js
import { createMachine } from 'xstate';

export const myMachine = createMachine({
  id: 'myMachine',
  initial: 'idle',
  states: {
    idle: {
      on: { START: 'running' }
    },
    running: {
      on: { STOP: 'idle' }
    }
  }
});
```

### 2. Create the Page (Use Generic Components)
```javascript
// src/pages/MyMachinePage.jsx
import { useMachine } from '@xstate/react';
import { MachineDemo } from '../components/MachineDemo';
import { myMachine } from '../machines';

export function MyMachinePage() {
  const [state, send] = useMachine(myMachine);
  
  return (
    <div className="page-container">
      <MachineDemo
        state={state}
        send={send}
        title="My Machine Demo"
        description="Demonstrate your machine here"
        machineCode={machineCodeString}
      />
    </div>
  );
}
```

### 3. Add Route
```javascript
// src/App.jsx
<Route path="/my-machine" element={<MyMachinePage />} />
```

**That's it!** No custom UI components needed.

## 🔍 What the Generic UI Shows

For **ANY** machine, the UI automatically displays:

1. **Current State** - Large badge showing state value
2. **Available Events** - Buttons for each event in `state.nextEvents`
3. **Context** - JSON display if context exists
4. **Machine Code** - Syntax-highlighted code block
5. **State Visualizer** - Detailed inspection panel

All of this works **without knowing the machine structure**.

## 🚫 Anti-Patterns Avoided

### ❌ Bad: Machine-Specific UI
```javascript
// DON'T do this
function TogglePage() {
  return (
    <div className="toggle-switch">
      <input type="checkbox" />
      <label>Toggle</label>
    </div>
  );
}
```

### ✅ Good: Generic UI
```javascript
// DO this
function TogglePage() {
  const [state, send] = useMachine(toggleMachine);
  return <MachineDemo state={state} send={send} />;
}
```

### ❌ Bad: Hard-coded Events
```javascript
// DON'T do this
<button onClick={() => send({ type: 'TOGGLE' })}>Toggle</button>
<button onClick={() => send({ type: 'NEXT' })}>Next</button>
```

### ✅ Good: Dynamic Events
```javascript
// DO this
{state.nextEvents.map(event => (
  <button onClick={() => send({ type: event })}>{event}</button>
))}
```

## 🎓 Educational Value

This architecture is **perfect for documentation** because:

1. **Focus on Concepts** - UI doesn't distract from machine logic
2. **Consistent Experience** - All machines documented the same way
3. **Clear Separation** - Students understand state machines vs UI
4. **Extensible** - Easy to add examples without UI work
5. **Transferable** - Same patterns work in any framework

## 🔄 Future Extensions

Easy to add without changing architecture:

- New machines (just add the machine + page)
- Different visualizers (alternative generic components)
- Export features (works with any machine)
- Testing tools (test generic components once)
- Sharing/embedding (consistent across all machines)

## 📊 Comparison

### Before (Machine-Specific UI)
```
Toggle Machine → Custom Toggle Button UI
Traffic Light → Custom Traffic Light UI
Counter → Custom Counter UI
(N machines = N custom UIs)
```

### After (Generic Architecture)
```
Any Machine → MachineDemo (one component)
Any Machine → StateVisualizer (one component)
(N machines = 1 generic UI)
```

## ✅ Principles Summary

1. **Separation of Concerns** - Machines don't know about UI
2. **Generic Over Specific** - One visualizer for all machines
3. **Data-Driven UI** - Use `state.nextEvents` to build UI
4. **Documentation Focus** - Show states and events, not custom widgets
5. **Scalable** - Adding machines doesn't require UI work

---

**This is a documentation-first, machine-agnostic architecture.**

The goal is to teach XState concepts, not build pretty UIs. The generic visualizer keeps the focus where it belongs: on the state machines themselves.