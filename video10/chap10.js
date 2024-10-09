// So sanh ==, ===, Empty, null, undefined

console.log(`Hello world from HTML`);

let a = 5; // x <- y
let b = '5';

console.log(`compare a, b: `, `a = `, a, `b = `, b, `result = `, a === b);
// === : type, value
// == : value

let c;
console.log(`check var c: `, c); // undefined
let d = {};
console.log(`check var d: `, d); // empty
let e = null;
console.log(`check var e: `, e); // null (da co trong bo nho may tinh) 

/*
let a = `070-123123-124125-929829`;
a = a.replace(/-/g, '');

console.log(`string: ${a}`);

const phoneNumberRegex = /^0[0-9]{9}$/;
console.log(phoneNumberRegex.test('0123456789'));
console.log(phoneNumberRegex.test('012345678'));

console.log('070-1234-1234'.match(/-\d+/));
*/

