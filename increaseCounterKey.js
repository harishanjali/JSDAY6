let increaseCounter = (initial = 1) => {
  return initial + 1;
};
// let initial = 1;
class A {
  constructor(counter) {
    this.counter = counter;
  }
  increaseCounter() {
    this.counter++;
    return this.counter;
  }
}

let mycls = new A(0);

// console.log();
// console.log(mycls.increaseCounter());
// console.log(mycls.increaseCounter());

// let initial = 1;
let obj = {
  id: 1,
  name: 'harish',
  age: 23,
  city: 'ananthapur',
  counter: increaseCounter(),
};

console.log(obj.counter);
console.log(obj.counter);
