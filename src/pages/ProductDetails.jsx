import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import ProductItem from "../components/ProductItem";
import { useFetch } from "../hooks/useFetch";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: product, loading, error } =
  useFetch(`https://fakestoreapi.com/products/${id}`);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return null;

  return (
    <div>
        <button onClick={() => navigate(-1)}>
        Go Back
        </button>

      <h2>Product Details</h2>
      <p>Product ID: {id}</p>
      <ProductItem product={product} />
    </div>
  );
}

export default ProductDetails;
