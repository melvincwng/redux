// Currying is a technique that allows us to take a function that has N arguments
// And convert it to a function has a single (1) argument
// Aka N => 1

// Before currying technique is applied
function add(a, b) {
  return a + b;
}

// After currying is applied
function add(a) {
  return function (b) {
    return a + b;
  };
}

// Final result after currying
// add(1) returns a function that takes in an argument b
// Then we invoke that returned function with b=5
add(1)(5);

// Additional stuff
// Essentially in words, this means that add2 is a fn that takes an argument 'a' then returns a function
// That returned function takes in another argument 'b' which eventually returns a + b
const add2 = (a) => (b) => a + b; // Same as (a, b) => a + b
