import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductsLayout from "./pages/ProductsLayout";
import ProductList from "./components/ProductList";
import ProductDetails from "./pages/ProductDetails";
import ErrorPage from "./pages/ErrorPage";

function App(){
  return(
    <div>
      <h1>Product App</h1>

     

      <nav>
        <NavLink to="/" end> Home </NavLink>| {" "}
        <NavLink  to="/products"> Products </NavLink >
      </nav>
      
        <Routes>

          <Route 
            path="/" 
            element={<Home />} />
          <Route 
            path="/products" 
            element={<ProductsLayout /> } 
            errorElement={<ErrorPage />} >
            <Route 
              index 
              element={<ProductList />} />
            <Route 
              path=":id" 
              element={<ProductDetails />} />
          </Route>
          <Route 
            path="*" 
            element={<p>Page not found</p>} />
      </Routes>
    </div>
  )
}

export default App;