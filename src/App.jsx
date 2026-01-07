import { Link, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import Home from "./pages/Home";

function App(){
  return(
    <div>
      <h1>Product App</h1>

     

      <nav>
        <Link to="/"> Home </Link>| {" "}
        <Link to="/products"> Products </Link>
      </nav>
      
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </div>
  )
}

export default App;