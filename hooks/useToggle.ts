import { useCallback, useState } from "react";

/**
 * useToggle is a custom hook that returns a boolean value and a function to toggle the value.
 * @param initialState The initial state of the boolean value.
 * @returns [boolean, () => void] - The first value is the boolean value, the second value is a function to toggle the boolean value.
 */
export function useToggle(initialState: boolean = false) {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => setState((value) => !value), []);
  
  return [state, toggle] as const;
}
