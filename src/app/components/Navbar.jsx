"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Products", path: "/all-product" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  const pathname = usePathname();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        {/* Logo */}
        <div className="font-bold text-xl text-gray-900 dark:text-white">
          MyBrand
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 ${
                pathname === link.path
                  ? "font-bold text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Section: Theme toggle + Avatar */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="px-2 py-1 rounded-md bg-gray-200 dark:bg-gray-700"
          >
            {theme === "light" ? "🌞" : "🌙"}
          </button>
          <img
            src="/avatar.png" 
            alt="User Avatar"
            className="w-10 h-10 rounded-full border-2 border-gray-300 dark:border-gray-600"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
