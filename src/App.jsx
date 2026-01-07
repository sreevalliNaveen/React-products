import { Link, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

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
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  )
}

export default App;