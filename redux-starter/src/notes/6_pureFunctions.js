// A function is pure, if every time we call it with the same argument, it always gives us the same results

// Not a pure function
function myFn(number) {
  return number * Math.random();
}

// Pure funciton
function myFn(number) {
  return number * 2;
}

/**
 * Hence, in pure functions, there are:
 * 1) No random values
 * 2) No current date/time
 * 3) No global state (DOM, files, db etc) --> because if we change any of those elements, then our function won't be pure
 * 4) No mutation of parameters
 */

// More examples - particularly for point 3 global state
// Global variable minAge
// The issue is this global variable can be changed in the future, which results in a diff result being returned from the fn
// Hence this function below is impure
let minAge = 18;
function isEligible(age) {
  return age > minAge;
}

// To make the above function pure, you need to specify whatever it needs in the parameters list, i.e.
// Like that, every time you call that function with the same arguments, it will always return the same result
function isEligiblePureFn(age, minAge) {
  return age > minAge;
}

// Pure functions are:
// 1) Self-documenting (whatever it needs are there),
// 2) Easily testable,
// 3) Concurrency can happen (these pure functions can be run in parallel - more than 1 fn can run at anytime),
// 4) Cacheable --> see e.g. below

function addTwoNumbers(a, b) {
  return a + b;
}

// We know this pure function will ALWAYS return the value 3 --> hence, we can store that value 3 in cache for retrieval/usage in the future
addTwoNumbers(1, 2);
