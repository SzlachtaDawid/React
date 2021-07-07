import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { db } from "../../firebase";
import firebase from "firebase/app";

import { useState } from "react";
import { Background } from "./Style";
import { useEffect } from "react";

const ToDoList = () => {
  const [todos, setTodos] = useState("");
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    getTodos();
  }, []);

  function getTodos() {
    db.collection("todo").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogres: doc.data().inpogres,
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
        <TextField
          id="standard-basic"
          label="Write a Todo"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <Button type="submit" variant="contained">
          Default
        </Button>
      </form>
      {todos.map((todo) => (
        <p>{todo.todo}</p>
      ))}
    </Background>
  );
};

export default ToDoList;
