import './TimeLineApp.css'

function TimeLineApp() {


    const CanvasScript = () => {
        const canvas = document.getElementById("TimeLineApp");
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.rect(20, 40, 50, 50);
        ctx.fillStyle = "#FF0000";
        ctx.fill();
        ctx.closePath();
    }
    return(
    <div>
        <canvas id='TimeLineApp'></canvas>
        <script>
            {CanvasScript()}
        </script>
    </div>
    )
}

export default TimeLineApp