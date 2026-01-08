import { useState } from "react";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";


function ProductList() {
  const [showProducts, setShowProducts] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { data: products, loading, error } =
    useFetch("https://fakestoreapi.com/products");
     if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!products) return null;
  
  
  return (
    <div>
      <button onClick={()=>setShowProducts(!showProducts)}>{!showProducts ? "Show" :"Hide"}</button>
      {showProducts && products.map((product)=>(
        <Link 
          key={product.id}
          to={`/products/${product.id}`}
          style={{ display: "block" }}>
          <ProductItem 
            product={product}
          />
        </Link>
      ))}
    </div>
  );
}

export default ProductList;
