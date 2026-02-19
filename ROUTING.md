# React Router Setup - XState Machines

## 🎯 Route Structure

The application uses React Router to organize each XState machine into its own route:

```
/ (Home)              → HomePage with links to all machines
/toggle               → Toggle Machine example
/traffic-light        → Traffic Light Machine example
```

## 📁 File Organization

```
src/
├── pages/
│   ├── HomePage.jsx           # Index route with machine cards
│   ├── TogglePage.jsx         # Toggle machine route
│   ├── TrafficLightPage.jsx   # Traffic Light machine route
│   ├── HomePage.css           # Home page styles
│   ├── Page.css               # Shared page styles
│   └── PageLayout.css         # Page layout utilities
├── hooks/
│   └── useInspector.js        # Hook to control inspector lifecycle
└── App.jsx                    # Router configuration
```

## 🎨 HomePage (Index Route)

**Route:** `/`

**Features:**
- Displays all available machines as interactive cards
- Each card links to its machine route
- Includes info about Stately Inspector
- Shows visualization options and learning resources
- NO inspector auto-opens (user must click button on machine pages)

**Machine Cards:**
- 🔄 Toggle Machine
- 🚦 Traffic Light Machine

Each card has:
- Icon
- Name
- Description
- Color gradient
- "Explore →" call-to-action

## 🤖 Machine Pages

Each machine has its own dedicated route with:

### Common Features
1. **Back to Home Link** - Navigate back to index
2. **Page Header** - Machine name and description
3. **Interactive Demo** - Live machine with controls
4. **State Visualizer** - Real-time state display
5. **Machine Code** - Full code example
6. **About Section** - Explanation of concepts

### Stately Inspector Integration

**Important:** The inspector ONLY opens when you click the "Open Stately Inspector" button!

How it works:
- Each machine page uses the `useInspector()` hook
- Hook returns `startInspector` and `stopInspector` functions
- User clicks button to manually open/close inspector
- This gives full control over when inspector is visible
- Inspector shows ONLY the current machine when opened

## 🔧 useInspector Hook

Located at: `src/hooks/useInspector.js`

```javascript
import { useInspector } from '../hooks/useInspector';

function MachinePage() {
  const { isInspectorOpen, startInspector, stopInspector } = useInspector();
  
  const [state, send] = useMachine(myMachine, {
    inspect, // ← Sends events to inspector
  });
  
  return (
    <div>
      <button onClick={startInspector}>Open Stately Inspector</button>
      {/* ... component code */}
    </div>
  );
}
```

**What it does:**
- Returns `isInspectorOpen` state
- Returns `startInspector()` function to open inspector
- Returns `stopInspector()` function to close inspector
- Gives user manual control via button clicks
- Prevents inspector from auto-opening

## 🚀 Navigation Flow

### User Journey:

1. **Visit Home Page** (`/`)
   - See all available machines
   - Inspector does NOT open
   - Choose a machine to explore

2. **Click Machine Card** (e.g., `/toggle`)
   - Navigate to machine page
   - See "Open Stately Inspector" button
   - Inspector does NOT open automatically

3. **Click "Open Stately Inspector" Button**
   - Inspector window opens showing this machine
   - Interact with the machine
   - See live updates in inspector

4. **Click "Close Stately Inspector" Button** (optional)
   - Inspector disconnects
   - Inspector window closes

5. **Navigate to Different Machine** (e.g., `/traffic-light`)
   - Previous inspector closes if open
   - Click button to open inspector for new machine
   - Full control over when inspector is visible

## 📝 Adding a New Machine Route

To add a new machine to the routing system:

### 1. Create the Machine
```javascript
// src/machines/myNewMachine.js
import { createMachine } from 'xstate';

export const myNewMachine = createMachine({
  id: 'myNew',
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

### 2. Create the Page Component
```javascript
// src/pages/MyNewPage.jsx
import { useMachine } from '@xstate/react';
import { myNewMachine } from '../machines';
import { StateVisualizer } from '../components/StateVisualizer';
import { inspect } from '../inspector';
import { useInspector } from '../hooks/useInspector';
import { Link } from 'react-router-dom';
import './Page.css';

export function MyNewPage() {
  const { isInspectorOpen, startInspector, stopInspector } = useInspector();
  
  const [state, send] = useMachine(myNewMachine, {
    inspect, // ← Important!
  });

  return (
    <div className="page-container">
      <div className="page-header">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1>My New Machine</h1>
        <p className="page-description">Description here</p>
        <div style={{ marginTop: "16px" }}>
          {!isInspectorOpen ? (
            <button className="action-button" onClick={startInspector}>
              Open Stately Inspector
            </button>
          ) : (
            <button className="action-button" onClick={stopInspector}>
              Close Stately Inspector
            </button>
          )}
        </div>
      </div>

      <div className="example-card">
        <div className="demo-area">
          {/* Your demo UI */}
        </div>
        <StateVisualizer state={state} send={send} events={['START', 'STOP']} />
      </div>

      <div className="code-section">
        <h2>Machine Code</h2>
        <pre className="code-block">{/* Machine code */}</pre>
      </div>
    </div>
  );
}
```

### 3. Add Route to App.jsx
```javascript
// src/App.jsx
import { MyNewPage } from './pages/MyNewPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/toggle" element={<TogglePage />} />
        <Route path="/traffic-light" element={<TrafficLightPage />} />
        <Route path="/my-new" element={<MyNewPage />} /> {/* ← Add this */}
      </Routes>
    </BrowserRouter>
  );
}
```

### 4. Add Card to HomePage
```javascript
// src/pages/HomePage.jsx
const machines = [
  // ... existing machines
  {
    id: 'my-new',
    name: 'My New Machine',
    description: 'Description of what it does',
    path: '/my-new',
    icon: '🎯',
    color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
];
```

## 🎯 Benefits of This Approach

✅ **Clean URLs** - Each machine has its own route  
✅ **Bookmarkable** - Share direct links to specific machines  
✅ **Focused Inspector** - Only shows the current machine  
✅ **Better UX** - Inspector doesn't open on the home page  
✅ **Easy Navigation** - Clear back button and home page  
✅ **Scalable** - Easy to add new machines  
✅ **Organized Code** - Each machine in its own file  

## 🔍 Inspector Behavior Summary

| Location | Inspector Behavior |
|----------|-------------------|
| Home Page (`/`) | Does NOT open |
| Toggle Page (`/toggle`) | Opens when user clicks button |
| Traffic Light Page (`/traffic-light`) | Opens when user clicks button |

User has full manual control via "Open/Close Stately Inspector" buttons on each machine page.

## 🐛 Troubleshooting

### Inspector doesn't open when clicking button
- Check that `useInspector()` is called in the component
- Check that `inspect` is passed to `useMachine(machine, { inspect })`
- Check browser popup blocker
- Verify `startInspector` is connected to button onClick

### Inspector button doesn't appear
- Make sure the component destructures `{ startInspector, stopInspector }` from `useInspector()`
- Check that button is rendered in the page header

### Inspector doesn't close
- Click the "Close Stately Inspector" button
- Or navigate away from the page
- Check that `stopInspector` function is working

## 📚 Related Documentation

- `README.md` - Full project documentation
- `VISUALIZATION.md` - All visualization options
- `INSPECTOR-SETUP.md` - Inspector configuration details
- `QUICK-START.md` - Quick reference guide

---

**Happy Routing!** 🚀