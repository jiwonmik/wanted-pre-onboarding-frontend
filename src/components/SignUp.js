import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpApi } from "../api/auth";

const SignUp = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    });

    const { email, password }= userInfo;
    const navigate = useNavigate();

    const onInputHandler = (e) => {
        const { value, name } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value
        });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (email.includes("@") && password.length >= 8){
            signUpApi(email, password)
            .then((response) => {
                console.log("success sign up");
                navigate("/todo");
            })
        } else{
            console.log("not valid Email or Password");
        }
    };

    return (
    <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        width: '100%', height: "100vh", placeItems: 'center',
        flexDirection: 'column'
    }}>
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: "100px", placeItems: 'center',
            flexDirection: 'column'
        }}>
        <form style={{ display: "flex", flexDirection: "column"}}
            onSubmit={onSubmitHandler}>
            <input data-testid="email-input" name="email" value={email} onChange={onInputHandler} placeholder="Email"/>
            <input data-testid="password-input" name="password" value={password} onChange={onInputHandler} placeholder="Password"/>
            <button data-testid="signup-button">회원가입</button>   
        </form>
        </div>
    </div>
    );
};

export default SignUp;