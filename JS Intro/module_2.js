// Module 2:
// basic functions, Objects, basic object methods, 
// ES6+ Features - Arrow functions, Promises(async / await ), 
// Spreading, destructuring, map, filter, reduce

// Working with functions:
// 1. Uisng function keyword
function sayHello(collegeName) {
    console.log('Hello from ' + collegeName);
}

// 2. Using function reference
let greet = function () {
    console.log('Greetings from function reference');
}

let another = sayHello

// 3. Using arrow functions / anonymous functions
let anotherFunction = (title) => { 
    console.log('Hello from arrow function' + title);
}


// sayHello('SUH')
// greet();
// another('ABC College');
// anotherFunction('SUH');



let student = { 
    name: 'Ajay', branch: 'CSE AIML', yos: 2025,
    isPassed: true,
    greetStudent: function() {
        console.log('Hello ' + this.name + ', Welcome to ' + this.branch);
    }
}

student.greetStudent();