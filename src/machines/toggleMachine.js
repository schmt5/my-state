import { createMachine } from 'xstate';

/**
 * A simple toggle machine that switches between "inactive" and "active" states.
 * This demonstrates the basics of XState state machines.
 */
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
});
