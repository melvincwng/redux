// Recall earlier our state is an array of bug objects [ {id: 1, description: "some description", resolved: false}, {...}, {...}]
// When we start the app, the store is initially undefined --> meaning state is undefined
// Hence, at the start, we are passing in undefined as the state argument in the reducer function
// We don't want it to return undefined... hence we can set a default state which in this case, is an empty array []

let lastId = 0;

// Can use switch statements as well in the reducer function
export default function reducer(state = [], action) {
  if (action.type === "bugAdded")
    // returning an updated state containing the previous state's bug objects AND a new bug object
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  else if (action.type === "bugRemoved")
    // return the updated state containing the removed bug
    return state.filter((bug) => bug.id !== action.payload.id);

  // If we dispatch an action that doesn't exist, we dont want our system to go haywire, hence just return the current state
  return state;
}
