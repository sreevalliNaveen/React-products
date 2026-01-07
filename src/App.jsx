import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductsLayout from "./pages/ProductsLayout";
import ProductList from "./components/ProductList";
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
        <Route path="/products" element={<ProductsLayout />}>
          <Route index element={<ProductList />} />
          <Route path=":id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;