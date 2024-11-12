// String literals, Arrow Function &
// Default Parameter

// 1. String Literals
let fullName = "John Doe";
let age = 30;
let address = "Manado";

// Halo nama saya John Doe, umur saya 33 tahun
// dan saya tinggal di Manado

let kalimat =
  "Halo nama saya " +
  fullName +
  ", umur saya " +
  age +
  " tahun dan saya tinggal di " +
  address;

console.log(kalimat);

let kalimat2 = `Halo nama saya ${fullName}, umur saya ${age} tahun dan saya tinggal di ${address}`;
console.log(kalimat2);

//2. Arrow Function

function sayGreetings(fullName) {
  return `Hello my name is ${fullName}`;
}

console.log(sayGreetings("John Doe"));

const sayGreetings2 = (fullName) => `Hello my name is ${fullName}`;

console.log(sayGreetings2("John Doe"));

// Arrow function pada IIFE
let output = (() => "Hello")();
console.log(output);

// Arrow function pada callback
let numbers = [1, 2, 3, 4, 5];
let output2 = numbers.map((item) => item);
console.log(output2);

// 3. Default parameter

const sayGreetings3 = (fullName, age, address) => {
  if (fullName === undefined) {
    fullName = "John Doe";
  }
  if (age === undefined) {
    age = 30;
  }
  if (address === undefined) {
    address = "Manado";
  }
  console.log(
    `Hallo nama saya ${fullName}, umur saya ${age} tahun dan saya tinggal di ${address}`
  );
};

sayGreetings3("Stenly", 35, "Airmadidi");

const sayGreetings4 = (fullName = "John Doe", age = 30, address = ) => {
  console.log(
    `Hallo nama saya ${fullName}, umur saya ${age} tahun dan saya tinggal di ${address}`
  );
};
