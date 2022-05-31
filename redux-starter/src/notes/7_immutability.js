/**
 * Immutability is the concept in which that once an object is created, it cannot be changed
 * If you wish to change that object, first you need to make a copy of that object and then change that copy instead
 * A pure functional programming language's various data types (e.g strings/objects/arrays) cannot be changed
 * In JS, strings are immutable. While arrays and objects are mutable. Hence this is why JS is not a pure functional programming language
 * TLDR: When using redux, you should not mutate data (see example below)!
 */

// Bad example: Should not do this in redux --> mutating the object directly (no good)
const person = { name: "Sally" };
person.name = "Tim";

// Good example: Make a copy of that original object, and make changes there instead
// Copy the contents (key/value pairs) of personTwo object into the empty {}
// 3rd argument, we can i) make changes there or ii) add new key/value pairs in the copied object
// Must change webpack.config.js's entry point to 7_immutability.js to see changes in console
const personTwo = { name: "Jon" };
const updatedPersonTwo = Object.assign({}, personTwo, { name: "Bob", age: 18 });
console.log(updatedPersonTwo);

// Good example 2 (better): Use spread operator '...' to copy all the key/values pairs of one object into another
// Then we can i) make changes - e.g. edit existing key/value pairs or ii) add additional key/value pairs as well in the copied object
// previous Jon name will be overwritten with Bob (line 25)
const personThree = { name: "Jon" };
const updatedPersonThree = { ...personThree, name: "Bob" };

// Take note both methods ONLY create a SHALLOW COPY
// Since updatedPersonFour is only a SHALLOW COPY --> both the shallow copy and original copy's city will be updated (line 39)
// This happens because both the original copy (personFour) and shallow copy (updatedPersonFour) have the SAME address object in memory
// Hence, if you change the address through one reference, the other copy's address also gets updated
const personFour = {
  name: "John",
  address: {
    country: "USA",
    city: "San Francisco",
  },
};
const updatedPersonFour = { ...personFour, name: "Bob" };
updatedPersonFour.address.city = "New York";
console.log(updatedPersonFour);

// To solve the issue above, we need to make a DEEP COPY
// Basically in the copy object, the address object should not be the same one as the original object's address
// But notice, this solution here is very verbose...and hard to read. Not to worry, we have libraries for this!
const personFive = {
  name: "John",
  address: {
    country: "USA",
    city: "San Francisco",
  },
};
const updatedPersonFive = {
  ...personFive,
  address: {
    ...personFive.address,
    city: "New York",
  },
  name: "Bob",
};
