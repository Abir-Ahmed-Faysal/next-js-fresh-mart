# Fresh Mart
website: https://freshmart-psi.vercel.app/
github: https://github.com/Abir-Ahmed-Faysal/next-js-fresh-mart

Fresh Mart is a modern **supershop web application** built with **Next.js**. Users can browse products, view detailed information, and authenticated users can add new products to the store. The application integrates **NextAuth.js** for authentication and uses a database to store product data.  

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Installation & Setup](#installation--setup)  
- [Project Structure & Routes](#project-structure--routes)  
- [Optional Enhancements](#optional-enhancements)  
- [Live Demo](#live-demo)  
- [License](#license)  

---

## Project Overview

Fresh Mart is a fully responsive supershop website where users can:

- Browse a list of products.
- View detailed information about each product.
- Log in using social or credential-based authentication.
- Add new products (protected route).

The website is designed with **Next.js 15 App Router**, **Tailwind CSS**, and **NextAuth.js** for authentication.  

---

## Features

### Core Features

1. **Landing Page (`/`)**
   - Sections: Navbar, Hero, Product Highlights, Footer
   - Navigation to login and products
   - Publicly accessible (no authentication required)

2. **Login Page (`/login`)**
   - Authentication with **NextAuth.js** (Google or credentials)
   - Redirects to `/products` after successful login

3. **Product List Page (`/products`)**
   - Publicly accessible
   - Fetch and display products from a mock backend or database
   - Each product includes: name, description, price, and details button

4. **Product Details Page (`/products/[id]`)**
   - Publicly accessible
   - Displays full details of a single product

5. **Protected Add Product Page (`/dashboard/add-product`)**
   - Only accessible to authenticated users
   - Form to add a new product to the database
   - Redirects unauthenticated users to `/login`

---

## Optional Enhancements

- Loading spinner during form submissions
- Toast notifications for successful actions
- Theme toggle (light/dark mode)

---

## Technologies Used

- **Next.js 15** (App Router)  
- **React 19.1**  
- **Tailwind CSS 4.1**  
- **NextAuth.js 4.24**  
- **MongoDB 6.18**  
- **Radix UI, Lucide React, React Icons**  
- **React Hot Toast**  
- **Express.js / Next.js API Route Handlers** (for backend)

**Dependencies Overview:**

```text
@eslint/eslintrc@3.3.1
@radix-ui/react-label@2.1.7
@radix-ui/react-slot@1.2.3
@class-variance-authority@0.7.1
@tailwindcss/postcss@4.1.12
clsx@2.1.1
eslint-config-next@15.5.0
eslint@9.34.0
lucide-react@0.540.0
mongodb@6.18.0
next-auth@4.24.11
next@15.5.0
react-dom@19.1.0
react-hot-toast@2.6.0
react-icons@5.5.0
react@19.1.0
tailwind-merge@3.3.1
tailwindcss@4.1.12
tw-animate-css@1.3.7
