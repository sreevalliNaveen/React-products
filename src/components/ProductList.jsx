const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Tablet" },
];

function ProductList() {
  return (
    <div>
      {products.map((p)=>(
        <div key={p.id}>{p.name} </div>
      ))}
    </div>
  );
}

export default ProductList;
