import * as React from 'react';
import './icon.css';

/**
 * @param onClick Uma função como callBack.
 * @param onDoubleClick Uma função como callBack.
 * @param iconName Nome do icone a ser exibido.
 */
export const Icon = (props: any) => {

  let iconName;
  if (props.iconName === "collapse") iconName = "btnCollapseFolder";
  if (props.iconName === "expand") iconName = "btnExpandFolder";


  return (
    <div
      className={"default" + " " + iconName}
      onClick={props.onClick}
      onDoubleClick={props.onDoubleClick}
    />
  );
}
