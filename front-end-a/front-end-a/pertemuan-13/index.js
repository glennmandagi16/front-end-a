//Rest Parameter & Spread Operator

//1. Rest Parameter

//tanpa rest parameter
const func1 = (param1, param2, param3, param4, param5) => {
  console.log(param1, param2, param3);
};

func1("A", "B", "C", "D", "E");

//dengan rest parameter
const func2 = (...params) => {
  console.log(params);
};

func2("A", "B", "C", "D", "E");

//Rest parameter harus berada di parameter terakhir
const func3 = (param1, param2, ...params) => {
  console.log(param1, param2);
  console.log(params);
};
func3("A", "B", "C", "D", "E");

// Mini Exercise
// Ubah dengan menggunakan rest parameter
const penjumlahan = (...arr) => {
  let hasil = 0;
  arr.forEach((item) => (hasil += item));
  return hasil;
};

console.log(penjumlahan(1, 2, 3, 4, 5, 6, 7));

//2. Spread Operator
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(...numbers);

// Array
//1. Saat duplikasi array
let numbers2 = [...numbers];
console.log(numbers2);

//2. Menggabungkan array
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

let numbers3 = array1.concat(array2, array3); //ES5
let numbers4 = [...array1, ...array2, ...array3]; //ES6

//Object
//1. Duplikasi object
const john = {
  fullName: "John Doe",
  age: 30,
};

const john2 = { ...john, address: "Manado" };

//2. Menggabungkan object
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

let combinedObj = { ...obj1, ...obj2 };
