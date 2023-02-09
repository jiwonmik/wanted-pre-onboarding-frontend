import { useUserDispatch } from "../../context/UserContext";
import { LOGOUT_USER } from "../../api/types";
import { Btn } from "../../styles/styles";
import { useNavigate } from "react-router-dom";

function SignOut() {
    const dispatch = useUserDispatch();
    const navigate = useNavigate();
    
    const onSignOutClick=()=>{
        dispatch({type: LOGOUT_USER})
        localStorage.removeItem("access_token");    
        navigate("/signin");
    }

    return(
        <Btn onClick={onSignOutClick}>Sign Out</Btn>            
    );
};

export default SignOut;
