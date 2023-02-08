import Router from "./Router";
import { createGlobalStyle } from "styled-components";
import PageTemplate from "./components/PageTemplate";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
    <GlobalStyle/>
    <PageTemplate>
      <Router />
    </PageTemplate>
    </>
  );
}

export default App;
