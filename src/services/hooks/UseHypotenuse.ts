import { useState, useEffect } from 'react';

export function useHypotenuse(...values: number[]) {
  const [hypotenuse, setHypotenuse] = useState(Math.hypot(...values));
  useEffect(() => {
    setHypotenuse(Math.hypot(...values));
  }, [values]);
  return hypotenuse;
}
