import e1 from "../../assets/e1.png";
import e2 from "../../assets/e2.png";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";
import { CATCHERSIZE, DROPSIZE } from "./sizeDef";

export function DropMovement(ctx, width, height) {

  let myImg = new Image();
  const imgCol = [e1, e2, p1, p2, p3, p4];
  myImg.src = imgCol[Math.floor(Math.random() * imgCol.length)];

  let data = new Drop(
    Math.floor(Math.random() * (width - DROPSIZE)),
    -DROPSIZE,
    DROPSIZE,
    myImg,
  );

  data.draw(ctx, width, height);
}

class Drop {
  constructor(x, y, size, img) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.img = img;
  }
  draw(ctx, width, height) {
    
    ctx.clearRect(this.x, this.y - 1, this.size, this.size);
    ctx.drawImage(this.img, this.x, this.y, this.size, this.size);

    this.y++;
    if (this.y <= height) {
      if (
        this.y >= height - DROPSIZE - CATCHERSIZE &&
        this.y <= height - CATCHERSIZE &&
        this.x >= this.catcherX - DROPSIZE &&
        this.x <= this.catcherX + CATCHERSIZE
      ) {
        console.log("catch it");
      } else {
        requestAnimationFrame(() => {
          this.draw(ctx, width, height);
        });
      }
    }
  }
}
