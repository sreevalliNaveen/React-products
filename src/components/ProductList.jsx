import { useState } from "react";
import ProductItem from "./ProductItem";

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Tablet" },
];

function ProductList() {
  const [showProducts, setShowProducts] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  function handleSelect(name){
    setSelectedProduct(name);
  }
  return (
    <div>
      <button onClick={()=>setShowProducts(!showProducts)}>{!showProducts ? "Show" :"Hide"}</button>
      {showProducts && products.map((product)=>(
        <ProductItem 
          key={product.id} 
          name={product.name} 
          isSelected={selectedProduct === product.name}
          onSelect={handleSelect} 
          disabled={!showProducts}
        />
      ))}
    </div>
  );
}

export default ProductList;
