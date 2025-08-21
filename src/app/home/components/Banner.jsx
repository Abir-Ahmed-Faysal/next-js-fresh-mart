// Banner.jsx
import Button from "@/app/components/Button";
import React from "react";

const Banner = () => {
  const backgroundUrl = "url('https://i.ibb.co/HTB3kJVP/jonathan-cooper-9-Cio-BQ7doxs-unsplash.jpg')";

  return (
    <div
      className="w-full h-[60vh] md:h-[70vh] relative flex flex-col justify-center items-start px-6 md:px-20 bg-cover bg-center"
      style={{ backgroundImage: backgroundUrl }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Welcome to Fresh Mart
        </h1>
        <p className="mt-2 md:mt-4 text-lg md:text-2xl text-white">
          Fresh groceries and best deals delivered to your door.
        </p>
        <Button pathname={"/all-product"} btnText={"Shop Now"} />
      </div>
    </div>
  );
};

export default Banner;
