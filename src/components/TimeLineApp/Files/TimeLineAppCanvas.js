import React, {useRef, useEffect} from 'react'
import MousePosition from './MouseCoordinates';

const TimeLineAppCanvas = props => {
    const canvasRef = useRef(null);
    const [coords, handleCoords] = MousePosition(true);

 useEffect(() => {
  const handleResize = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    }
  };

  handleResize();
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

    return <canvas ref={canvasRef} {...props}
    onClick={(e) => {
      handleCoords((e));
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext("2d");
        ctx.strokeStyle = "#0095DD";
        ctx?.strokeRect(coords.x, coords.y, 20, 30);
      }
    }}/>
  }

export default TimeLineAppCanvas