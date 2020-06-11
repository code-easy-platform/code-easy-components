import React, { useState } from 'react';

interface TooltipProps {
  elementRef: React.MutableRefObject<any>;
  description?: string;
}
export const Tooltip: React.FC<TooltipProps> = ({ description, elementRef }) => {
  const [visible, setVisible] = useState(false);

  if (elementRef.current) {
    elementRef.current.onmouseenter = () => {
      setVisible(true);
    }
    elementRef.current.onpointerleave = () => {
      setVisible(false);
    }
  }

  if (!visible) return null;

  return (
    <div
      className="absolute padding-s background-info box-shadow-small flex-column border-radius"
      style={{
        boxShadow: 'black 0px 0px 4px',
        transform: 'translateY(70%)',
        flexDirection: 'column',
        position: "absolute",
        borderRadius: 5,
        minWidth: 100,
        maxWidth: 250,
        zIndex: 5000,
        padding: 4,
      }}
    >
      {description}
    </div>
  );
}
