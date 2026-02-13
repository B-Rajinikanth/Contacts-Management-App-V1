// Array: collections of items enclosed in square brackets []

let fruits = ["apple", "banana", "cherry", 100, 200, 300, true, false, true,
    {name: 'Fruit Market'}
];

console.log('Fruits Array:', fruits);

console.log('Shop name: ' + fruits[9].name);


fruits.push('mango'); // adds an item to the end
console.log('After push:', fruits);

fruits.pop(); // removes the last item
console.log('After pop:', fruits);

fruits.shift(); // removes the first item
fruits.unshift('kiwi'); // adds an item to the beginning
console.log('After shift and unshift:', fruits);

let data = [12, 45, 23, 13, 10, 5, 67, 2, 34, 89, 90];
data.sort(); // sorts the array
console.log('Sorted data:', data);

data.sort((a, b)=> a - b); // sorts numerically
console.log('Numerically sorted data:', data);

data.sort((a, b)=> b - a); // sorts in descending order
console.log('Descending sorted data:', data);


let info = [...data, 400, 500, 600]; // spreading operator to create a new array
let marks = [78, 89, 90, 88];
let [math, phy, che] = marks; // destructuring

console.log('Marks: ', math, phy, che); // will be undefined as marks is not an object

let squares = data.map((item)=> item*item)
console.log('Squares of data:', squares);
console.log('Original data remains unchanged:', data);

let evenNumbers = marks.filter((item)=> item % 2 === 0);
console.log('Even numbers from marks:', evenNumbers);

let sum = marks.reduce((acc, curr)=> acc + curr, 0);
console.log('Sum of marks:', sum);