import Router from "./Router";
import { createGlobalStyle } from "styled-components";
import PageTemplate from "./components/PageTemplate";
import { UserProvider } from "./UserContext";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <UserProvider>
    <GlobalStyle/>
    <PageTemplate>
      <Router />
    </PageTemplate>
    </UserProvider>
  );
}

export default App;
