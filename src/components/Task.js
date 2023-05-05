// import dependencies
import { useDispatch } from "react-redux";
import { remove, edit, complete } from "../store/todo";

function Task({ tid, todo }) {
  let dispatch = useDispatch(); // Initiate dispatach action

  return (
    <div id={tid} className="task">
      {/* Here we use a ternary operator to apply the scratch class if the completed attribute is true */}
      <span className={todo.completed ? "scratch" : ""}>{todo.content}</span>
      <button
        onClick={function () {
          dispatch(remove(tid)); // dispatch action
        }}
      >
        Delete
      </button>
      <button
        onClick={function () {
          dispatch(edit(tid)); // dispatch action
        }}
      >
        Edit
      </button>
      <button
        onClick={function () {
          dispatch(complete(tid)); // dispatch action
        }}
      >
        Complete
      </button>
    </div>
  );
}
export default Task; // Export component
