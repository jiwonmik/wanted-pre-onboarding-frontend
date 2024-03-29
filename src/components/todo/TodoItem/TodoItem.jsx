import { useCallback, useState } from 'react';
import { MdDone, MdDelete, MdEdit, MdCancel } from 'react-icons/md';
import { useTodoDispatch } from '../../../context/ToDoContext';
import { deleteTodoApi, updateTodoApi } from '../../../api/todo';
import { TodoItemBlock,CheckCircle,EditInput,Btn, Text } from './styles';
import notice from '../../Toast';
import { ToastContainer } from 'react-toastify';

function TodoItem({ list }){

    const [content, setContent] = useState(list);
    const [toggle, setToggle] = useState(false);
    const dispatch = useTodoDispatch();

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
            notice("error", "할 일을 입력해주세요.");
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
        <>
        <ToastContainer position='top-right'/>
        <TodoItemBlock>
            <CheckCircle isCompleted={list.isCompleted} 
                    onClick={(e) => onCheckClick(e)}>
                    {list.isCompleted && <MdDone/>}
            </CheckCircle>
            {toggle ? (
                <>
                    <EditInput as="input"
                        data-testid="modify-input"
                        defaultValue={list.todo}
                        autoFocus
                        onChange={onInputChange}
                    />
                    <Btn 
                        data-testid="submit-button"
                        onClick={handleEditComplete}>
                        <MdDone/>
                    </Btn>
                    <Btn 
                        data-testid="cancel-button"
                        onClick={handleCancle}>
                        <MdCancel/>
                    </Btn>
                </>
            ) : (
                <>
                <Text isCompleted={list.isCompleted}>{list.todo}</Text>
                <Btn
                    data-testid="modify-button" 
                    onClick={() => setToggle((prev)=>!prev)}>
                    <MdEdit />
                </Btn>
                <Btn 
                    data-testid="delete-button"
                    onClick={() => handleDelete(content.id)}>
                    <MdDelete />
                </Btn>
                </>
            )}
        </TodoItemBlock>
        </>

    );
}

export default TodoItem;