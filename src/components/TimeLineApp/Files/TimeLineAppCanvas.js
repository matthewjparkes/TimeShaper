import React, {useRef, useEffect, useState} from 'react'
import MousePosition from './MouseCoordinates';

const TimeLineAppCanvas = props => {
    const canvasRef = useRef(null);
    const [coords, handleCoords] = MousePosition(true);
    const [canvasH, setCanvasH] = useState();
    const [canvasW, setCanvasW] = useState();



 useEffect(() => {
  const drawInterface = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = "#F9BF45";
    ctx.roundRect((canvasW - (canvasW*0.35))/2, (canvasH - (canvasH*0.125)), (canvasW*0.35), (canvasH*0.125), [20, 20, 0, 0]);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, ((canvasH - (canvasH*0.05))/2) - (canvasH*0.0625) , (canvasW), (canvasH*0.005));
    ctx.fill();

  }
  const handleResize = () => {

    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      setCanvasH(canvas.height);
      setCanvasW(canvas.width);
      
    }
  };
  console.log('Use Effect Run')
  handleResize();
  drawInterface();
  
  window.addEventListener("resize", handleResize);



  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, [canvasH, canvasW]);

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