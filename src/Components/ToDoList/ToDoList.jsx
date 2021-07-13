import { db } from "../../firebase";
import firebase from "firebase/app";
import { useAuth } from "../../Contexts/AuthContext";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSpring } from "react-spring";

import { useState } from "react";
import {
  Background,
  H1,
  AddToDo,
  Input,
  List,
  User,
  Loaderr,
  Home,
} from "./Style";
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
    db.collection("todo").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          user: doc.data().user,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
          time: doc.data().time,
        }))
      );
    });
  }

  function addToDo(e) {
    e.preventDefault();
    let time = new Date();
    time = time.getTime();
    db.collection("todo").add({
      user: currentUser.email,
      inprogress: true,
      timestamps: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
      time: time,
    });
    setTodoInput("");
  }

  let filterTodos = null;

  if (todos) {
    filterTodos = todos.filter((todo) => todo.user === currentUser.email);

    function compare(a, b) {
      if (a.inprogress !== b.inprogress) {
        return a.inprogress ? -1 : 1;
      }
      if (a.time !== b.time) {
        return b.time - a.time;
      }
      return 0;
    }

    filterTodos.sort(compare);
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }

  const Opacity = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 600 },
    delay: 200,
  });

  return (
    <Background style={Opacity}>
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
      <Link to="/">
        <Home icon={faHome} />
      </Link>
      <User>{currentUser.email}</User>
    </Background>
  );
};

export default ToDoList;
