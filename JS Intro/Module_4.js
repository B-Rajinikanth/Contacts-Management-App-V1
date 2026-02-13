console.log(document)

// text
// document.body.textContent = "<h1>Hello, World!</h1>"

// // text + tags
// document.body.innerHTML = "<h1>Hello, World!</h1>"

const body = document.body;

// 1. Create a new element
const heading = document.createElement('h1');
heading.textContent = "Heading generated from JS!";

const para = document.createElement('p');
para.textContent = "This is a paragraph generated from JS!";

const btn = document.createElement('button');
btn.textContent = "Click Me!";

// 2. Append the element to the DOM
body.appendChild(heading);
body.appendChild(para);
body.appendChild(btn);

// 3. Removing an element
setTimeout(()=>{
    para.style.fontSize = "24px";
}, 5000);

btn.onclick = function() {
    btn.textContent = "Button Clicked!";
    btn.style.backgroundColor = "lightgreen";
    btn.style.color = "black";
}
