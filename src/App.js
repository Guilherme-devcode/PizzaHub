import react from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Body from "./components/Body";
import { productData, productDataDois } from "./components/Products/data";
import Products from "./components/Products";
import { GlobalStyle } from "./globalStyles";
import Feature from "./components/Feature";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Body/>
      <Products heading='Escolha seu pedido' data={productData}/>
      <Feature/>
      <Products heading='Sobremesas para você!' data={productDataDois}/>
    </Router>
  );
}

export default App;
