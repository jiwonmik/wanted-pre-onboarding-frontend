import { useState } from "react";
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch } from "../../../context/ToDoContext";
import { createTodoApi } from "../../../api/todo";
import { InsertForm, InsertFormPositioner, CircleButton, Input } from './styles'
import { ToastContainer } from "react-toastify";
import notice from "../../Toast";
import 'react-toastify/dist/ReactToastify.css';

function TodoCreate() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    const dispatch = useTodoDispatch();

    const onToggle = () => setOpen(!open);
    const onChange = (e) => setValue(e.target.value);
    
    const onSubmit = (e) => {
        e.preventDefault();
        createTodoApi(value)
        .then((res) => {
            notice("success", "할 일 추가 완료");
            setValue('');
            dispatch({ type: "ADD", todo: res.data });  
            console.log("New To Do created");
        })
        .catch((err)=> {
            throw new Error(err);
        }); 
        setOpen(false);
    };

    return (
        <>
          {open && (
              <InsertFormPositioner>
                  <InsertForm onSubmit={onSubmit}>
                      <Input 
                          data-testid="new-todo-input"
                          autoFocus 
                          placeholder="할 일을 입력하고 Enter를 누르세요."
                          onChange={onChange}
                          value={value}/>
                  </InsertForm>
              </InsertFormPositioner>
          )}
          <CircleButton 
            data-testid="new-todo-add-button"
            onClick={onToggle} open={open}>
            <MdAdd />
          </CircleButton>
          <ToastContainer position="top-right"/>
        </>
    );
}

export default TodoCreate;