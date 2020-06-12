import React, { useRef } from 'react';

import { Tooltip } from './Tooltip';
import { Resizer } from './Resizer';

const css_prop_item: React.CSSProperties = {
  justifyContent: 'space-between',
  height: 'min-content',
  alignItems: 'center',
  position: 'relative',
  display: 'flex',
  padding: 4,
  paddingBottom: 0,
}

const css_prop_item_label: React.CSSProperties = {
  textOverflow: 'ellipsis',
  display: 'inline-block',
  whiteSpace: 'nowrap',
  textAlign: 'start',
  overflow: 'hidden',
  flex: 1,
}

const minWidth = 60;

interface InputViewOnlyProp {
  onChangeInputWidth?(width: number): void;
  ref: React.MutableRefObject<any> | null;
  infoIconRef?: React.RefObject<any>;
  labelHasError?: boolean;
  valueHasError?: boolean;
  information?: string;
  inputWidth?: number;
  infoIcon?: string;
  label: string;
  id: string;
  value: any;
}
export const InputViewOnly: React.FC<InputViewOnlyProp> = ({ id, ref, label, value, infoIcon, infoIconRef, information, labelHasError, valueHasError, onChangeInputWidth, inputWidth }) => {
  // const containerWidth = useRef<any>(null);
  if (!infoIconRef) {
    infoIconRef = useRef<any>(null);
  }

  return (
    <div key={id} ref={ref} style={css_prop_item}>
      <label htmlFor={'prop_id_' + id} style={{ ...css_prop_item_label, ...{ textDecoration: labelHasError ? `var(--text-underline-error)` : undefined } }}>
        {label}
        {(information !== "" && information !== undefined) && <span>
          <img ref={infoIconRef} style={{ marginLeft: 4, cursor: 'pointer' }} width={10} height={10} src={infoIcon} alt="info-icon" />
          <Tooltip elementRef={infoIconRef} description={information} />
        </span>}
      </label>
      <Resizer onChange={newWidth => onChangeInputWidth && onChangeInputWidth(newWidth)} />
      <div style={{ width: inputWidth ? `${inputWidth}px` : '70%', minWidth: minWidth, maxWidth: '90%' }}>
        <label
          key={'prop_key_' + id}
          id={'prop_id_' + id}
          children={value}
          style={{
            textDecoration: valueHasError ? `var(--text-underline-error)` : undefined,
            backgroundColor: 'transparent',
            textOverflow: 'ellipsis',
            display: 'block',
            whiteSpace: 'nowrap',
            textAlign: 'start',
            overflow: 'hidden',
          }}
        />
      </div>
    </div>
  );
}






