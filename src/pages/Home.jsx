import { Btn, Container } from "../styles/styles";
import { Link } from "react-router-dom";
import SignOut from "../components/auth/SignOut";
import { useUserState } from "../context/UserContext";



function Home(){
    const isLoggedIn = useUserState();
    return (
        <>
        <Container>
        <Link to="/todo">
            <Btn>My To Do</Btn>     
        </Link>
        { isLoggedIn.token ? <SignOut/> : null}        
        </Container>
        </>
    )
};

export default Home;