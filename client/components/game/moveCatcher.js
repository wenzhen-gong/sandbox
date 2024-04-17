import boat from "../../assets/boat.png";
import { CATCHERSIZE } from "./sizeDef";

const moveCatcher = (ctx, catcherX, width, height) => {
  let myImg = new Image();
  myImg.src = boat;
  ctx.clearRect(0, height - CATCHERSIZE, width, height - CATCHERSIZE);

  ctx.drawImage(
    myImg,
    catcherX,
    height - CATCHERSIZE,
    CATCHERSIZE,
    CATCHERSIZE
  );
};

export default moveCatcher;
