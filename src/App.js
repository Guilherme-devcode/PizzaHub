import react from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Body from "./components/Body";
import { productData } from "./components/Products/data";
import Products from "./components/Products";
import { GlobalStyle } from "./globalStyles";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Body/>
      <Products heading='Escolha seu pedido' data={productData}/>
    </Router>
  );
}

export default App;
