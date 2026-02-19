import { createMachine } from 'xstate';

/**
 * A traffic light state machine that cycles through:
 * green -> yellow -> red -> green
 *
 * This demonstrates:
 * - Multiple states
 * - Transitions between states
 * - A simple cyclical state flow
 */
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
