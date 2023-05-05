import "./App.css";
// Import dependencies
import Task from "./components/Task"; // Import Task component
import { useSelector, useDispatch } from "react-redux";
import { add } from "./store/todo";

function App() {
  // Initiate todos varibale to a state object created by useSelector hook
  let todos = useSelector(function (state) {
    return state.todo.data;
  });

  // Initiate action dispatch
  let dispatch = useDispatch();

  return (
    <div className="App">
      <h1>To Do</h1>
      <button
        onClick={function () {
          dispatch(add()); // dispatch add action function on click of the add button
        }}
      >
        Add
      </button>
      {/*  Generate array with keys of the todos store object to itareate over with the .map() function */}
      {Object.keys(todos).map(function (task) {
        return <Task key={task} todo={todos[task]} tid={task} />;
      })}
    </div>
  );
}

export default App;
