import { useState, useEffect } from 'react';
import { Utils } from '../Utils';

export const useAngle = (currX: number, currY: number, endX: number, endY: number) => {
  const [angle, setAngle] = useState(Utils.getAngle(currX, currY, endX, endY));
  useEffect(() => {
    setAngle(Utils.getAngle(currX, currY, endX, endY))
  }, [currX, currY, endX, endY]);
  return angle;
}
