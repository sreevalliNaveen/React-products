import { memo } from "react";

function ProductItem({ product }) {
  return (
    <div>
      <h4>{product.title}</h4>
      <p>₹{product.price}</p>
    </div>
  );
}

export default memo(ProductItem);
