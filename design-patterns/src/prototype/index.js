export class Dog {
    constructor(name) {
        this.name = name;
    }
    bark() {
        console.log('woof');
    }
}

class SuperDog extends Dog {
    constructor(name) {
        super(name)
    }
    fly() {
        console.log('fly');
    }
}
Dog.prototype.eat = () => console.log('eating');

const dog = new Dog('darcy');
const dog2 = new SuperDog('darcy2')
console.log(dog);
console.log(dog2);
