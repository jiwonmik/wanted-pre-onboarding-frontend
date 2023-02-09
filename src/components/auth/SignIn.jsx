import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserDispatch } from "../../context/UserContext";
import { loginApi } from "../../api/auth";
import { LOGIN_USER } from "../../api/types";
import { Container, Input, Btn } from "../../styles/styles";

const SignIn = () => {
    const dispatch = useUserDispatch();
    const navigate = useNavigate();

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email,password);
        if (email.includes("@") && password.length >= 8){
            let body = {
                email: email,
                password: password
            }
            loginApi(body)
            .then((res)=>{
                dispatch({type: LOGIN_USER, token:res.data.access_token})
                localStorage.setItem("access_token",res.data.access_token)
                navigate("/todo");
            }).catch((err)=>{
                throw new Error(err);
            })
        } else{
            console.log("not valid Email or Password");
        }
        setUserInfo({
            email: "",
            password: "",
        });
    };

    return (
        <Container>
            <form style={{ display: "flex", flexDirection: "column"}}
                onSubmit={handleSubmit}>
                <Input data-testid="email-input" name="email" value={email} onChange={onInputHandler} placeholder="Email"/>
                <Input data-testid="password-input" name="password" value={password} onChange={onInputHandler} placeholder="Password"/>
                <Btn data-testid="signin-button">로그인</Btn>   
            </form>
        </Container>
    );
}

export default SignIn;
