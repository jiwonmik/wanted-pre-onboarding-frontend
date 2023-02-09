import { UserProvider } from "./context/UserContext";
import { Link } from "react-router-dom";
import Router from "./Routes/Router";
import PageTemplate from "./PageTemplate";
import { GlobalStyle, HomeBtn } from "./styles/styles";

function App() {

  return (
    <UserProvider>
    <GlobalStyle/>
    <PageTemplate>
      <Link to="/">
        <HomeBtn>Home</HomeBtn>
      </Link>
      <Router/>
    </PageTemplate>
    </UserProvider>
  );
}

export default App;
