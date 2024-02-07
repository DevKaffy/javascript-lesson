// import web_tech from "./web_tech.js";
// web_tech.includes("javascript");
// import { countries } from "./countries.js";
// countries.includes("Ethiopia");
// console.log(countries);
// Ternary Operator
// let isAMan = false;
// isAMan ? console.log("Yes, he is a man") : "No, he is not a man";

// Windows Operator

// let greetings = "Hello!";
// alert(`${greetings}`);

// let name = prompt("Enter your name");
// console.log(`${name}`);

// let firstNumber = prompt("Enter number");
// let secondNumber = prompt("Enter number");
// let output = Number(firstNumber) + Number(secondNumber);
// console.log(output);

// const agree = confirm("Are you sure you want to subscribe?");
// console.log(agree);

// let numBer = "I love Javascript and I believe you also love javascript";
// let res = /javascript/gi;
// console.log(numBer.match(res));

// const sentence =
//   "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
// let inequalities = /[%$@#;&?!]/g;
// console.log(sentence.replace(inequalities, ""));

// let extract =
//   "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
// let extractNum = /\d+/gi;
// console.log(extractNum);
// console.log(extract.match(extractNum));
// let a = extract.match(extractNum);
// console.log(a);
// let ai = +a[0] * 12;
// let bi = +a[2] * 12;
// let output = ai + bi + 10000;
// console.log(ai);
// console.log(bi);
// console.log(output);

// Ternary Operator
// let isAMan = false;
// isAMan ? console.log("Yes, he is a man") : console.log("No, he is not a man");

// let isAMan = false;
// if (isAMan) {
//   console.log("Yes, he is a man");
// } else {
//   console.log("No, he is not a man");
// }

// let b = 5;
// if (b < 5) {
//   console.log("Not correct");
// } else if (b == 5) {
//   console.log("It is correct");
// } else if (b > 5) {
//   console.log("It is wrong");
// } else {
//   console.log("Try again");
// }

// let today = prompt("What day is today");
// let day = today.toLowerCase();
// switch (day) {
//   case "monday":
//     console.log("Today is Monday");
//     break;
//   case "tuesday":
//     console.log("Today is Tuesday");
//     break;
//   case "Wednesday":
//     console.log("Today is Wednesday");
//     break;
//   case "thursday":
//     console.log("Today is Thursday");
//     break;
//   case "friday":
//     console.log("Today is Friday");
//     break;
//   default:
//     console.log("It is not a day");
// }

// Loop

// for (let i = 0; i < 5; i++) {
//   console.log(`${i} * ${i} = ${i * i}`);
// }

// let n = 0;
// for (let x = 0; x < 3; x++) {
//   console.log((n += x));
// }

// let i = 0;
// while (i < 3) {
//   console.log(i);
//   ++i;
// }

// for (let a = 5; a >= 0; a--) {
//   console.log(a);
// }

// let ab = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// for (let a = 5; a >= 0; a--) {
//   console.log(a);
// }

// for (let b = 0; b <= 5; b++) {
//   console.log(b);
// }
