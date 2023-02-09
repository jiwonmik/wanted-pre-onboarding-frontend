import { signUpApi } from "../../api/auth";
import { Navigate } from "react-router-dom";
import useSignForm from "./useSignForm";

const SignUp = () => {
    const navigate = Navigate();
    const {
        userInfo,
        handleInput,
        emailIsValid,
        emailWarnList,
        passwordIsValid,
        passwordWarnList,
      } = useSignForm();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let body = {
            email: userInfo.email,
            password: userInfo.password
        }
        signUpApi(body)
        .then((res) => {
            console.log("success sign up");
            navigate("/signin");
        }).catch((err)=>{
            throw new Error(err);
        })
    };

    return (
    <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        width: '100%', height: "100vh", placeItems: 'center',
        flexDirection: 'column'
    }}>
        <form style={{ display: "flex", flexDirection: "column"}}
            onSubmit={onSubmitHandler}>
            <input 
                data-testid="email-input" 
                name="email" 
                required=""
                onChange={handleInput} 
                placeholder="Email"/>
            <input 
                data-testid="password-input"
                name="password" 
                required=""
                onChange={handleInput} 
                placeholder="Password"/>
            <button 
                data-testid="signup-button">회원가입</button>   
        </form>
    </div>
    );
};

export default SignUp;