import { useEffect } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoDispatch, useTodoState } from '../context/ToDoContext';
import { getTodoApi } from '../api/todo';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

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

  return <TodoListBlock>
    <ul>
        {todos?.map((list) => 
            <TodoItem key={list.id} list={list}/>
        )}
    </ul>
  </TodoListBlock>;
}

export default TodoList;