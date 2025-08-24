"use client";

import { useState } from "react";

export default function AddProduct() {
  const [food, setFood] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const handleChange = (e) =>
    setFood({ ...food, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    
  
    try {
      const res = await fetch(`https://freshmart-psi.vercel.app/api/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(food),
      });

      if (res.ok) {
       
       
        alert('Product added successfully!');
        setFood({ name: "", description: "", price: "", category: "", image: "" });
      } else {
        const errorData = await res.json();
        console.error(errorData);
        alert('Failed to add product.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-black p-6 transition-colors duration-500">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white dark:bg-gray-900 shadow-2xl rounded-2xl p-8 space-y-6 border border-gray-100 dark:border-gray-700 transition-colors duration-500"
      >
        <h2 className="text-3xl font-extrabold text-center text-gray-800 dark:text-gray-100">
          Add New Product
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
          Fill out the details below to add your product
        </p>

        {/* Name */}
        <div>
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
            Product Name
          </label>
          <input
            name="name"
            value={food.name}
            onChange={handleChange}
            placeholder="Enter product name"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
            Price ($)
          </label>
          <input
            type="number"
            name="price"
            value={food.price}
            onChange={handleChange}
            placeholder="Enter price"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
            Category
          </label>
          <select
            name="category"
            value={food.category}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          >
            <option value="">Select category</option>
            <option value="Dairy">Dairy</option>
            <option value="Fruits">Fruits</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Snacks">Snacks</option>
            <option value="Drinks">Drinks</option>
          </select>
        </div>

        {/* Image */}
        <div>
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
            Image URL
          </label>
          <input
            name="image"
            value={food.image}
            onChange={handleChange}
            placeholder="Paste image URL"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
            Description
          </label>
          <textarea
            name="description"
            value={food.description}
            onChange={handleChange}
            placeholder="Write a short description"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            rows="4"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold text-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
