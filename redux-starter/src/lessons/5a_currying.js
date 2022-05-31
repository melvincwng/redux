// 1. Currying is a powerful functional programming technique
// 2.  Using the code from previous lesson 4_lodash.js

import { compose, pipe } from "lodash/fp";

let input = "  JavaScript  ";
let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`; // 3. Line 10 & 11 very similar actually --> possible to reduce these two lines into 1 line
const wrapInSpan = (str) => `<span>${str}</span>`;
const wrap = (type) => (str) => `<${type}>${str}</${type}>`; // 4. Much better - our curried function (refer to 5b_currying.js)
const toLowerCase = (str) => str.toLowerCase();

const transformUsingPipe = pipe(trim, toLowerCase, wrap("div"));
const transformUsingPipeTwo = pipe(trim, toLowerCase, wrap("span"));
// 5. Log it and see the value at localhost:9000 dev tools
// Make sure you change webpack.config.js's entry point to "./src/5a_currying.js"
console.log(transformUsingPipe(input));
console.log(transformUsingPipeTwo(input));
