// Cannot read properties of undefined (reading 'trim') in JS

// EXAMPLE 1 - Use the logical OR (||) operator to provide a fallback

const myVar = undefined;

const str = myVar || ''; // 👉️ ""
console.log(str);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using the ternary operator

// const str = undefined;

// const result1 = typeof str === 'string' ? str.trim() : '';
// console.log(result1); // 👉️ ""

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using the optional chaining (?.) operator

// const str = undefined;

// const result2 = str?.trim() || '';
// console.log(result2); // 👉️ ""

// ------------------------------------------------------------------

// // EXAMPLE 4 - Check if the value is a string before calling `trim()`

// const str = undefined;

// if (typeof str === '') {
//   const result3 = str.trim();
// } else {
//   console.log('str is not a string');
// }

// ------------------------------------------------------------------

// // EXAMPLE 5 - Provide a fallback value in place

// const str = undefined;

// const result4 = (str || '').trim();
// console.log(result4); // 👉️ ""

// ------------------------------------------------------------------

// // EXAMPLE 6 - Solve the error when working with arrays

// const arr = [];

// const result = typeof arr?.[0] === 'string' ? arr[0].trim() : '';
// console.log(result); // 👉️ ""

// ------------------------------------------------------------------

// // EXAMPLE 7 - Solve the error when working with classes

// class Person {
//   // ✅ Initialize to an empty string
//   last = '';

//   // ✅ Initialize from parameters
//   constructor(first) {
//     this.first = first;
//   }

//   trimFirst() {
//     return this.first.trim();
//   }

//   trimLast() {
//     return this.last.trim();
//   }
// }

// const p1 = new Person(' John   ');
// p1.trimFirst();
// p1.trimLast();
