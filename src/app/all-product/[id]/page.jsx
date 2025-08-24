import React from "react";

const SingleProduct = async ({ params }) => {
  const p = await params;
  const id = p.id;
  const res = await fetch(`https://freshmart-psi.vercel.app/api/single-product/${id}`);
  const data = await res.json();



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
        src={data?.image}
        alt={data?.name}
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <h2>{data?.name}</h2>
      <p>{data?.description}</p>
      <p>
        <strong>Category:</strong> {data?.category}
      </p>
      <p>
        <strong>Price:</strong> ${data?.price}
      </p>
    </div>
  );
};

export default SingleProduct;
