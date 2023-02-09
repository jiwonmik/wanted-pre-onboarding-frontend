import TodoHead from "../components/todo/TodoHead/TodoHead";
import TodoList from "../components/todo/TodoList/TodoList";
import TodoCreate from "../components/todo/TodoCreate/TodoCreate";
import { TodoProvider } from "../context/ToDoContext";

function Todo(){
  return (
      <TodoProvider>
        <TodoHead/>
        <TodoList/>
        <TodoCreate/>
      </TodoProvider>
  );
};

export default Todo;