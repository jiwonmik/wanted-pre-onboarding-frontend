import TodoHead from "../components/TodoHead";
import TodoList from "../components/TodoList";
import TodoCreate from "../components/TodoCreate";
import { TodoProvider } from "../ToDoContext";

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