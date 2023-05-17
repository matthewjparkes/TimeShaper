export const CanvasScript = () => {
        
    const canvas = document.getElementById("TimeLineApp");
    const ctx = canvas.getContext("2d");
    const circleRadius = 10;
    const circleX = 100;

    document.addEventListener("mousemove", mouseMoveHandler, false);

    function mouseMoveHandler(e) {
        const relativeX = e.clientX - canvas.offsetLeft;
        if (relativeX > 0 && relativeX < canvas.width) {
          circleX = relativeX - 50 / 2;
        }
      }
    
    function drawCircle() {
        ctx.beginPath();
        ctx.arc(100, 50, circleRadius, 0, 2 * Math.PI)
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }


    function draw(){
        drawCircle();
    }

    var interval = setInterval(draw, 10);
}

// Read this: https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
// Also this for the future https://stackoverflow.com/questions/3523852/how-to-save-a-canvas-drawing