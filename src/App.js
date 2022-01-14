import react from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Body from "./components/Body";
import { GlobalStyle } from "./globalStyles";
function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Body/>
    </Router>
  );
}

export default App;
