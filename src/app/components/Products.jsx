import dbConnect from "@/lib/mongodbConnnect";

export default async function Products() {
  const data = await dbConnect("products").find().toArray();

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {data.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "10px",
            width: "200px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>
            <strong>Price:</strong> {product.price} BDT
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
        </div>
      ))}
    </div>
  );
}
