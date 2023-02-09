import TodoHead from "../components/todo/TodoHead";
import TodoList from "../components/todo/TodoList";
import TodoCreate from "../components/todo/TodoCreate";
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