import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./Routes/PrivateRoute";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

function Router(){
    const access = localStorage.getItem('token');
    
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/todo" 
                element={
                    <PrivateRoute
                        authenticated={access}
                        component={<Todo/>}
                />}
            />
        </Routes>
    </BrowserRouter>
}

export default Router;