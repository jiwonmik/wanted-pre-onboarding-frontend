import { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete, MdEdit, MdCancel } from 'react-icons/md';
import { useTodoDispatch } from '../ToDoContext';
import { deleteTodoApi, updateTodoApi } from '../api/todo';

const Btn = styled.div`
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
const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Btn} {
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
const EditInput = styled.div`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
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
                    <EditInput as="input"
                        defaultValue={list.todo}
                        autoFocus
                        onChange={onInputChange}
                    />
                    <Btn onClick={handleEditComplete}>
                        <MdDone/>
                    </Btn>
                    <Btn onClick={handleCancle}>
                        <MdCancel/>
                    </Btn>
                </>
            ) : (
                <>
                <Text isCompleted={list.isCompleted}>{list.todo}</Text>
                <Btn onClick={() => setToggle((prev)=>!prev)}>
                    <MdEdit />
                </Btn>
                <Btn onClick={() => handleDelete(content.id)}>
                    <MdDelete />
                </Btn>
                </>
            )}
        </TodoItemBlock>
    );
}

export default TodoItem;