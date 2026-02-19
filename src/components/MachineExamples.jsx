import { useMachine } from "@xstate/react";
import {
  toggleMachine,
  counterMachine,
  trafficLightMachine,
} from "../machines";
import { StateVisualizer } from "./StateVisualizer";
import { inspect } from "../inspector";
import "./MachineExamples.css";

/**
 * Toggle Machine Example
 */
function ToggleExample() {
  const [state, send] = useMachine(toggleMachine, {
    inspect,
  });

  return (
    <div className="example-card">
      <h2>Toggle Machine</h2>
      <p>A simple on/off toggle demonstrating basic state transitions.</p>

      <div className="demo-area">
        <div className={`toggle-display ${state.value}`}>
          <div className="toggle-icon">
            {state.value === "active" ? "✓" : "✗"}
          </div>
          <p>
            Status: <strong>{state.value}</strong>
          </p>
        </div>

        <button
          className="action-button"
          onClick={() => send({ type: "TOGGLE" })}
        >
          Toggle
        </button>
      </div>

      <StateVisualizer state={state} send={send} events={["TOGGLE"]} />
    </div>
  );
}

/**
 * Counter Machine Example
 */
function CounterExample() {
  const [state, send] = useMachine(counterMachine, {
    inspect,
  });

  return (
    <div className="example-card">
      <h2>Counter Machine</h2>
      <p>Demonstrates context (data storage) and actions.</p>

      <div className="demo-area">
        <div className="counter-display">
          <div className="count-value">{state.context.count}</div>
          <div className="count-label">Count</div>
        </div>

        <div className="button-group">
          <button
            className="action-button"
            onClick={() => send({ type: "DECREMENT" })}
          >
            - Decrement
          </button>
          <button
            className="action-button"
            onClick={() => send({ type: "RESET" })}
          >
            Reset
          </button>
          <button
            className="action-button"
            onClick={() => send({ type: "INCREMENT" })}
          >
            + Increment
          </button>
        </div>
      </div>

      <StateVisualizer
        state={state}
        send={send}
        events={["INCREMENT", "DECREMENT", "RESET"]}
      />
    </div>
  );
}

/**
 * Traffic Light Machine Example
 */
function TrafficLightExample() {
  const [state, send] = useMachine(trafficLightMachine, {
    inspect,
  });

  return (
    <div className="example-card">
      <h2>Traffic Light Machine</h2>
      <p>A cyclical state machine: green → yellow → red → green</p>

      <div className="demo-area">
        <div className="traffic-light">
          <div
            className={`light red ${state.value === "red" ? "active" : ""}`}
          ></div>
          <div
            className={`light yellow ${state.value === "yellow" ? "active" : ""}`}
          ></div>
          <div
            className={`light green ${state.value === "green" ? "active" : ""}`}
          ></div>
        </div>

        <button
          className="action-button"
          onClick={() => send({ type: "NEXT" })}
        >
          Next Light
        </button>
      </div>

      <StateVisualizer state={state} send={send} events={["NEXT"]} />
    </div>
  );
}

/**
 * Main component that displays all examples
 */
export function MachineExamples() {
  return (
    <div className="machine-examples">
      <header className="examples-header">
        <h1>XState v5 Machine Examples</h1>
        <p>
          Interactive examples demonstrating XState state machines with
          real-time visualization
        </p>
        <div className="info-banner">
          💡 Each example includes a State Inspector showing current state,
          context, and available events
        </div>
        <div
          className="info-banner"
          style={{
            marginTop: "10px",
            background: "linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)",
          }}
        >
          🎉 <strong>Stately Inspector Active!</strong> A new window should open
          automatically with real-time diagrams
        </div>
      </header>

      <div className="examples-grid">
        <ToggleExample />
        <CounterExample />
        <TrafficLightExample />
      </div>

      <footer className="examples-footer">
        <h3>📊 Visualization Options</h3>
        <p>
          <strong>Inspector Window:</strong> Should auto-open with real-time
          state diagrams and sequence diagrams
        </p>
        <p>
          <strong>Stately Studio:</strong> Copy machine code and paste at{" "}
          <a
            href="https://stately.ai/studio"
            target="_blank"
            rel="noopener noreferrer"
          >
            stately.ai/studio
          </a>
        </p>
        <p style={{ marginTop: "15px", fontSize: "0.9rem", color: "#999" }}>
          💡 If the inspector window doesn't open, check your popup blocker
        </p>
      </footer>
    </div>
  );
}
