import Entity from "./entity";

console.log("Hello Webpack!");
let a = 20; {
    let a = 40;
    console.log(a);
}

console.log(a);

const arr = [1, 2, 3];

arr.push(4);

class Hobbit extends Entity {
    constructor(name, height, age) {
        super(name, height);
    }

    greet() {
        super.greet();
        console.log(`My age is ${this.age}`);
    }
}

let merry = new Entity("Merry", 4.6, 23);
merry.greet();