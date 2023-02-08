import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./Routes/PrivateRoute";
import Home from "./components/Home";
import Todo from "./components/Todo";

function Router(){
    const access = localStorage.getItem('token');
    
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
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