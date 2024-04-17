const CANVASWIDTH = window.innerWidth;
const DROPSIZE = CANVASWIDTH / 15;
const CATCHERSIZE = CANVASWIDTH / 15;
class Drop {
  constructor(x, y, size, img, num) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.img = img;
    this.num = num;
  }
}
export {CANVASWIDTH, DROPSIZE, CATCHERSIZE, Drop}