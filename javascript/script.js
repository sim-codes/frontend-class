// Variables
// Data Types - string, int, float, boolean, null, undefined, symbol
let age = 30;
const rating = 4.5;
const isCool = true;

age = 31;
console.log(age);
console.log(rating);

// DOM - Document Object Model


// Functions    
// - modulatiry
// - reusability
// - cleaner code
// - easier to debug
// - faster development
const user = prompt('What is your name?');
function greet(name) {
    alert('Hello ' + name);
}

// Operators
// Conditionals
// Loops
// Arrays
// Objects
// Events

const btn = document.querySelector('#btn');
const txt = document.querySelector('.txt');
const h1 = document.querySelector('h1');

let count = 0;

btn.addEventListener('click', (e) => {
    txt.innerHTML = 'You just clicked the button';
    txt.style.color = 'red';
    count++;
    h1.innerHTML = count;
});

window.onload = greet(user);