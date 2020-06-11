import React, { useRef } from 'react';
import { Tooltip } from './Tooltip';

const css_prop_item: React.CSSProperties = {
  justifyContent: 'space-between',
  height: 'min-content',
  alignItems: 'center',
  position: 'relative',
  padding: 4,
  paddingBottom: 0,
}

const css_prop_item_label: React.CSSProperties = {
  textOverflow: 'ellipsis',
  display: 'inline-block',
  whiteSpace: 'nowrap',
  textAlign: 'start',
  overflow: 'hidden',
}

interface InputViewOnlyProp {
  ref: React.MutableRefObject<any> | null;
  infoIconRef?: React.RefObject<any>;
  labelHasError: boolean;
  information: string;
  infoIcon: string;
  label: string;
  id: string;
  value: any;
}
export const InputViewOnly: React.FC<InputViewOnlyProp> = ({ ref, label, value, infoIcon, infoIconRef, information }) => {
  // const containerWidth = useRef<any>(null);
  if (!infoIconRef) {
    infoIconRef = useRef<any>(null);
  }
  return (
    <div ref={ref} style={css_prop_item}>
      <label style={css_prop_item_label}>
        {label}
        {(information !== "" && information !== undefined) && <img ref={infoIconRef} style={{ margin: 4 }} className="margin-left-xs" width={10} height={10} src={infoIcon} alt="info-icon" />}
      </label>
      <Tooltip elementRef={infoIconRef} description={information} />
      <label>{value}</label>
    </div>
  );
}
