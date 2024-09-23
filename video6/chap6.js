// Numbers

console.log(`Hello world from HTML`.toUpperCase());
let a = 5;
let b = 6;
let c = 6.9;
let d = `5`;

console.log(a + b);
console.log(a + d);
console.log(a - d);
console.log(a * d);
console.log(a / d);

console.log(a === d, `a: `, typeof a, `d: `, typeof d);

let x = 3.14;
let y = 3;
console.log(`x: `,x, `y: `,y);

// Convert strings to numbers
// Cach 1
let e = Number(d);

// Cach 2
// let e = +d;
console.log(`e value:`, e, `typeof: `, typeof e);

console.log(a === e, `a: `, typeof a, `e: `, typeof e)
