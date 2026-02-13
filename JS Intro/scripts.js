

function changeColor(bgColor) {
    document.getElementById("message").style.color = bgColor;
}

function changeBgColor() {
    let bgColor = prompt("Enter a background color:");
    if(bgColor) {
        document.body.style.backgroundColor = bgColor;
    } else {
        document.body.style.backgroundColor = "lightcyan";
    }
}


// Number ---> integer, float, octal, hexadecimal, binary, NaN, Infinity

// console.log(10/0);  
// console.log("hello"/2);  

// String ---> Sequence of symbols enclosed in quotationa marks
let str1 = 'Hello';
let str2 = "World";
let str3 = `Hello, ${str2}!`;

let fisrtName = "John";
let lastName = "Doe";

// console.log('Hello, ' + fisrtName + ' ' + lastName + '!');
// console.log(`Hello, ${fisrtName} ${lastName}!`);

// Boolean ---> true, false
// Undefined ---> variable declared but not assigned
// let data
// console.log(data); // undefined
// console.log(typeof data); // "undefined"

// Null ---> intentional absence of any object value

// 1. alert -----> Pop-up box with given message and a button 'OK'
// console.log(alert("Welcome to JavaScript!"))

// 2. confirm
// console.log('Return value from comfirm: ' + confirm('Do you want proceed?'))

// 3. prompt
// let studentName = prompt('Enter your name:', 'Guest');
// console.log('Student name is: ' + studentName)

// 4. print
// print()


console.log("2" === 2)
