
class Drop {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw(a) {
    console.log(a)
  }
}

const d = new Drop(1,2);

d.draw(3)