import { db } from "../../firebase";
import firebase from "firebase/app";
import { useAuth } from "../../Contexts/AuthContext";

import { useState } from "react";
import { Background, H1, AddToDo, Input, List } from "./Style";
import { useEffect } from "react";
import Todo from "./ToDo";

const ToDoList = () => {
  const [todos, setTodos] = useState(null);
  const [todoInput, setTodoInput] = useState("");

  const { currentUser } = useAuth();

  useEffect(() => {
    getTodos();
  }, []);

  function getTodos() {
    console.log("pobieram");
    db.collection("todo").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          user: doc.data().user,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
        }))
      );
    });
  }

  function addToDo(e) {
    e.preventDefault();
    db.collection("todo").add({
      user: currentUser.email,
      inprogress: true,
      timestamps: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });
    setTodoInput("");
  }

  let filterTodos = null;

  if (todos) {
    filterTodos = todos.filter((todo) => todo.user === currentUser.email);
  }

  return (
    <Background>
      <H1>TODOLIST</H1>
      <form onSubmit={addToDo}>
        <Input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <AddToDo type="submit" variant="contained">
          Add Todo
        </AddToDo>
      </form>
      <List>
        {filterTodos ? (
          filterTodos.map((todo) => (
            <Todo
              id={todo.id}
              key={todo.id}
              todo={todo.todo}
              inprogress={todo.inprogress}
            />
          ))
        ) : (
          <p style={{ color: "red" }}>ładowanie danych</p>
        )}
      </List>
    </Background>
  );
};

export default ToDoList;
