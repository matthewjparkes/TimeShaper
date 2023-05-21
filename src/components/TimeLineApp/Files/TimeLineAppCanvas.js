import React, {useRef, useEffect} from 'react'
import MousePosition from './MouseCoordinates';

const TimeLineAppCanvas = props => {
    const canvasRef = useRef(null);
    const [coords, handleCoords] = MousePosition(true);

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