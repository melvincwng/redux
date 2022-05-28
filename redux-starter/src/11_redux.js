/**
 * Refer to img folder 'redux_architecture.jpg' for an image visualization of how redux works from an architectural standpoint
 *
 * Additional Notes:
 * - An Action is a plain javascript object that essentially describes the action being used to update the store (describes what just happened to the store).
 *
 * - A Store is a javascript object that contains the application's state
 *
 * - A Reducer is a function that takes in the store object and returns the updated store object.
 * - A reducer takes a store and an action as its arguments --> returns updated store.
 * - Simple example of reducer (see below)
 *
 * - Can think of Actions (as events) ---> which are used to update the Store (application state) ---> and this process is handled by the Reducer (event handler)
 * - Action - Store - Reducer (in short)
 *
 * - Another example:
 * - a) User adds an item to shopping cart. We can create an Action object based on that and dispatch it to update the store.
 * - b) The Store object has a dispatch() method that takes an Action and then dispatches/sends/forwards it to the Reducer
 * - c) Take note: We do not call the Reducer directly. Communication with the Reducer is done through the Store. Store is in charge of calling the Reducer.
 * - d) The Reducer then computes the new state, and then returns it to the Store to update it
 * - e) The Store will set the new state internally, and then notify UI components about the update
 * - f) UI components will take the new state from the Store, and then refresh themselves
 *
 * References: 58:00 - 1:03:00 of Mosh's Video on Redux
 */

// Generic example of a reducer function
function reducer(store, action) {
  const updated = { ...store };
  updated.products = "New Value";
  return updated;
}
