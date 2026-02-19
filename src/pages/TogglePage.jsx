import { useMachine } from "@xstate/react";
import { toggleMachine } from "../machines";
import { MachineDemo } from "../components/MachineDemo";
import { inspect } from "../inspector";
import { useInspector } from "../hooks/useInspector";
import { Link } from "react-router-dom";
import "./Page.css";

const machineCode = `import { createMachine } from 'xstate';

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
});`;

export function TogglePage() {
  const { openInspector } = useInspector();

  const [state, send] = useMachine(toggleMachine, {
    inspect,
  });

  return (
    <div className="page-container">
      <div className="page-header">
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
        <h1>Toggle Machine</h1>
        <p className="page-description">
          A simple on/off toggle demonstrating basic state transitions. This is
          the most fundamental state machine pattern.
        </p>
        <div style={{ marginTop: "16px" }}>
          <button className="action-button" onClick={openInspector}>
            Open Stately Inspector
          </button>
        </div>
      </div>

      <MachineDemo
        state={state}
        send={send}
        title="Interactive Demo"
        description="Click the available events below to trigger state transitions."
        machineCode={machineCode}
      />

      <div className="machine-info">
        <h3>About This Machine</h3>
        <p>
          This toggle machine demonstrates the most basic state machine pattern
          with just two states and simple transitions between them.
        </p>
        <ul>
          <li>
            <strong>States:</strong> The machine can be in either "inactive" or
            "active" state
          </li>
          <li>
            <strong>Event:</strong> The TOGGLE event switches between the two
            states
          </li>
          <li>
            <strong>Use Case:</strong> Perfect for on/off switches, boolean
            flags, or binary states
          </li>
        </ul>
      </div>
    </div>
  );
}
