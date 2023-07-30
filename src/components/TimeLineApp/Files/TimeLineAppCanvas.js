import React, {useRef, useEffect, useState} from 'react'
import MousePosition from './MouseCoordinates';

const TimeLineAppCanvas = (props, Title) => {
    const canvasRef = useRef(null);
    const [coords, handleCoords] = MousePosition(true);
    const [canvasH, setCanvasH] = useState();
    const [canvasW, setCanvasW] = useState();
    const [TimeLineItem, setTimeLineItem] = useState('None');




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
    let TimeLength = 0;
    let IntervalCalc = 0;
    let WidthCalc = 0;
    let DateArray = [];

    switch ((props.TimeType)) {
      case 'Yearly':
        TimeLength = EndDateFigure.getFullYear() - StartDateFigure.getFullYear();
        IntervalCalc = 1
        DateArray.push(StartDateFigure.getFullYear())
        break;
      case '10 Years': 
      TimeLength = EndDateFigure.getFullYear() - StartDateFigure.getFullYear();
      IntervalCalc = 10;
      DateArray.push(StartDateFigure.getFullYear())
      break;
      case '2 Years': 
      TimeLength = EndDateFigure.getFullYear() - StartDateFigure.getFullYear();
      IntervalCalc = 2;
      DateArray.push(StartDateFigure.getFullYear())
      break;
      case '5 Years': 
      TimeLength = EndDateFigure.getFullYear() - StartDateFigure.getFullYear();
      IntervalCalc = 5;
      DateArray.push(StartDateFigure.getFullYear())
      break;
      case '20 Years': 
      TimeLength = EndDateFigure.getFullYear() - StartDateFigure.getFullYear();
      IntervalCalc = 20;
      DateArray.push(StartDateFigure.getFullYear())
      break;
      case '20 Years': 
      TimeLength = EndDateFigure.getFullYear() - StartDateFigure.getFullYear();
      IntervalCalc = 25;
      DateArray.push(StartDateFigure.getFullYear())
      break;
      case '50 Years': 
      TimeLength = EndDateFigure.getFullYear() - StartDateFigure.getFullYear();
      IntervalCalc = 50;
      DateArray.push(StartDateFigure.getFullYear())
      break;
      case '100 Years': 
      TimeLength = EndDateFigure.getFullYear() - StartDateFigure.getFullYear();
      IntervalCalc = 100;
      DateArray.push(StartDateFigure.getFullYear())
      break;
      default:
      TimeLength = EndDateFigure.getFullYear() - StartDateFigure.getFullYear();
      IntervalCalc = 1
      DateArray.push(StartDateFigure.getFullYear())
        break;
    }

    WidthCalc = (0.9/(TimeLength/IntervalCalc));

    for(let i = 0; i < TimeLength - 1; i ++) {
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

    if(TimeLineItem === 'Event'){
      ctx.beginPath();
      ctx.fillStyle = "#F9BF45";
      ctx.roundRect((canvasW - (canvasW*0.325))/2, (canvasH - (canvasH*0.18)), (canvasW*0.1), (canvasH*0.06), [20, 20, 0, 0]);
      ctx.fill();
    } else if(TimeLineItem === 'Explainer'){
      ctx.beginPath();
      ctx.fillStyle = "#F9BF45";
      ctx.roundRect((canvasW - (canvasW*0.1335))/2, (canvasH - (canvasH*0.18)), (canvasW*0.13), (canvasH*0.06), [20, 20, 0, 0]);
      ctx.fill();
    } else if (TimeLineItem === 'Period'){
      ctx.beginPath();
      ctx.fillStyle = "#F9BF45";
      ctx.roundRect((canvasW - (canvasW*0.435)), (canvasH - (canvasH*0.18)), (canvasW*0.1), (canvasH*0.06), [20, 20, 0, 0]);
      ctx.fill();
    }

    ctx.font = "20px Zen Dots";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText('Event', (canvasW/2)*0.775, TimeLineItem === 'Event' ? canvasH - (canvasH *0.13) : canvasH - (canvasH *0.05));

    ctx.font = "20px Zen Dots";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText('Explainer', (canvasW/2), TimeLineItem === 'Explainer' ? canvasH - (canvasH *0.13) : canvasH - (canvasH *0.05));

    ctx.font = "20px Zen Dots";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText('Period', (canvasW/2)*1.23, TimeLineItem === 'Period' ? canvasH - (canvasH *0.13) : canvasH - (canvasH *0.05));

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
}, [canvasH, canvasW, TimeLineItem]);

    return <canvas ref={canvasRef} {...props}
    onClick={(e) => {
      handleCoords((e));
      if(coords.x > (canvasW/2)*0.70 && coords.x <= ((canvasW/2)*0.85) && coords.y > (canvasH - (canvasH *0.125))) {
        setTimeLineItem('Event');
        console.log('change')
      } else if (coords.x > (canvasW/2)*0.85 && coords.x < ((canvasW/2)*1.1) && coords.y > (canvasH - (canvasH *0.125))){
        setTimeLineItem('Explainer');
      } else if (coords.x > (canvasW/2)*1.101 && coords.x < ((canvasW/2)*1.3) && coords.y > (canvasH - (canvasH *0.125))){
        setTimeLineItem('Period')
      } else if (canvasRef.current) {
        const ctx = canvasRef.current.getContext("2d");
        ctx.strokeStyle = "#0095DD";
        ctx?.strokeRect(coords.x, coords.y, 20, 30);
      }
    }}/>
  }

export default TimeLineAppCanvas