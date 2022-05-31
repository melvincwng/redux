// Immer.js (npm i immer)

import { produce } from "immer"; // importing a produce function

let book = { title: "Harry Potter" };

// produce function has 2 arguments --> the initial state of the object, a function that specifies the mutation of that object
// book object (original) won't get modified
// However, the changes will be reflected in draftBook (proxy object)
// The produce() function basically takes the original object, copies it into a proxy object, and makes the changes in the proxy object without modifying the original object
// produce() will return the updated proxy object
function publish(book) {
  return produce(book, (draftBook) => {
    draftBook.isPublished = true;
  });
}

let updated = publish(book);
console.log(book); // should return { title: "Harry Potter" };
console.log(updated); // should return { title: "Harry Potter", isPublished: true };
