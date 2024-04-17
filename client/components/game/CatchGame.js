import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import bg1 from "../../assets/bg1.png";
import bg2 from "../../assets/bg2.png";
import e1 from "../../assets/e1.png";
import e2 from "../../assets/e2.png";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";

import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateScore, openSendScoreModal } from "./utils/catchSlice";
import moveCatcher from "./moveCatcher";
import { DisplayScore } from "./DisplayScore";
import SendScoreModal from "./SendScoreModal";
import { CANVASWIDTH, CATCHERSIZE, DROPSIZE, Drop } from "./sizeDef";

const CatchGame = () => {
  const dispatch = useDispatch();

  const convasRef = useRef(null);
  const startTime = Date.now();

  const [myctx, setMyctx] = useState(null);
  const [canvasWidth, setCanvasWidth] = useState(null);
  const [canvasHeight, setCanvasHeight] = useState(null);

  let catcherX = useRef(0);

  const handleMouseMove = (x) => {
    moveCatcher(myctx, x, canvasWidth, canvasHeight);
    catcherX.current = x;
  };

  useEffect(() => {
    const canvas = convasRef.current;
    const bgCol = [bg1, bg2]
    canvas.style = `background-image: url(${bgCol[Math.floor(Math.random() * bgCol.length)]}); background-size: cover;`;

    let myctx = canvas.getContext("2d");
    setMyctx(myctx);
    const SCALE = canvas.width / canvas.height;
    canvas.width = CANVASWIDTH;
    canvas.height = canvas.width / SCALE;
    setCanvasWidth(canvas.width);
    setCanvasHeight(canvas.height);

    const render = (drop) => {
      // trying to randomize speed of drops, seems to cause some unexpected problems
      const speed = Math.floor(Math.random() * 5 + 1);
      // console.log(speed)
      myctx.clearRect(drop.x, drop.y - 2, drop.size, drop.size);
      myctx.drawImage(drop.img, drop.x, drop.y, drop.size, drop.size);
      
      drop.y += 2;
      if (drop.y <= canvas.height) {
        if (
          drop.y >= canvas.height - DROPSIZE - CATCHERSIZE &&
          drop.y <= canvas.height - CATCHERSIZE &&
          drop.x >= catcherX.current - DROPSIZE &&
          drop.x <= catcherX.current + CATCHERSIZE
        ) {
          myctx.clearRect(drop.x, drop.y, drop.size, drop.size);
          if(drop.num === 0 || drop.num === 1){
            dispatch(updateScore(-100));
          }
          else{
            dispatch(updateScore(50));
          }
        } else {
          requestAnimationFrame(() => render(drop));
        }
      }
    };

    const drop = () => {
      if (Date.now() - startTime <= 60000) {
        let myImg = new Image();
        const imgCol = [e1, e2, p1, p2, p3, p4];
        const random = Math.floor(Math.random() * imgCol.length)
        myImg.src = imgCol[random];

        let myDrop = new Drop(
          Math.floor(Math.random() * (canvas.width - DROPSIZE)),
          -DROPSIZE,
          DROPSIZE,
          myImg,
          random
        );
        render(myDrop);
      } else {
        clearInterval(intervalID);
        dispatch(openSendScoreModal());
      }
    };
    const intervalID = setInterval(drop, 1000);
  }, []);

  return (
    <div>
      <DisplayScore />
      <canvas
        id="canvas"
        ref={convasRef}
        onMouseMove={(e) => {
          handleMouseMove(e.clientX);
        }}
      />
      <SendScoreModal />
    </div>

  );
};

export default CatchGame;
