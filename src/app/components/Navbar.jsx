"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Products", path: "/all-product" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  // Update HTML class whenever theme changes
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    if (theme === "dark") document.documentElement.classList.add("dark");
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="font-bold text-xl text-gray-900 dark:text-white">
          MyBrand
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 ${
                pathname.startsWith(link.path)
                  ? "font-bold text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="px-2 py-1 rounded-md bg-gray-200 dark:bg-gray-700"
          >
            {theme === "light" ? "🌞" : "🌙"}
          </button>

          {/* Auth */}
          {status === "authenticated" ? (
            <div className="flex items-center space-x-2">
              <Image
                src={session?.user?.image || "/avatar.png"}
                alt="User Avatar"
                width={40}
                height={40}
                className="rounded-full border-2 border-gray-300 dark:border-gray-600"
              />
              <button
                onClick={() => signOut()}
                aria-label="Log out"
                className="px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600"
              >
                Log out
              </button>
            </div>
          ) : (
            <button
              onClick={() => router.push("/login")}
              aria-label="Log in"
              className="px-3 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600"
            >
              Log in
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden px-2 py-1 rounded-md bg-gray-200 dark:bg-gray-700"
            aria-label="Toggle Menu"
          >
            {menuOpen ? "✖️" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 shadow-md px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 ${
                pathname.startsWith(link.path)
                  ? "font-bold text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
