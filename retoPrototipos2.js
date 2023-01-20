function auto() {
  this.speed = 0;
}
auto.prototype.accelerate = function (increment = 1) {
  this.speed = this.speed + increment;
};
auto.prototype.slowDown = function (decrement = 1) {
  if (this.speed - decrement >= 0) {
    this.speed = this.speed - decrement;
  } else {
    this.speed = 0;
    console.log(`Auto has already stopped, can't slow more`);
  }
};
auto.prototype.showSpeed = function () {
  console.log(`Actual car speed is: ${this.speed}`);
};
const twingo = new auto();
console.log(`Initial car speed is: ${twingo.speed}`);
twingo.accelerate(1);
twingo.accelerate(2);
twingo.showSpeed();
twingo.slowDown(2);
twingo.showSpeed();
twingo.slowDown(3);
twingo.showSpeed();
