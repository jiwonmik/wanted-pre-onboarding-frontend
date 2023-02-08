import { createContext, useContext, useReducer } from "react";

const initTodos = [];

function todoReducer (state, action) {
    switch(action.type){
      case "INIT":
        return [...action.initTodos];
      case "ADD":
        return [...state, action.todo];
      case "DELETE":
        return state.filter((task) => task.id !== action.id);
      case "EDIT":
        return state.map((task) => (task.id === action.todo.id ? { ...action.todo } : task));
      default:
        return state;
      }
};

const TodoStateContext = createContext();
const TodoDispatchContext= createContext();

export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initTodos);
    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                {children}
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
};

// useContext 커스텀 Hook
export function useTodoState() {
    const context = useContext(TodoStateContext);
    if (!context){
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoDispatch(){
    const context = useContext(TodoDispatchContext)
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}