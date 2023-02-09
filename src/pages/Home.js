import { Link } from "react-router-dom";
import SignIn from "../components/auth/SignIn";
import styled from "styled-components";

const Btn = styled.button`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  justifyContent: center;
  alignItems: center
`

function Home(){
    return (
        <>
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: "100vh", placeItems: 'center',
            flexDirection: 'column'
        }}>
            <Link to="/todo">
                <Btn>Go to your TO DO</Btn>
            </Link>
            <SignIn />
            <Link to={"/signup"}>Create an account.</Link>
        </div>
        </>
        )
};

export default Home;