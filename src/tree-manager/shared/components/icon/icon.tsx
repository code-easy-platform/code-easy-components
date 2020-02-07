import * as React from 'react';
import styles from './icon.css';

/**
 * @param onClick Uma função como callBack.
 * @param onDoubleClick Uma função como callBack.
 * @param iconName Nome do icone a ser exibido.
 */
export const Icon = (props: any) => {

  let iconName;
  if (props.iconName === "collapse") iconName = styles.btnCollapseFolder;
  if (props.iconName === "expand") iconName = styles.btnExpandFolder;

  /*
    const [teste, setTeste] = React.useState("");
    const testando = () => {
      setTeste("");
    }
    onDoubleClickCapture={testando}
  */

  return (
    <div
      onClick={props.onClick}
      onDoubleClick={props.onDoubleClick}
      className={styles.default + " " + iconName}
    />
  );
}
