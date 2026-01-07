import { useParams,useNavigate } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
        <button onClick={() => navigate(-1)}>
        Go Back
        </button>

      <h2>Product Details</h2>
      <p>Product ID: {id}</p>
    </div>
  );
}

export default ProductDetails;
