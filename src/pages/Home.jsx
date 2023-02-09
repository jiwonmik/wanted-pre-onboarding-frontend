import SignIn from "../components/auth/SignIn";
import { Btn, Container } from "../styles/styles";
import { Link } from "react-router-dom";
import SignOut from "../components/auth/SignOut";
import { useUserState } from "../context/UserContext";


function Home(){
    const isLoggedIn = useUserState();

    return (
        <>
        { isLoggedIn.token ? (
            <Container>
            <Link to="/todo">
                <Btn>My To Do</Btn>     
            </Link>
            <SignOut/>            
            </Container>
            ):(
                <SignIn/>
            )}
        </>
    )
};

export default Home;