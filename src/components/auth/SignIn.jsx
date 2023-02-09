import { useNavigate } from "react-router-dom";
import { useUserDispatch } from "../../context/UserContext";
import { loginApi } from "../../api/auth";
import { LOGIN_USER } from "../../api/types";
import { Container, Input, Btn } from "../../styles/styles";
import useSignForm from "./useSignForm";

const SignIn = () => {
    const dispatch = useUserDispatch();
    const navigate = useNavigate();

    const {
        userInfo,
        handleInput,
        emailIsValid,
        emailWarnList,
        passwordIsValid,
        passwordWarnList,
      } = useSignForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        let body = {
            email: userInfo.email,
            password: userInfo.password
        }
        loginApi(body)
        .then((res)=>{
            dispatch({type: LOGIN_USER, token:res.data.access_token})
            localStorage.setItem("access_token",res.data.access_token)
            navigate("/todo");
        }).catch((err)=>{
            throw new Error(err);
        })
    };

    return (
        <Container>
            <form style={{ display: "flex", flexDirection: "column"}}
                onSubmit={handleSubmit}>
                <Input 
                    data-testid="email-input" 
                    name="email" 
                    onChange={handleInput("email")} 
                    placeholder="Email"/>
                <Input 
                    data-testid="password-input" 
                    name="password" 
                    onChange={handleInput("password")} 
                    placeholder="Password"/>
                <Btn 
                    data-testid="signin-button"
                    disabled={!emailIsValid || !passwordIsValid}>로그인</Btn>   
            </form>
        </Container>
    );
}

export default SignIn;
