import { useEffect, useState } from "react";


function MousePosition(global){
const [mouseCoords, setMouseCoords] = useState({
    x: 0,
    y: 0,
})

const handleCursorMovement = (e) => {
    let rect = e.target.getBoundingClientRect();
    setMouseCoords({
        x: ((e.clientX)- (rect.left)),
        y: (e.clientY - rect.top) 
    });
    console.log( 'Canvas',  mouseCoords.x, mouseCoords.y)
    console.log(e.target.getBoundingClientRect())
    console.log( 'Actual',  e.clientX);
};


useEffect(() => {
    if(global){
    window.addEventListener("mousemove", handleCursorMovement);
    }
    return () => {
    window.removeEventListener("mousemove", handleCursorMovement);
         };
    }, [global]);
   
return [mouseCoords, handleCursorMovement];

    }

export default MousePosition;