/**
 * Steps in redux
 * 1) Design the store
 * 2) Define the actions
 * 3) Create a reducer (reducers take an action and return updated state)
 * 4) Set up the store
 */

/**
 * Step 1 (Design the store)
 * What do we want the store to contain? We want it to contain various application states.
 * For our bug tracking application, we want it to for example store a list of bugs
 * Therefore the store can be something like an array of bug objects:
 * [
 *    { id: 1, description: "some description", resolved: false },
 *    {...},
 *    {...}
 * ]
 * But in reality, your redux store is more complex than this...
 */

/**
 * Step 2 (Define the actions)
 * Actions that can be used in this bug tracking app can be like a) Add a bug, b) Delete a bug, or c) Mark a bug as resolved
 * Actions are just plain JS objects that describe what just happened.
 * E.g. {
 *    type: "bugAdded",
 *    description: "..."
 * }
 * Take note, since redux was inspired by Flux (Facebook's creation), you may also see certain action objects like this
 * E.g. {
 *    type: "bugAdded",
 *    payload: {
 *      id: "..."
 *      description: "..."
 *  }
 * }
 * The payload contains the minimum amt of information about the action
 */

/**
 * Step 3 (Create a reducer)
 * A reducer essentially is a function containing two parameters (current state and action)
 * It's job is to return the new state based on this action
 * Refer to the file reducer.js for more info
 */

/**
 * Step 4 (Set up the store)
 * - Create a file called store.js
 * - Follow the code flow over there
 * - Essentially import the createStore() from redux, pass a ref to the reducer function, then create a store and store it in a variable
 * - Then export the store to index.js
 */

/**
 * Step 5 (Dispatch actions using the dispatch() method from the store in index.js. This will update the state in the store)
 */
