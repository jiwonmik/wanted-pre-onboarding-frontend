import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home"
import Todo from "../pages/Todo";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import { useUserState } from "../UserContext";

function Router(){
    const authState = useUserState();

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signup" element={
                !(authState.token) ? 
                <SignUp/> : <Navigate to="/todo"/>}/>
            <Route path="/signin" element={!(authState.token) ? 
                <SignIn/> : <Navigate to="/todo"/>}/>
            <Route path="/todo" element={
                !(authState.token) ? 
                (<Navigate to="/signin"/>) : <Todo/>
            }/>
        </Routes>
    </BrowserRouter>
}

export default Router;