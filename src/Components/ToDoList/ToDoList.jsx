import { db } from "../../firebase";
import firebase from "firebase/app";
import { useAuth } from "../../Contexts/AuthContext";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { useState } from "react";
import { Background, H1, AddToDo, Input, List, User, Loaderr } from "./Style";
import { useEffect } from "react";
import Todo from "./ToDo";

const ToDoList = () => {
  const [todos, setTodos] = useState(null);
  const [todoInput, setTodoInput] = useState("");
  const [loading, setLoading] = useState(false);

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
    console.log("filert");
    setTimeout(() => {
      setLoading(true);
    }, 2000);
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
        {loading ? (
          filterTodos.map((todo) => (
            <Todo
              id={todo.id}
              key={todo.id}
              todo={todo.todo}
              inprogress={todo.inprogress}
            />
          ))
        ) : (
          <Loaderr
            type="BallTriangle"
            color="#414141"
            height={150}
            width={150}
            timeout={3000}
          />
        )}
      </List>
      <User>{currentUser.email}</User>
    </Background>
  );
};

export default ToDoList;
