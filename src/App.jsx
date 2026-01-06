import { Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";

function App(){
  return(
    <div>
      <h1>Product App</h1>

      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
    </div>
  )
}

export default App;