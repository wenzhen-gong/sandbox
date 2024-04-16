import "../style.css";
import bg1 from "../../assets/bg1.png";
import e1 from "../../assets/e1.png";
import React, { useRef, useEffect, useState } from "react";
import data from "./data";
import { DropMovement } from "./DropMovement";
import moveCatcher from "./moveCatcher";

const CatchGame = () => {
  const convasRef = useRef(null);
  const startTime = Date.now();

  const [myctx, setMyctx] = useState(null);
  const [canvasWidth, setCanvasWidth] = useState(null);
  const [canvasHeight, setCanvasHeight] = useState(null);

  const handleMouseMove = (x) => {
    moveCatcher(myctx, x, canvasWidth, canvasHeight);
  };
  useEffect(() => {
    const canvas = convasRef.current;
    canvas.style = `background-image: url(${bg1}); background-size: cover;`;

    let myctx = canvas.getContext("2d");
    setMyctx(myctx);
    const SCALE = canvas.width / canvas.height;
    canvas.width = window.innerWidth;
    canvas.height = canvas.width / SCALE;
    setCanvasWidth(canvas.width);
    setCanvasHeight(canvas.height);

    const drop = () => {
      if (Date.now() - startTime <= 60000) {
        DropMovement(myctx, canvas.width, canvas.height);
      } else {
        clearInterval(intervalID);
      }
    };
    const intervalID = setInterval(drop, 1000);
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
