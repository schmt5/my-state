import { createBrowserInspector } from "@statelyai/inspect";

/**
 * Stately Inspector Configuration
 *
 * This creates a browser inspector that opens in a new window/tab
 * and provides real-time visualization of your XState machines.
 *
 * Features:
 * - Visual state machine diagrams
 * - Sequence diagrams showing actor communication
 * - Real-time state updates
 * - Event tracking
 *
 * Usage:
 * import { inspector } from './inspector';
 *
 * const actor = createActor(machine, {
 *   inspect: inspector.inspect
 * });
 */

// Only enable inspector in development mode
// Don't auto-start - let individual pages control when to start
const inspectorInstance = import.meta.env.DEV
  ? createBrowserInspector({
      // Don't auto-start - pages will start manually
      autoStart: false,

      // Use default Stately Inspector URL
      // url: 'https://stately.ai/inspector',

      // Optional: Use an iframe instead of popup window
      // iframe: document.getElementById('inspector-iframe'),

      // Optional: Filter out noisy events if needed
      // filter: (inspEvent) => {
      //   if (inspEvent.type === '@xstate.event') {
      //     return inspEvent.event.type !== 'mouse.move';
      //   }
      //   return true;
      // },
    })
  : { inspect: undefined, start: () => {}, disconnect: () => {} };

// Export the inspector instance
export const inspector = inspectorInstance;

// Export the inspect function for convenience
export const { inspect } = inspectorInstance;
