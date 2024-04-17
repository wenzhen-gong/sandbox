import "../style.css";
import bg1 from "../../assets/bg1.png";
import React, { useRef, useEffect, useState } from "react";
import { DropMovement } from "./DropMovement";
import moveCatcher from "./moveCatcher";
import { CANVASWIDTH } from "./sizeDef";
const CatchGame = () => {
  const convasRef = useRef(null);
  const startTime = Date.now();

  const [myctx, setMyctx] = useState(null);
  const [canvasWidth, setCanvasWidth] = useState(null);
  const [canvasHeight, setCanvasHeight] = useState(null);
  const [catcherX, setCatcherX] = useState(null);

  const handleMouseMove = (x) => {
    moveCatcher(myctx, x, canvasWidth, canvasHeight);
    setCatcherX(x);
  };

  useEffect(() => {
    const canvas = convasRef.current;
    canvas.style = `background-image: url(${bg1}); background-size: cover;`;

    let myctx = canvas.getContext("2d");
    setMyctx(myctx);
    const SCALE = canvas.width / canvas.height;
    canvas.width = CANVASWIDTH;
    canvas.height = canvas.width / SCALE;
    setCanvasWidth(canvas.width);
    setCanvasHeight(canvas.height);

    // const drop = () => {
    //   if (Date.now() - startTime <= 60000) {
    //     DropMovement(myctx, canvas.width, canvas.height);
    //   } else {
    //     clearInterval(intervalID);
    //   }
    // };
    // const intervalID = setInterval(drop, 1000);
        DropMovement(myctx, canvas.width, canvas.height);

  }, []);

  return (
    <div>
      <div>Placeholder</div>
      <canvas
        id="canvas"
        ref={convasRef}
        onMouseMove={(e) => {
          handleMouseMove(e.clientX);
        }}
      />
    </div>
  );
};

export default CatchGame;
