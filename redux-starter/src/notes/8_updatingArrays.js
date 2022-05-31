const numbers = [1, 2, 3];

// Adding a new number
const added = [...numbers, 4];

// Adding a new number at a specific index (e.g. add a new number before the number '2')
const index = numbers.indexOf(2);
const addedTwo = [...numbers.splice(0, index), 4, ...numbers.splice(index)];

// Removing
const removed = numbers.filter((n) => n !== 2);

// Updating
const updated = numbers.map((n) => (n === 2 ? 20 : n));
