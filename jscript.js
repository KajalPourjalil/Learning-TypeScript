function addNumbers(a, b) {
    return a + b;
}
//only put in numbers!
console.log(addNumbers("6", "5"))

// JavaScript Types....
// Primitives:
// Boolean : typeof instance === "boolean"
// Number : typeof instance === "number"
// String : typeof instance === "string"
// BigInt : typeof instance === "bigint"
// Symbol : typeof instance === "symbol"
// undefined : typeof instance === "undefined"


// Structural Types:
// Object : typeof instance === "object"
// Function : typeof instance === "function"

// Structural Root Primitive:
// null : typeof instance === "object"




//using typeof
const button = document.querySelector('.button')
const firstInput = document.querySelector('#first-input')
const secondInput = document.querySelector('#second-input')
const screen = document.querySelector('.screen')

function addNumbers(a, b) {
    console.log(a + b)
    screen.innerHTML = a + b
}

button.addEventListener('click', () => addNumbers(firstInput.value, secondInput.value))