import { db } from "../../firebase";
import { ToDoLi, P } from "./Style";

const Todo = (todo) => {
  function toggleInProgress() {
    db.collection("todo").doc(todo.id).update({
      inprogress: !todo.inprogress,
    });
  }

  function deleteTodo() {
    db.collection("todo").doc(todo.id).delete();
  }

  return (
    <ToDoLi>
      <div>
        <strong>{todo.todo}</strong>
        <P>{todo.inprogress ? "In Progress" : "Complete"}</P>
      </div>
      <div>
        <button onClick={toggleInProgress}>
          {todo.inprogress ? "Done" : "UnDone"}
        </button>
        <button onClick={deleteTodo}>X</button>
      </div>
    </ToDoLi>
  );
};

export default Todo;
