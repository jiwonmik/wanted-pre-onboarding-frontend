import TodoHead from "../components/todo/TodoHead/TodoHead";
import TodoList from "../components/todo/TodoList/TodoList";
import TodoCreate from "../components/todo/TodoCreate/TodoCreate";
import { TodoProvider } from "../context/ToDoContext";
import { Link } from "react-router-dom";
import { HomeBtn } from "../styles/styles";

function Todo(){
  return (
      <TodoProvider>
        <Link to="/">
          <HomeBtn>Home</HomeBtn>
        </Link>
        <TodoHead/>
        <TodoList/>
        <TodoCreate/>
      </TodoProvider>

  );
};

export default Todo;