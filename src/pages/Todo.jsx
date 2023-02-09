import TodoHead from "../components/todo/TodoHead/TodoHead";
import TodoList from "../components/todo/TodoList/TodoList";
import TodoCreate from "../components/todo/TodoCreate/TodoCreate";
import { TodoProvider } from "../context/ToDoContext";
import { Link, Navigate } from "react-router-dom";
import { HomeBtn } from "../styles/styles";
import { useUserState } from "../context/UserContext";

function Todo(){
  const isLoggedIn = useUserState();

  return (
    <>
    { isLoggedIn ? (
      <TodoProvider>
        <Link to="/">
          <HomeBtn>Home</HomeBtn>
        </Link>
        <TodoHead/>
        <TodoList/>
        <TodoCreate/>
      </TodoProvider>
    ) : 
      <Navigate to='/signin' replace={true}/>}
    </>
  );
};

export default Todo;