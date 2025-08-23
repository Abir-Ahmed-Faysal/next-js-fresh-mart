"use client";
import { useState } from "react";

export default function AddProduct() {
  const [food, setFood] = useState({ name: "", price: "" });

  const handleChange = e => setFood({ ...food, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    console.log(food);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={food.name} onChange={handleChange} placeholder="Name" />
      <input name="price" value={food.price} onChange={handleChange} placeholder="Price" />
      <button type="submit">Add</button>
    </form>
  );
}
