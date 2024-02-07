{
  let x = "Asabeneh";
  console.log(x);
}

function letAsabeneh() {
  let a = "Javascript";
  console.log(a);
}
letAsabeneh();

let day = "Wednesday";
function letDay() {
  console.log(day);
}
letDay();

let g = "Javascript";
let h = "10";
function letsLearnScope() {
  let name = "bolu";
  console.log(name);
  console.log(g, h);
  if (true) {
    let a = "html";
    let b = "css";
    console.log(g, h);
  }
  console.log(name);
}
console.log(g, h);
letsLearnScope();

// Object
const a = {};
const person = {
  firstName: "Mariam",
  lastName: "Bukola",
  age: 20,
  skills: ["html", "css", "javascript"],
  city: "Ilorin",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(person.fullName());
// person.firstName = "Mariam";
// person["lastName"] = "Bukola";
console.log(person);

let copyPerson = Object.assign({}, person);
// console.log(copyPerson);
copyPerson.skills.push("React");
copyPerson.skills.pop();
copyPerson.address = "13, GRA";
console.log(copyPerson);

const keys = Object.keys(copyPerson);
console.log(keys);
const values = Object.values(copyPerson);
console.log(values);
const entries = Object.entries(person);
console.log(entries);
console.log(copyPerson.firstName);
console.log(copyPerson["firstName"]);

console.log(copyPerson.hasOwnProperty("middleName"));
console.log(copyPerson.hasOwnProperty("Mariam"));

const dog = {};
console.log(dog);
dog.name = "bingo";
dog.breed = "caucasian";
dog.getDogInfo = function () {
  return `${this.name} ${this.breed} ${this.breed}`;
};
console.log(dog.getDogInfo());

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// Find the person who has many skills in the users object.

function letMostSkills() {
  let mostSkills = "";
  for (let i in users) {
    console.log([i]);
    if (users[i].skills.length > mostSkills.length) {
      console.log([i].skills);
      mostSkills = i;
    }
  }
  return mostSkills;
}
console.log(letMostSkills());
