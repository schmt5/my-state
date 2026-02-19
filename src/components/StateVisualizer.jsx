import "./StateVisualizer.css";

/**
 * StateVisualizer Component
 *
 * A simple visual debugger for XState machines that displays:
 * - Current state
 * - Context values
 * - Available events/transitions
 *
 * Usage:
 * <StateVisualizer
 *   state={state}
 *   send={send}
 *   events={['TOGGLE', 'RESET']}
 * />
 */
export function StateVisualizer({ state, send, events = [] }) {
  return (
    <div className="state-visualizer">
      <div className="visualizer-section">
        <h4>Current State</h4>
        <div className="state-badge">
          {typeof state.value === "string"
            ? state.value
            : JSON.stringify(state.value)}
        </div>
      </div>

      {events.length > 0 && (
        <div className="visualizer-section">
          <h4>Available Events</h4>
          <div className="events-grid">
            {events.map((event) => (
              <button
                key={event}
                className="event-button"
                onClick={() => send({ type: event })}
              >
                {event}
              </button>
            ))}
          </div>
        </div>
      )}

      {state.context && Object.keys(state.context).length > 0 && (
        <div className="visualizer-section">
          <h4>Context</h4>
          <pre className="context-display">
            {JSON.stringify(state.context, null, 2)}
          </pre>
        </div>
      )}

      <div className="visualizer-section">
        <details>
          <summary>View Full State Object</summary>
          <pre className="state-display">{JSON.stringify(state, null, 2)}</pre>
        </details>
      </div>
    </div>
  );
}
