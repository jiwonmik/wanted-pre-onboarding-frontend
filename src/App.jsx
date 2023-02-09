import { UserProvider } from "./context/UserContext";
import Router from "./Routes/Router";
import PageTemplate from "./PageTemplate";
import { GlobalStyle } from "./styles/styles";

function App() {

  return (
    <UserProvider>
    <GlobalStyle/>
    <PageTemplate>
      <Router/>
    </PageTemplate>
    </UserProvider>
  );
}

export default App;
