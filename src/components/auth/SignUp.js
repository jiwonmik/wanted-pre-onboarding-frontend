import { useState } from "react";
import { signUpApi } from "../../api/auth";
import { Navigate } from "react-router-dom";

const SignUp = () => {
    const navigate = Navigate();
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    });
    const { email, password }= userInfo;

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
            let body = {
                email: email,
                password: password
            }
            signUpApi(body)
            .then((res) => {
                console.log("success sign up");
                navigate("/signin");
            }).catch((err)=>{
                throw new Error(err);
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
        <form style={{ display: "flex", flexDirection: "column"}}
            onSubmit={onSubmitHandler}>
            <input 
                data-testid="email-input" 
                name="email" 
                required=""
                value={email} 
                onChange={onInputHandler} 
                placeholder="Email"/>
            <input 
                data-testid="password-input"
                name="password" 
                required=""
                value={password} 
                onChange={onInputHandler} 
                placeholder="Password"/>
            <button 
                data-testid="signup-button">회원가입</button>   
        </form>
    </div>
    );
};

export default SignUp;