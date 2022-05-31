// Action Creators essentially are just functions that create actions for us
// So that we don't have to manually type the action obj every single time

import * as actions from "./actionTypes";

// use parenthesis to return the curly braces as an object
export const bugAdded = (description) => ({
  type: actions.BUG_ADDED,
  payload: {
    description: description,
  },
});

export const bugRemoved = (id) => ({
  type: actions.BUG_REMOVED,
  payload: {
    id: id,
  },
});

// export function bugAdded(description) {
//   return {
//     type: actions.BUG_ADDED,
//     payload: {
//       description: description,
//     },
//   };
// }
