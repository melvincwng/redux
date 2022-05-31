import store from "./store";
import * as actions from "./actionTypes";

// Subscribe to the store first, before dispatching an action
// The inner/callback function gets called every time the state of the store changes
// UI components should subscribe to the store, so that they are notified when the state of the store changes
// This subscribe fn returns an unsubscribing fn to unsubscribe from the store
// This unsubscribe fn is important...because a user can navigate away from that page to another page that does not have this particular component
// We don't want it to continue subscribing to the store (when it's not needed) --> this can cause memory leaks
// Hence, if the current UI component is not going to be visible, we should unsubscribe from the store
const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

// can console.log(store) to see what it contains
// store is an object that has various methods - e.g. dispatch, getState, replaceReducer, subscribe etc
// To update the store's state, we need to dispatch an action first (e.g. user clicks a button --> an action gets dispatched)
store.dispatch({
  type: actions.BUG_ADDED,
  payload: {
    description: "Bug1",
  },
});

// unsubscribe();

store.dispatch({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1,
  },
});

console.log(store);
console.log(store.getState());
