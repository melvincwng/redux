// Recall earlier our state is an array of bug objects [ {id: 1, description: "some description", resolved: false}, {...}, {...}]
// When we start the app, the store is initially undefined --> meaning state is undefined
// Hence, at the start, we are passing in undefined as the state argument in the reducer function
// We don't want it to return undefined... hence we can set a default state which in this case, is an empty array []

// import { BUG_ADDED, BUG_REMOVED } from "./actionTypes"; // One way to import
import * as actions from "./actionTypes"; // Alternative way to import actions (actions is an object with properties like BUG_ADDED & BUG_REMOVED)

let lastId = 0;

// Can use switch statements as well in the reducer function
export default function reducer(state = [], action) {
  if (action.type === actions.BUG_ADDED)
    // returning an updated state containing the previous state's bug objects AND a new bug object
    return [
      ...state,
      {
        id: ++lastId, // Difference between i++ and ++i (https://stackoverflow.com/questions/6867876/javascript-i-vs-i)
        description: action.payload.description,
        resolved: false,
      },
    ];
  else if (action.type === actions.BUG_REMOVED)
    // return the updated state containing the removed bug
    return state.filter((bug) => bug.id !== action.payload.id);

  // If we dispatch an action that doesn't exist, we dont want our system to go haywire, hence just return the current state
  return state;
}
