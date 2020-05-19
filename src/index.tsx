import * as React from 'react';
import './styles.module.css';




import { Utils as U } from './services/Utils';
/**
 * Utilities used to aid development
 */
export const Utils = U;




/** Export all icons */
export * from './icons';




export const Hello: React.FC<{}> = () => {
  return <div className={"test"}>Hello</div>;
}
