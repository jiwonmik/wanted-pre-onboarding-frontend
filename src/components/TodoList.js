import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return <TodoListBlock>
    <TodoItem todo="과제하기" isCompleted={false}></TodoItem>
  </TodoListBlock>;
}

export default TodoList;