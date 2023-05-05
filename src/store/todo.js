import { createSlice } from "@reduxjs/toolkit"; // import createSlice
export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    nextId: 2,
    // define initial state with one data object for a demonstration task
    data: {
      1: {
        content: "Task 1",
        completed: false,
      },
    },
  },
  reducers: {
    // define add action
    add: function (state, action) {
      let newTask = prompt("Write new task:"); // prompt user for task description
      // save task data object to global state
      state.data[state.nextId] = {
        content: newTask,
        complete: false, // set task complete state to false by default on creation
      };
      state.nextId++; // increase next task counter by 1
    },
    // define remove action
    remove: function (state, action) {
      // unset task data object by using the delete operator
      delete state.data[action.payload];
    },
    // define edit action
    edit: function (state, action) {
      let newContent = prompt("Enter new text:"); // prompt user for new task description
      state.data[action.payload].content = newContent; // modify old task description
    },
    // define complete action
    complete: function (state, action) {
      // here we use a ternary operator to store a new value for the competed propety
      // based on its old value, and turning it into it's opposite
      state.data[action.payload].completed = state.data[action.payload]
        .completed
        ? false
        : true;
    },
  },
});
export const { add, remove, edit, complete } = todoSlice.actions; // export actions
export default todoSlice.reducer; // export reducer
