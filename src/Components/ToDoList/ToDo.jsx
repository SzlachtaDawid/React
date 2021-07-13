import { db } from "../../firebase";
import { ToDoLi, P, Progress, Delete, BtnContainer } from "./Style";

const Todo = (todo) => {
  function toggleInProgress() {
    db.collection("todo").doc(todo.id).update({
      inprogress: !todo.inprogress,
    });
  }

  function deleteTodo() {
    db.collection("todo").doc(todo.id).delete();
  }

  const Active = {
    borderBottom: "2px solid rgba(0, 255, 0, 0.692)",
  };

  return (
    <ToDoLi style={todo.inprogress ? null : Active}>
      <div>
        <p>{todo.todo}</p>
        <P>{todo.inprogress ? "In Progress" : "Complete"}</P>
      </div>
      <BtnContainer>
        <Progress onClick={toggleInProgress}>
          {todo.inprogress ? "Done" : "UnDone"}
        </Progress>
        <Delete onClick={deleteTodo}>X</Delete>
      </BtnContainer>
    </ToDoLi>
  );
};

export default Todo;
