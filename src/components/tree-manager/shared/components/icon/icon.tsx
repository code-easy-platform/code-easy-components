import * as React from 'react';

/**
 * @param onClick Uma função como callBack.
 * @param onDoubleClick Uma função como callBack.
 * @param iconName Nome do icone a ser exibido.
 */
export const Icon = (props: any) => {

  let icon;
  if (props.iconName === "collapse") icon = require("./../../icons/btn-collapse-folder.svg");
  if (props.iconName === "expand") icon = require("./../../icons/btn-expand-folder.svg");


  return (
    <div
      style={{
        width: "var(--size-3)",
        height: "var(--size-3)",
        content: icon,
        paddingRight: "var(--size-1-5)",
        paddingLeft: "var(--size-1-5)",
        justifyContent: "center",
        alignSelf: "center",
      }}
      onClick={props.onClick}
      onDoubleClick={props.onDoubleClick}
    />
  );
}
