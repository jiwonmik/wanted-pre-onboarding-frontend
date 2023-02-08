import { createContext, useContext, useReducer } from "react";
import { LOGIN_USER, LOGOUT_USER } from "../api/types";

function userReducer (state, action) {
    switch(action.type){
      case LOGIN_USER:
        return {...state, token: action.token};
      case LOGOUT_USER:
        return {...state, token: null};
      default:
        return state;
      }
};

const UserStateContext = createContext();
const UserDispatchContext= createContext();

const token = localStorage.getItem('access_token');

export const initState = {
  token:""||token,
  errorMessage:null
}

export function UserProvider({ children }) {
    const [state, dispatch] = useReducer(userReducer, initState);
    return (
        <UserStateContext.Provider value={state}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserStateContext.Provider>
    );
};

// useContext 커스텀 Hook
export function useUserState() {
    const context = useContext(UserStateContext);
    if (!context){
        throw new Error('Cannot find UserProvider');
    }
    return context;
}

export function useUserDispatch(){
    const context = useContext(UserDispatchContext)
    if (!context) {
        throw new Error('Cannot find UserProvider');
    }
    return context;
}