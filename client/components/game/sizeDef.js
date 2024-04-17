const CANVASWIDTH = window.innerWidth;
const DROPSIZE = CANVASWIDTH / 15;
const CATCHERSIZE = CANVASWIDTH / 15;
class Drop {
  constructor(x, y, size, img) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.img = img;
  }
}
export {CANVASWIDTH, DROPSIZE, CATCHERSIZE, Drop}