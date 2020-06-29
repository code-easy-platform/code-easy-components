import { useState, useEffect } from 'react';

/** Return the hypotenuse */
export function useHypotenuse(...values: number[]) {
  const [hypotenuse, setHypotenuse] = useState(Math.hypot(...values));
  useEffect(() => {
    setHypotenuse(Math.hypot(...values));
  }, [values]);
  return hypotenuse;
}
