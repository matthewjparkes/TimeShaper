import { useEffect, useState } from "react";


function MousePosition(global){
const [mouseCoords, setMouseCoords] = useState({
    x: 0,
    y: 0,
})

const handleCursorMovement = (e) => {
    console.log("Cursor moved");
    const rect = e.target.getBoundingClientRect();
    const offsetX = rect.left + window.pageXOffset;
    const offsetY = rect.top + window.pageYOffset;

    const containerWidth = rect.width;
    const containerHeight = rect.height;

    const newCoords = {
      x: (e.clientX - offsetX),
      y: (e.clientY - offsetY),
    };
    setMouseCoords(newCoords);
    console.log(containerHeight, containerWidth + 'container')
    console.log("New mouseCoords:", newCoords);
    console.log( 'Click Location', e.clientX, e.clientY)
    console.log( 'Canvas', newCoords.x, newCoords.y)
    console.log( e.target.getBoundingClientRect())
    console.log( 'Actual',  e.clientX);

};


useEffect(() => {
    if(global){
    window.addEventListener("mousemove", handleCursorMovement);
    console.log("Event listener added");
    }
    return () => {
    window.removeEventListener("mousemove", handleCursorMovement);
    console.log("Event listener removed");
         };
    }, [global]);
   
return [mouseCoords, handleCursorMovement];

    }

export default MousePosition;