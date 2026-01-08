import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import ProductItem from "../components/ProductItem";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading,setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const[error, setError] = useState(null);

  useEffect(()=>{
    setLoading(true);
    setError(null);

    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res =>{
        if(!res.ok) throw new Error("Failed"); 
        return res.json();
    })
    .then(data => setProduct(data))
    .catch(err => setError(err.message))
    .finally(()=> setLoading(false))
  },[id])
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
