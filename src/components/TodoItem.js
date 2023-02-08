import { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete, MdEdit } from 'react-icons/md';
import { useTodoDispatch } from '../ToDoContext';
import { deleteTodoApi, updateTodoApi } from '../api/todo';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;
const Edit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`
const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;
const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;
const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;


function TodoItem({ list }){

    const [content, setContent] = useState(list);
    const [toggle, setToggle] = useState(false);
    const dispatch = useTodoDispatch();
    console.log(toggle);

    const handleTodoUpdate = useCallback((content) => {
        updateTodoApi(content.id, content.todo, content.isCompleted)
        .then((res) => {
            dispatch({type: "EDIT", todo: res.data});
        })
        .catch((err) => {
            throw new Error(err);
        });
    }, [list, content]
    );
    
    const onCheckClick = () => {
        setContent({ ...content, isCompleted: !list.isCompleted});
        handleTodoUpdate({ ...content, isCompleted: !list.isCompleted});
    };

    const onInputChange = useCallback((e) => {
        setContent({...content, todo: e.target.value});
        }, [content]
    );

    const handleEditComplete = () => {
        if (!content.todo) {
            // notify 주기
            return;
        }
        handleTodoUpdate(content);
        setToggle(false);
    }

    const handleCancle = () => {
        setContent({ ...content, todo: list.todo});
        setToggle(false);
    }

    const handleDelete = useCallback((id) => {
        deleteTodoApi(id)
        .then((res) => {
            dispatch({type: "DELETE", id});
        })
        .catch((err) => {
            throw new Error(err);
        });
        }, [list]
    );

    return (
        <TodoItemBlock>
            <CheckCircle isCompleted={list.isCompleted} 
                    onClick={(e) => onCheckClick(e)}>
                    {list.isCompleted && <MdDone/>}
            </CheckCircle>
            {toggle ? (
                <>
                    <input
                        defaultValue={list.todo}
                        autoFocus
                        onChange={onInputChange}
                    />
                    <button onClick={handleEditComplete}>완료</button>
                    <button onClick={handleCancle}>취소</button>
                </>
            ) : (
                <>
                <Text isCompleted={list.isCompleted}>{list.todo}</Text>
                <Edit onClick={() => setToggle((prev)=>!prev)}>
                    <MdEdit />
                </Edit>
                <Remove onClick={() => handleDelete(content.id)}>
                    <MdDelete />
                </Remove>
                </>
            )}
        </TodoItemBlock>
    );
}

export default TodoItem;