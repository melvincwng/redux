// Using libraries to enforce immutability
// Examples of libraries: Immutable, Immer, Mori
// We are using Immutable.js here (npm install immutable)

import { Map } from "immutable"; // We are importing the Map class from the library

let book = Map({ title: "Harry Potter " }); // This gives you a Map object/Hashmap/Javascript Object which is immutable, but there's an issue...
// console.log(book.title) // Does not work
console.log(book.get("title")); // Works
console.log(book.toJS()); // Gives us the JS object { title: "Harry Potter" }

// To add new key value pairs using Immutable.js, use the .set() method
// This is going to return a new book object, and not mutate or modify the original book object
function publish(book) {
  return book.set("isPublished", true);
}

book = publish(book);
console.log(book.toJS()); // should give us { title: "Harry Potter", isPublished: true }

// Immutable.js not very intuitive --> a lot of getters and setters function, hence the preference is to use Immer.js
