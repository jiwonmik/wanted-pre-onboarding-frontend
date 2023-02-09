import SignIn from "../components/auth/SignIn";
import { Btn, Container } from "../styles/styles";
import { Link } from "react-router-dom";
import SignOut from "../components/auth/SignOut";


function Home(){

    return (
        <>
        <Link to="/todo">
            <Btn>My To Do</Btn>     
        </Link>
        <SignOut/>            
        <SignIn/>
        </>
    )
};

export default Home;