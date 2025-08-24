import dbConnect from "@/lib/mongodbConnnect";

export default async function Products() {
  const data = await dbConnect("products").find().limit(8).toArray();

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
      {data.map((product) => (
        <div
          key={product.id}
          className="border border-gray-300 rounded-lg shadow-md p-4 flex flex-col"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>
          <p className="text-gray-800 font-medium">
            <span className="font-bold">Price:</span> {product.price} BDT
          </p>
          <p className="text-gray-800 font-medium">
            <span className="font-bold">Category:</span> {product.category}
          </p>
        </div>
      ))}
    </div>
  );
}
