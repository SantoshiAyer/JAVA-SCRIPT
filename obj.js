
// In JavaScript, an "object" is a fundamental data type that represents a collection of key-value pairs, where keys are strings (or symbols) and values can be any data type, including other objects.

// There are several ways to create objects in JavaScript:

// Object Literals: The simplest way to create an object is by using object literals, which is a comma-separated list of key-value pairs enclosed within curly braces {}.


let person = {
    name: "John",
    age: 30,
    profession: "Developer"
};
// Using the new keyword with Object Constructor: You can create an object using the new keyword with the Object constructor.


let car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2022;
// Using Constructor Functions: You can define a constructor function and create objects using the new keyword with that function.


function Person(name, age) {
    this.name = name;
    this.age = age;
}

let person1 = new Person("Alice", 25);
let person2 = new Person("Bob", 30);
// Using ES6 Classes: With the introduction of ES6, JavaScript supports class syntax for creating objects.
// javascript

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
}

let dog = new Animal("Buddy", "Dog");
// Objects in JavaScript can have properties and methods. Properties are variables attached to the object, and methods are functions attached to the object that can perform actions or computations.



// In JavaScript, an "object" is a fundamental data type that represents a collection of key-value pairs, where keys are strings (or symbols) and values can be any data type, including other objects.

// There are several ways to create objects in JavaScript:

// Object Literals: The simplest way to create an object is by using object literals, which is a comma-separated list of key-value pairs enclosed within curly braces {}.
// javascript

let person = {
    name: "John",
    age: 30,
    profession: "Developer"
};
// Using the new keyword with Object Constructor: You can create an object using the new keyword with the Object constructor.

let car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2022;
// Using Constructor Functions: You can define a constructor function and create objects using the new keyword with that function.


function Person(name, age) {
    this.name = name;
    this.age = age;
}

let person1 = new Person("Alice", 25);
let person2 = new Person("Bob", 30);
// Using ES6 Classes: With the introduction of ES6, JavaScript supports class syntax for creating objects.

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
}

let dog = new Animal("Buddy", "Dog");
// Objects in JavaScript can have properties and methods. Properties are variables attached to the object, and methods are functions attached to the object that can perform actions or computations.


