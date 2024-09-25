// Object

console.log(`Hello world from HTML`);
let a = {};
let b = `David`;

//key: value
let obj = {
    name: 'David',
    'address': `Ha Noi`,
    email: `David@gmail.com`,
    a: function () {
        console.log(`Hello world`)
        return '';
    }

};
JSON
"{name: 'David', address: 'Ha Noi', email: 'David@gmail.com'}"

console.log(`type of a:`, typeof a, `type of b:`, typeof b);
console.log(obj);
console.log(`What is your name?`, `My name is:`, obj.name);
console.log(`What is your address?`, `My address is:`, obj['address']);



let c = 'name';
let d = 'address';
// Truyền động vào khi chưa biết value key của nó là gì
obj[c] = 'Harry';
obj.address = 'HCM';
console.log(`What is your name?`, `My name is:`, obj.name);
console.log(`What is your name?`, `My name is:`, obj);