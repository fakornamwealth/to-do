import { configureStore } from "@reduxjs/toolkit"; // import confugreStore
import todoReducer from "./todo.js"; // import reducer object
// export store configuration with reducer
export default configureStore({
  reducer: {
    todo: todoReducer,
  },
});
