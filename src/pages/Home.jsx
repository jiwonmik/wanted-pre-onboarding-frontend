import { Link } from "react-router-dom";
import styled from "styled-components";
import SignIn from "../components/auth/SignIn";
import { Btn, HomeBtn, Container } from "../styles/styles";

function Home(){
    return (
        <>
        <Container>
            <Link to="/todo">
                <Btn>Go to your TO DO</Btn>
            </Link>
        </Container>
            <SignIn />
        </>
        )
};

export default Home;