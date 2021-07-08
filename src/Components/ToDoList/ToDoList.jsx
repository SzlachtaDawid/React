import { db } from "../../firebase";
import firebase from "firebase/app";

import { useState } from "react";
import { Background } from "./Style";
import { useEffect } from "react";
import Todo from "./ToDo";

const ToDoList = () => {
  const [todos, setTodos] = useState(null);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    getTodos();
  }, []);

  function getTodos() {
    console.log("pobieram");
    db.collection("todo").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogres: doc.data().inprogres,
        }))
      );
    });
  }

  function addToDo(e) {
    e.preventDefault();
    db.collection("todo").add({
      inpogres: true,
      timestamps: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });
    setTodoInput("");
  }

  return (
    <Background>
      <h1>ToDoList</h1>
      <form onSubmit={addToDo}>
        <input
          id="standard-basic"
          label="Standard"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button type="submit" variant="contained">
          Add Todo
        </button>
      </form>
      <ul>
        {todos ? (
          todos.map((todo) => (
            <Todo id={todo.id} key={todo.id} todo={todo.todo} />
          ))
        ) : (
          <p style={{ color: "red" }}>ładowanie danych</p>
        )}
      </ul>
    </Background>
  );
};

export default ToDoList;
