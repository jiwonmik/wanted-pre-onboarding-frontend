import Router from "./Routes/Router";
import PageTemplate from "./PageTemplate";
import { UserProvider } from "./context/UserContext";
import { GlobalStyle, HomeBtn } from "./styles/styles";
import { Link } from "react-router-dom";

function App() {
  return (
    <UserProvider>
    <GlobalStyle/>
    <PageTemplate>
      <Link to="/">
        <HomeBtn>Home</HomeBtn>
      </Link>
      <Router />
    </PageTemplate>
    </UserProvider>
  );
}

export default App;
