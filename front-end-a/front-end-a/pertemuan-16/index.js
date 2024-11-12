// Asynchronous JS

//Synchronous -> single thread -> blocking
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses yg memakan waktu yg lama");
// console.log("Proses 4");

//Asynchronous JS -> multi thread -> non-blocking
//1. Parallel
// setTimeout(() => {
//   console.log("Proses 1");
// }, 5000);
// console.log("Proses 2");
// setTimeout(() => {
//   console.log("Proses 3");
// }, 3000);
// console.log("Proses 4");
//2. Concurrent
// setTimeout(() => {
//   console.log("Proses 1");
//   setTimeout(() => {
//     console.log("Proses 2");
//     setTimeout(() => {
//       console.log("Proses 3");
//       setTimeout(() => {
//         console.log("Proses 4");
//       }, 3000);
//     }, 3000);
//   }, 3000);
// }, 3000);

// Promise
// let condition = true;
// const newPromise = new Promise((resolve, reject) => {
//   if (condition) {
//     resolve("Berhasil");
//   } else {
//     reject("Gagal");
//   }
// });

//Pakai Promise
//1. then - catch
// newPromise
//   .then((result) => {
//     return result;
//   })
//   .then((result2) => {
//     console.log(result2);
//   })
//   .catch((error) => console.log(error));

//2. Async - Await
// Selalu digunakan pada fungsi

// const consumePromise = async () => {
//   try {
//     let result = await newPromise;
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// consumePromise();

//Menggunakan Promise Fetch
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// const fetchJSONPlaceholder = async () => {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let json = await response.json();
//   console.log(json);
// };

// fetchJSONPlaceholder();

//Axios
axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((result) => console.log(result.data));

// (async () => {
//   let result = await axios.get("https://jsonplaceholder.typicode.com/users");
//   result.data.forEach((item) => console.log(item.username));
// })();
