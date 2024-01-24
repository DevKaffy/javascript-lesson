// console.log("Hello world!");
// let name = "Titi";
// console.log(name);
// name = "Abiola";
// console.log(name);
// let age = 57;
// let newAge = 13;
// let percentage = newAge / age;
// let myString = "hi";
// let ortherString = "hello";
// let backtick = `hi again`;
// let num = 31;
// let bol = true;
// let undefindedVariable;
// let emptyValue = null;
// let stringBol = "true";
// let stringNum = "2";
// console.log(myString);
// console.log(num);
// console.log(ortherString);
// console.log(backtick);
// console.log(bol);
// console.log(undefindedVariable);
// console.log(emptyValue);
// console.log(percentage);
// console.log(typeof myString);
// console.log(typeof ortherString);
// console.log(typeof backtick);
// console.log(typeof num);
// console.log(typeof bol);
// console.log(typeof stringBol);
// console.log(typeof stringNum);
// console.log(typeof undefindedVariable);
// console.log(typeof emptyValue);

// var test = "testing";
// console.log(test);
// var test = "hello";
// console.log(test);

// let myName = "Rufaidat Al-siddiq";
// myName = "Rufaidat Yakub";
// console.log(myName);
// const pi = 3.147;
// pi = 678;
// console.log(pi);

//  String Methods

let string = "Javascript";
firstLetter = string[3];
console.log(firstLetter);
console.log(string.length);
console.log(string.length - 1);
// console.log(string[lastIndex]);

console.log(string.toUpperCase());
console.log(string.toLowerCase());

let text = "Programming";
console.log(text.substring(1, 4));
console.log(text.substr(1, 4));

// let day = "30 Days of Javascript";
// console.log(day.split());
// console.log(day.split(" "));

// console.log(day.includes("days"));

let title = "javascript";
let lastIndex = title.length - 1;
console.log(title.charAt(0));
console.log(title.indexOf("j"));
console.log(day.replace("days", "Months"));

// Assignment Operators
let numOne = 5;
let numTwo = 2;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
let powerOf = numOne ** numTwo;
console.log(sum, diff, mult, remainder, powerOf);

//  Comparison Operators
let first = 3;
let second = 2;
console.log(first > second);
console.log(first < second);
console.log(first == second);
console.log(first === second);
console.log(first !== second);
console.log(first <= second);

console.log("3" == 3);
console.log("3" === 3);

// console.log()
console.log(1 == true);
console.log(0 == true);
console.log(0 == false);
console.log("0" === false);

// Logical Operators
let check = 4 > 3 && 10 > 5;
let see = 4 > 3 && 5 > 10;
let numThree = 4 < 3 && 5 < 4;
//  true and true = true
// true and false = false
// false and false = false
console.log(check, see, numThree);

let compare = 4 > 3 || 10 > 5;
let value = 4 > 3 || 10 < 5;
let answer = 4 < 3 || 10 < 5;

// true or false = true;
// true or true = true;
// false or false = false;
console.log(compare, value, answer);

// Negation Operators
let negate = !(4 < 3);
let result = !true;
console.log(result, negate);

// Increment and Decrement Operators
let count = 20;
console.log(++count);
console.log(count++);
let num = 20;
num--;
// console.log(--num);
// console.log(num--);
console.log(num);
