import React, {useRef, useEffect} from 'react'

const TimeLineAppCanvas = props => {
  
    const canvasRef = useRef(null);

    const draw = (ctx, circleRadius) => {
        ctx.beginPath();
        ctx.arc(100, 50, circleRadius, 0, 2 * Math.PI)
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }

    
    document.addEventListener("mousemove", mouseMoveHandler, false);
    
    function mouseMoveHandler(e) {
          const relativeX = e.clientX - canvas.offsetLeft;
          if (relativeX > 0 && relativeX < canvas.width) {
            circleX = relativeX - 50 / 2;
          }
        }


    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let circleRadius = 10;
        let circleX = 100;

 

          draw(ctx, circleRadius);

      
      }, [draw])
    
    return <canvas ref={canvasRef} {...props}/>
  }

export default TimeLineAppCanvas