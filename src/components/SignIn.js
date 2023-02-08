import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginApi } from "../api/auth";
import { useUserDispatch } from "../UserContext";
import { LOGIN_USER } from "../api/types";

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

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(email,password);

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
        setUserInfo({
            email: "",
            password: "",
        });
    };

    return (
        <>
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
                <button data-testid="signin-button">로그인</button>   
            </form>
            </div>
            <Link to={"/signup"}>Create an account.</Link>
        </div>
        </>
    );
}

export default SignIn;