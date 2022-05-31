// Example of code that works (but is not functional programming)
let input = "  JavaScript  ";
let output = "<div>" + input.trim() + "</div>";

// Functional programming example
// Create two fns --> one that trims, the other wraps the text in a div
const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;
const toLowerCase = (str) => str.toLowerCase();

// This is called functional composition in functional programming
// Functional programming is all about using functions that takes an input and returns an output. They don't mutate or change data.
// But the issue here is that it's difficult to read... need to read from right to left (trim input, convert to lowercase, then wrapInDiv)
// Also another issue is that if you do more complex functions, a lot of parenthesis, makes code harder to read and maintain as well
// This will be addressed in 4_lodash.js
const result = wrapInDiv(toLowerCase(trim(input)));
