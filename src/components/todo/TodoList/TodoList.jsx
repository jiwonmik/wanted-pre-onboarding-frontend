import { useEffect } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { useTodoDispatch, useTodoState } from '../../../context/ToDoContext';
import { getTodoApi } from '../../../api/todo';
import { TodoListBlock } from './styles';

function TodoList() {
    const todos = useTodoState();
    const dispatch = useTodoDispatch();

    useEffect(() => {
        const getTodoData = () => {
            getTodoApi()
            .then((res) => {
                dispatch({type: "INIT", initTodos: res.data});
            })
            .catch((err)=>{
                console.log(err);
                throw new Error(err);
            });
        };
        getTodoData();
    }, []);

  return (
    <TodoListBlock>
        {todos?.map((list) => 
            <TodoItem key={list.id} list={list}/>
        )}
    </TodoListBlock>
  );
}

export default TodoList;