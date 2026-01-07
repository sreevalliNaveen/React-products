import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductsLayout from "./pages/ProductsLayout";
import ProductList from "./components/ProductList";
import ProductDetails from "./pages/ProductDetails";

function App(){
  return(
    <div>
      <h1>Product App</h1>

     

      <nav>
        <NavLink to="/" end> Home </NavLink>| {" "}
        <NavLink  to="/products"> Products </NavLink >
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