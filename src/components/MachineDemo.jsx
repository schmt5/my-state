import { getNextTransitions } from "xstate";
import { StateVisualizer } from "./StateVisualizer";
import "./MachineDemo.css";

/**
 * Extract available events for the current state using XState's getNextTransitions API
 */
function getAvailableEvents(state) {
  if (!state) {
    return [];
  }

  // Use XState's built-in getNextTransitions to get all available transitions
  const transitions = getNextTransitions(state);

  // Extract unique event types from transitions
  const events = new Set();
  transitions.forEach((transition) => {
    if (transition.eventType && transition.eventType !== "*") {
      events.add(transition.eventType);
    }
  });

  return Array.from(events).sort();
}

/**
 * MachineDemo Component
 *
 * A generic, reusable component for demonstrating ANY XState machine.
 * Decoupled from specific UI implementations - just shows states and events.
 *
 * Props:
 * - state: Current machine state (from useMachine)
 * - send: Send function (from useMachine)
 * - title: Machine name/title
 * - description: Machine description
 * - machineCode: String of machine code to display
 */
export function MachineDemo({ state, send, title, description, machineCode }) {
  // Extract available events from current state using XState's getNextTransitions
  const availableEvents = getAvailableEvents(state);

  return (
    <div className="machine-demo">
      {title && <h2>{title}</h2>}
      {description && <p className="demo-description">{description}</p>}

      {/* State Visualizer */}
      <StateVisualizer state={state} send={send} events={availableEvents} />

      {/* Machine Code */}
      {machineCode && (
        <div className="machine-code-section">
          <h3>Machine Definition</h3>
          <pre className="code-block">{machineCode}</pre>
        </div>
      )}
    </div>
  );
}
