class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    
    }
    sayHello() {
        console.log(`hello`, i am ${this.name}`);

    }
}

const person1 = new Person('lee', 25);
const person2 = new Person('Kim', 25);
const person3 = new Person('Park', 25);

console.log(person1.name);
console.log(person2.name);
console.log(person3.name);
console.log(person1.age);

