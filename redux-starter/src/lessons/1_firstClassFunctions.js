// In Javascript, functions are first class citizens/objects - meaning 1,2,3

function sayHello() {
  return "Hello World";
}

let fn = sayHello; // 1. We can assign a function to a variable

function greet(fnMessage) {
  console.log(fnMessage());
}

greet(sayHello); // 2. We can pass a function as an argument

function sayHelloTwo() {
  return function () {
    return "Hello World 2";
  };
}

sayHelloTwo(); // 3. We can return a function
