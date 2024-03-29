import { useNavigate, Link } from "react-router-dom";
import { useUserDispatch } from "../../context/UserContext";
import { loginApi } from "../../api/auth";
import { LOGIN_USER } from "../../api/types";
import { Container, Input, Btn, AuthErrorWrapper } from "../../styles/styles";
import useSignForm from "../../hooks/useSignForm";
import notice from "../Toast";
import { ToastContainer } from "react-toastify";

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
            if (err.response.status===404){
                notice("error","로그인 실패");
            }            
            throw new Error(err);
        })
    };

    return (
        <Container>
        <ToastContainer position="top-right"/>
            <form style={{ display: "flex", flexDirection: "column"}}
                onSubmit={handleSubmit}>
                <Input 
                    data-testid="email-input" 
                    name="email" 
                    type="email"
                    onChange={handleInput("email")} 
                    placeholder="Email"/>
                <Input 
                    data-testid="password-input" 
                    name="password" 
                    type="password"
                    onChange={handleInput("password")} 
                    placeholder="Password"/>
                <Btn 
                    data-testid="signin-button"
                    disabled={!emailIsValid || !passwordIsValid}>로그인</Btn>   
            </form>
            <AuthErrorWrapper>
                {emailWarnList?.map((item) => (
                    <div key={item}>{item}</div>
                ))}
                {passwordWarnList?.map((item) => (
                    <div key={item}>{item}</div>
                ))}
            </AuthErrorWrapper>
            <Link to="/signup">
                Don't have account? Sign Up.
            </Link>
        </Container>
    );
}

export default SignIn;
