import React from "react";

const SingleProduct = async ({ params }) => {
  const p = await params;
  const id = p.id;
  const res = await fetch(`${process.env.NEXT_URL}/api/single-product/${id}`);
  const data = await res.json();
  console.log(data);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "20px",
        width: "250px",
        textAlign: "center",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
    </div>
  );
};

export default SingleProduct;
