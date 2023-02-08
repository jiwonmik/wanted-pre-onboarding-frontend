import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { loginApi } from "../api/auth";

const SignIn = ({ logIn }) => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();
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

        loginApi(email, password)
        .then((res) => {
            console.log("success sign up");
            localStorage.setItem("access_token", res.data.access_token);
            navigate("/todo");
        })
        .catch((err)=>{
            console.log("error:", err.response.data.message);
        });

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