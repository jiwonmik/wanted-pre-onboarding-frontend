import { Routes, Route } from "react-router-dom";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";

function Home(){
    return (
        <>
        <SignIn />
        <Routes>
            <Route path={"/signup"} element={<SignUp/>}/>
        </Routes>
        </>
        )
};

export default Home;