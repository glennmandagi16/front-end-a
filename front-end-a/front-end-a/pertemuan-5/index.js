//JavaScript Function

//Cara 1. Function Declaration
// function greetings1() {
//   console.log("Hello World");
// }

// greetings1(); //Call / Execute Function

// //Cara 2. Function expression
// let greetings2 = function () {
//   console.log("Hello World");
// };

// greetings2();

//Parameter & Argument (Input) & Return (Output)

// //Cara 1.
// //                  parameter
// function greetings1(fullName) {
//   return "Hello " + fullName;
// }
// //                       argument
// let output1 = greetings1("John Doe");
// console.log(output1);

// //Cara 2
// let greetings2 = function (fullName) {
//   return "Hello " + fullName;
// };
// let output2 = greetings2("John Doe");
// console.log(output2);

//Function Hoisting
// //Cara 1.
// //                       argument
// let output1 = greetings1("John Doe");
// console.log(output1);

// //                  parameter
// function greetings1(fullName) {
//   return "Hello " + fullName;
// }

// //Cara 2 //ERROR
// let output2 = greetings2("John Doe");
// console.log(output2);

// let greetings2 = function (fullName) {
//   return "Hello " + fullName;
// };

//Global Scope & Local Scope

let x = 10; //Global

function foo() {
  let y = 20; //Local Function
  console.log(x); //10
  console.log(y); //20
  if (y > x) {
    let z = 30; //Local block
    console.log(z); //30
  }
  //   console.log(z); //ERROR
}

console.log(x); //10
// console.log(y); //ERROR

foo();
