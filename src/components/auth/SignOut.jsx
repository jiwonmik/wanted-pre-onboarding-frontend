import { useUserDispatch } from "../../context/UserContext";
import { LOGOUT_USER } from "../../api/types";
import { Btn } from "../../styles/styles";

function SignOut() {
    const dispatch = useUserDispatch();
    
    const onSignOutClick=()=>{
        dispatch({type: LOGOUT_USER})
        localStorage.removeItem("access_token");    
    }

    return(
        <Btn onClick={onSignOutClick}>Sign Out</Btn>            
    );
};

export default SignOut;
