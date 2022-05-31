/**
 * Higher order functions are functions that either:
 *  a) accept a fn as an argument
 *  b) return a fn
 *  c) or both
 */

let numbers = [1, 2, 3];
numbers.map((number) => number * 2);

setTimeout(() => {
  console.log("Appears after 1s");
}, 1000);
