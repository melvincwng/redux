import store from "./store";

// can console.log(store) to see what it contains
// store is an object that has various methods - e.g. dispatch, getState, replaceReducer, subscribe etc
// To update the store's state, we need to dispatch an action first (e.g. user clicks a button --> an action gets dispatched)
store.dispatch({
  type: "bugAdded",
  payload: {
    description: "Bug1",
  },
});

store.dispatch({
  type: "bugRemoved",
  payload: {
    id: 1,
  },
});

console.log(store);
console.log(store.getState());
