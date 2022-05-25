import { compose, pipe } from "lodash/fp";

let input = "  JavaScript  ";
let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;
const toLowerCase = (str) => str.toLowerCase();

// Compose is a higher order function that takes a bunch of fns as arguments &
// returns a new fn that is a composition of all the fns passed
// However, take note, when using compose() function --> You still have to read this code from right to left, to get the order of operations
const transform = compose(wrapInDiv, toLowerCase, trim);
transform(input); // same as line 20, cleaner code

// Alternatively, use pipe() --> now the order of operations is 'read' from left to right, easier to understand!
const transformUsingPipe = pipe(trim, toLowerCase, wrapInDiv);
transformUsingPipe(input); // same as line 20, cleaner code

const result = wrapInDiv(toLowerCase(trim(input)));
