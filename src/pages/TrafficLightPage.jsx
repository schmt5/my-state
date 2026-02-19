import { useMachine } from "@xstate/react";
import { trafficLightMachine } from "../machines";
import { MachineDemo } from "../components/MachineDemo";
import { inspect } from "../inspector";
import { useInspector } from "../hooks/useInspector";
import { Link } from "react-router-dom";
import "./Page.css";

const machineCode = `import { createMachine } from 'xstate';

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
});`;

export function TrafficLightPage() {
  const { openInspector } = useInspector();

  const [state, send] = useMachine(trafficLightMachine, {
    inspect,
  });

  return (
    <div className="page-container">
      <div className="page-header">
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
        <h1>Traffic Light Machine</h1>
        <p className="page-description">
          A cyclical state machine that transitions through green → yellow → red
          → green. This demonstrates sequential state flows and cyclical
          patterns.
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
        description="Click the available events below to trigger state transitions through the traffic light cycle."
        machineCode={machineCode}
      />

      <div className="machine-info">
        <h3>About This Machine</h3>
        <p>
          This traffic light machine demonstrates a cyclical state pattern where
          states transition in a predictable sequence.
        </p>
        <ul>
          <li>
            <strong>States:</strong> The machine cycles through three states:
            green, yellow, and red
          </li>
          <li>
            <strong>Event:</strong> The NEXT event advances to the next state in
            the cycle
          </li>
          <li>
            <strong>Use Case:</strong> Perfect for workflows, wizards, or any
            cyclical process
          </li>
        </ul>
      </div>
    </div>
  );
}
