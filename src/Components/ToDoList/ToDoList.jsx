import { db } from "../../firebase";
import firebase from "firebase/app";
import { useAuth } from "../../Contexts/AuthContext";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import { useState } from "react";
import { Background, H1, AddToDo, Input, List, User } from "./Style";
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
    function compare(a, b) {
      if (a.inprogress > b.inprogress) {
        return -1;
      }
      if (b.inprogress < a.inprogress) {
        return 1;
      }
      return 0;
    }
    filterTodos.sort(compare);
  }

  return (
    <Background>
      <H1>TODO</H1>
      <form onSubmit={addToDo}>
        <Input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <AddToDo type="submit" variant="contained">
          ADD Task
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
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
      </List>
      <User>{currentUser.email}</User>
    </Background>
  );
};

export default ToDoList;
