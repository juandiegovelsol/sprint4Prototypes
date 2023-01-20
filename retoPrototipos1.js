function Person(name, weigth, heigth) {
  (this.name = name), (this.weigth = weigth), (this.heigth = heigth);
}
Person.prototype = {
  sayHello(otherName) {
    console.log(`Hello ${otherName}, my name is ${this.name}`);
  },
  BMI() {
    const bmi = this.weigth / ((this.heigth / 100) * (this.heigth / 100));
    console.log(bmi);
  },
};
const juan = new Person("Juan", 82, 183);
console.log(juan);
juan.sayHello("Monica");
juan.BMI();
