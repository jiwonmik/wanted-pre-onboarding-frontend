import { Routes, Route } from "react-router-dom";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

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