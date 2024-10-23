//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. It’s a common pattern used to create a new scope, avoiding polluting the global scope and encapsulating code.
//syntax
//(function() {
    // Your code here
//})();

//example
(function() {
    var message = "Hello, World!";
    console.log(message);
})();

// This will not work, as `message` is not accessible outside the IIFE
// console.log(message); // Uncaught ReferenceError: message is not defined

(function(name) {
    console.log("Hello, " + name + "!");
})("Alice"); // Outputs: Hello, Alice!

//you can use arrow function to create an IIFE
(() => {
    console.log("This is an IIFE using an arrow function!");
})();

