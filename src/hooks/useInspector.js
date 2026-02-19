import { useCallback } from "react";
import { inspector } from "../inspector";

/**
 * useInspector Hook
 *
 * Provides manual control to open the Stately Inspector in a new tab.
 * Inspector cannot be closed programmatically - user must close the tab manually.
 *
 * Usage:
 * function MachinePage() {
 *   const { openInspector } = useInspector();
 *   const [state, send] = useMachine(myMachine, { inspect });
 *
 *   return (
 *     <div>
 *       <button onClick={openInspector}>Open Stately Inspector</button>
 *     </div>
 *   );
 * }
 */
export function useInspector() {
  const openInspector = useCallback(() => {
    if (inspector.start) {
      inspector.start();
    }
  }, []);

  return {
    openInspector,
  };
}
