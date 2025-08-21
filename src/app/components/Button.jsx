"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Button = ({ btnText, pathname }) => {
    const currentPathname=usePathname()
  const router = useRouter();

  const handleButtonClick = () => {
    
    if (currentPathname === "/") {
      router.push(pathname);
    }
  };

  return (
    <button
      onClick={handleButtonClick}
      className="mt-4 md:mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition"
    >
      {btnText}
    </button>
  );
};

export default Button;
