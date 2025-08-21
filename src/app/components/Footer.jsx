import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-6">
        
        {/* Brand */}
        <div className="flex flex-col space-y-2">
          <div className="font-bold text-xl">MyBrand</div>
          <p className="text-sm">Building quality products for your needs.</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold">Quick Links</h3>
          <Link href="/">Home</Link>
          <Link href="/all-product">Products</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Social Media */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold">Follow Us</h3>
          <div className="flex space-x-3">
            <a href="#" className="hover:text-blue-600">Facebook</a>
            <a href="#" className="hover:text-blue-400">Twitter</a>
            <a href="#" className="hover:text-pink-500">Instagram</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} MyBrand. All rights reserved.
      </div>
    </footer>
  );
}
