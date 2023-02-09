import { Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "../pages/Home"
import Todo from "../pages/Todo";
import SignUp from "../components/auth/SignUp";
import SignIn from "../components/auth/SignIn";
import { useUserState } from "../context/UserContext";

function Router(){
    const isLoggedIn = useUserState();
    return (
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={
                !(isLoggedIn.token) ? <SignUp/> : <Navigate to="/todo"/>}/>
            <Route path="/signin" element={
                !(isLoggedIn.token) ? <SignIn/> : <Navigate to="/todo"/>}/>
            <Route path="/todo" element={
                !(isLoggedIn.token) ? <Navigate to="/signin"/> : <Todo/>
            }/>
        </Routes>        
        </>

    );
}

export default Router;