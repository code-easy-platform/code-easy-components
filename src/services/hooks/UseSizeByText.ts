import { useState, useEffect } from 'react';

/** Return the hypotenuse */
export function useSizeByText(text: string): { width: number, height: number } {

  const getSizeByText = (text: string) => {

    let span = document.createElement("span");
    document.body.appendChild(span);

    span.style.position = 'absolute';
    span.style.height = 'auto';
    span.style.width = 'auto';
    span.innerText = text;

    const formattedWidth = Math.ceil(span.clientWidth);
    const formattedHeight = Math.ceil(span.clientHeight);

    document.body.removeChild(span);

    return {
      width: formattedWidth,
      height: formattedHeight,
    };
  }

  const [{ height, width }, setHypotenuse] = useState(getSizeByText(text));

  useEffect(() => {
    setHypotenuse(getSizeByText(text));
  }, [text]);

  return { width, height };
}
