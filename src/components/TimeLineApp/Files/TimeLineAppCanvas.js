import React, {useRef, useEffect, useState} from 'react'
import MousePosition from './MouseCoordinates';
import TimeLineApp from '../TimeLineApp';

const TimeLineAppCanvas = (props, Title) => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [coords, handleCoords] = MousePosition(true);
    const [canvasH, setCanvasH] = useState();
    const [canvasW, setCanvasW] = useState();
    const [TimeLineItem, setTimeLineItem] = useState('None');
    const [MouseMovement, setMouseMovement] = useState([0, 0]);
    const [DateArrayList, setDateArrayList] = useState();
    const [DateArrayLocList, setDateArrayLocList] = useState();
    const [WidthCalcMain, setWidthCalc] = useState();
    const [DateBoundaryMain, setDateBoundary] = useState();
    const [ScrollLocation, setScrollLocation] = useState();

useEffect(() => {

  console.log('first useffect' + WidthCalcMain)
  if(WidthCalcMain < 0.03){
    canvasRef.current.width = (canvasRef.current.width/ (WidthCalcMain*25))
    console.log(canvasRef.current)
  }

  

}, [WidthCalcMain])


 useEffect(() => {

 
 // Draws the first and last date
  const drawDate = (ctx) => {
    ctx.font = "10px Zen Dots";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(new Date(props.StartDate).getFullYear().toString(), canvasW - (canvasW*DateBoundaryMain), canvasH/2)
    ctx.fillText(new Date(props.EndDate).getFullYear().toString(), canvasW - (canvasW*(1 - DateBoundaryMain)), canvasH/2)

  }

  // Draws Date Intervals
  const drawIntervals = (ctx) => {

    // Saving Start/End date to a variable - converting it into daye
    const StartDateFigure = new Date(props.StartDate)
    const EndDateFigure = new Date(props.EndDate) 
    let dateBoundary = 0.95;
    let TimeLength = 0;
    let IntervalCalc = 0;
    let WidthCalc = 0;
    let DateArray = [];
    let DateArrayLoc = [[canvasW - (canvasW * (dateBoundary)), 0]];
    let YearPointer = 1980;

    // Adding Start Date to Date Array + saving an Interval variable depending on TimeType passed through props
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

    // Co-efficient for calculating interval placement
    WidthCalc = (0.9/(TimeLength/IntervalCalc));

    // Need something here to ensure the boundaries next to start and end dates

    for(let i = 0; i < (TimeLength/IntervalCalc) - 1; i ++) {
    let NewDate = Math.round(DateArray[i] + IntervalCalc)
    DateArray.push(NewDate);
    ctx.font = "10px Zen Dots";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(NewDate, canvasW - (canvasW * (dateBoundary - (WidthCalc * (i+1)))), canvasH/2);
    DateArrayLoc.push([canvasW - (canvasW * (dateBoundary - (WidthCalc * (i+1)))), canvasH/2 ])

    }

    setDateBoundary(dateBoundary);
    setDateArrayList(DateArray);
    setDateArrayLocList(DateArrayLoc);
    setWidthCalc(WidthCalc);
  
  }

// Draws the Yellow toolbar and title
  const drawInterface = () => {
    const ctx = canvasRef.current.getContext("2d");
    const canvas = containerRef.current
    const CanvasWidth = canvas.clientWidth
    console.log('scroll width' + canvas.scrollWidth + 'client width ' + canvas.clientWidth)
    ctx.beginPath();
    ctx.fillStyle = "#F9BF45";
    ctx.roundRect((ScrollLocation+(CanvasWidth/5)), (canvasH - (canvasH*0.125)), (CanvasWidth/1.6), (canvasH*0.125), [20, 20, 0, 0]);
    ctx.fill();

    if(TimeLineItem === 'Event'){
      ctx.beginPath();
      ctx.fillStyle = "#F9BF45";
      ctx.roundRect((ScrollLocation+(CanvasWidth/4.5)), (canvasH - (canvasH*0.18)), (canvasW*0.1), (canvasH*0.06), [20, 20, 0, 0]);
      ctx.fill();

      let YearIndex = DateArrayLocList.findIndex((e, i) => e[0] <= coords.x && (coords.x < (canvasW - (canvasW * (0.95 - (WidthCalcMain * (i+1)))))));
      // && coords.x < (e[0] + WidthCalcMain)
      console.log(  DateArrayList)

      if(YearIndex != -1 ){
      ctx.font = "10px Zen Dots";
      ctx.fillStyle = "grey";
      ctx.textAlign = "center";
      ctx.fillText(DateArrayList[YearIndex], MouseMovement[0], MouseMovement[1]);
      }
    } else if(TimeLineItem === 'Explainer'){
      ctx.beginPath();
      ctx.fillStyle = "#F9BF45";
      ctx.roundRect((ScrollLocation+(CanvasWidth/2.63)), (canvasH - (canvasH*0.18)), (canvasW*0.13), (canvasH*0.06), [20, 20, 0, 0]);
      ctx.fill();
    } else if (TimeLineItem === 'Period'){
      ctx.beginPath();
      ctx.fillStyle = "#F9BF45";
      ctx.roundRect((ScrollLocation+(CanvasWidth/1.6)), (canvasH - (canvasH*0.18)), (canvasW*0.1), (canvasH*0.06), [20, 20, 0, 0]);
      ctx.fill();
    }

    ctx.font = "20px Zen Dots";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText('Event', (ScrollLocation+(CanvasWidth/3.25)), TimeLineItem === 'Event' ? canvasH - (canvasH *0.13) : canvasH - (canvasH *0.05));

    ctx.font = "20px Zen Dots";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText('Explainer', (ScrollLocation+(CanvasWidth/2)), TimeLineItem === 'Explainer' ? canvasH - (canvasH *0.13) : canvasH - (canvasH *0.05));

    ctx.font = "20px Zen Dots";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText('Period', (ScrollLocation+(CanvasWidth/1.4)), TimeLineItem === 'Period' ? canvasH - (canvasH *0.13) : canvasH - (canvasH *0.05));

    ctx.beginPath();
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, ((canvasH - (canvasH*0.05))/2) - (canvasH*0.0625) , (canvasW), (canvasH*0.005));
    ctx.fill();



    ctx.font = "30px Zen Dots";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(props.Title, (ScrollLocation+(CanvasWidth/2)), canvasH - (canvasH *0.90))
    drawDate(ctx)
    drawIntervals(ctx);

   

  }

  // Setting the Canvas to the size of the .getBoundingClientRect() - saving the canvas.width to a state
  const handleResize = () => {

    // How do I keep the .GetBounding - so the UI doesn't go weird - but increase the canvas width so that it scrolls

    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width ;
      canvas.height = rect.height;
      setCanvasH(canvas.height);
      setCanvasW(canvas.width);
      
    }
  };
  console.log('Use Effect Run')

  // Resizes first
  // Then draws the interface (Title and Toolbar first and then First and Last Dates and then the middle dates)
  handleResize();
  drawInterface();

  //Once drawn it adds an event listner to listen for a resize of the window
  
  window.addEventListener("resize", handleResize);

  const handleMouseover = () => {
    console.log('handle mouse fired');
  }

  // Then adds an event listener 
  
  canvasRef.current.addEventListener("mousemove", (e) => {
    console.log ('MouseMoved: '+  e.clientX)
    setMouseMovement([coords.x, coords.y])
  
  });

  canvasRef.current.addEventListener("mouseout", (e) => {
    console.log ('Mouse Out: '+  e.clientX)
    setMouseMovement([0, 0])
  });

  containerRef.current.addEventListener("scroll", (e) => {
    setScrollLocation(containerRef.current.scrollLeft)
  });
 



  return () => {
    window.removeEventListener("resize", handleResize);
   
  };
}, [canvasH, canvasW, TimeLineItem, MouseMovement, ScrollLocation]);

    return (
      <div id="TimeLineApp" className="canvas-container" ref={containerRef}>
    
    <canvas ref={canvasRef} {...props}
    onClick={(e) => {
      handleCoords((e));
      if(coords.x > (ScrollLocation+(canvasW/8.5)) && coords.x <= (ScrollLocation+(canvasW/4.5)) && coords.y > (canvasH - (canvasH *0.125))) {
        setTimeLineItem('Event');
        console.log('change')
      } else if (coords.x > ScrollLocation+(canvasW/4.5) && coords.x < ScrollLocation+(canvasW/2.9) && coords.y > (canvasH - (canvasH *0.125))){
        setTimeLineItem('Explainer');
      } else if (coords.x > ScrollLocation+(canvasW/2.9) && coords.x < ScrollLocation+(canvasW/2.2) && coords.y > (canvasH - (canvasH *0.125))){
        setTimeLineItem('Period')
      } else if (canvasRef.current) {
        if(TimeLineItem === 'Period'){
        const ctx = canvasRef.current.getContext("2d");
        ctx.strokeStyle = "#0095DD";
        ctx?.strokeRect(coords.x, coords.y, 20, 30);
      }
      }
    }}/>
    </div>
    )
  }

export default TimeLineAppCanvas