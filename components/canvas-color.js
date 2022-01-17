import React, { useRef, useEffect } from 'react';
import ColorPop from './color-pop';

const CanvasColor = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    ColorPop();
  }, []);

  return <canvas ref={canvasRef} {...props} id='c' resize='true' />;
};

export default CanvasColor;
