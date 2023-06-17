import React, {useRef, useEffect, useState} from 'react'
import MousePosition from './MouseCoordinates';

const TimeLineAppCanvas = (props, Title) => {
    const canvasRef = useRef(null);
    const [coords, handleCoords] = MousePosition(true);
    const [canvasH, setCanvasH] = useState();
    const [canvasW, setCanvasW] = useState();



 useEffect(() => {

  const drawDate = (ctx) => {
    ctx.font = "10px Zen Dots";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(new Date(props.StartDate).getFullYear().toString(), canvasW - (canvasW*0.95), canvasH/2)
    ctx.fillText(new Date(props.EndDate).getFullYear().toString(), canvasW - (canvasW*0.05), canvasH/2)

  }

  const drawIntervals = (ctx) => {
    
    const StartDateFigure = new Date(props.StartDate)
    const EndDateFigure = new Date(props.EndDate)
    const TimeLength = EndDateFigure.getFullYear() - StartDateFigure.getFullYear()
    const IntervalCalc = props.TimeType === 'Yearly' ? 1 : TimeLength/ props.Intervals
    const WidthCalc = 0.9/(props.TimeType === 'Yearly'? TimeLength : props.Intervals)
    let DateArray = [StartDateFigure.getFullYear()];
    for(let i = 0; i < (props.TimeType === 'Yearly'? TimeLength : props.Intervals) - 1; i ++) {
    let NewDate = Math.round(DateArray[i] + IntervalCalc)
    DateArray.push(NewDate);
    ctx.font = "10px Zen Dots";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(NewDate, canvasW - (canvasW * (0.95 - (WidthCalc * (i+1)))), canvasH/2)
    }
  }


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

    ctx.font = "30px Zen Dots";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(props.Title, canvasW/2, canvasH - (canvasH *0.90))
    drawDate(ctx)
    drawIntervals(ctx);

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