import React from "react";
import Image from "next/image";
import Button from "../components/Button";

const All_Product = async () => {
  // Fetch with ISR (revalidate every 60s)
  const res = await fetch(`${process.env.NEXT_URL}/api/all-product`, {
    next: { revalidate: 60, cache: "force-cache" },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const products = await res.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {products.map((item) => (
        <div
          key={item._id}
          className="border rounded-xl shadow-md p-4 hover:shadow-lg transition"
        >
          <Image
            src={item.image}
            alt={item.name}
            width={400}
            height={250}
            className="rounded-lg object-cover"
          />
          <h2 className="text-xl font-semibold mt-2">{item.name}</h2>
          <p className="text-gray-600 text-sm">{item.description}</p>
          <p className="mt-2 font-bold text-lg">$ {item.price}</p>
          <p className="text-sm text-gray-500">Category: {item.category}</p>
          <Button btnText={'show details'} pathname={`/all-product/${item._id}`}></Button>
        </div>
      ))}
    </div>
  );
};

export default All_Product;
