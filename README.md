# Fresh Mart 🛒

[![Website](https://img.shields.io/badge/Website-Live-brightgreen)](https://freshmart-psi.vercel.app/)  
[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/Abir-Ahmed-Faysal/next-js-fresh-mart)  
[![License](https://img.shields.io/badge/License-MIT-blueviolet)](LICENSE)

Fresh Mart is a modern **supershop web application** built with **Next.js**. Users can browse products, view detailed information, and authenticated users can add new products. The project integrates **NextAuth.js** for authentication and **MongoDB** for data storage.

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Project Structure & Routes](#project-structure--routes)  
- [Optional Enhancements](#optional-enhancements)  
- [Live Demo](#live-demo)  
- [License](#license)  

---

## Project Overview

Fresh Mart is a fully responsive supershop website with **three main sections**:

| Section | Route | Description |
|---------|-------|-------------|
| Home | `/` | Banner, featured products, newsletter signup |
| Products | `/products` | Lists all products from database |
| Dashboard | `/dashboard` | Authenticated users can add new products |

**Key functionalities:**

- Browse product listings  
- View detailed product information  
- Social or credentials-based login  
- Add new products (protected route)

Built with **Next.js 15 App Router**, **Tailwind CSS**, and **NextAuth.js** for authentication.

---

## Features

### Core Features

1. **Home Page (`/`)**
   - Navbar, Hero section, Featured Products, Newsletter signup, Footer  
   - Publicly accessible

2. **Login Page (`/login`)**
   - Authentication with **NextAuth.js** (Google or credentials)  
   - Redirects to `/products` after login

3. **Products Page (`/products`)**
   - Publicly accessible  
   - Displays product data from database  
   - Each product shows: name, description, price, details button

4. **Product Details Page (`/products/[id]`)**
   - Publicly accessible  
   - Shows full details of a single product

5. **Dashboard / Add Product Page (`/dashboard/add-product`)**
   - Only accessible to authenticated users  
   - Form to add new products to database  
   - Redirects unauthenticated users to `/login`

---

## Optional Enhancements

- Loading spinner during form submissions  
- Toast notifications for actions  
- Theme toggle (light/dark mode)  

---

## Technologies Used

- **Frontend:** Next.js 15, React 19.1, Tailwind CSS 4.1  
- **Authentication:** NextAuth.js 4.24  
- **Database:** MongoDB 6.18  
- **UI Libraries:** Radix UI, Lucide React, React Icons  
- **Utilities:** React Hot Toast, Tailwind Merge  
- **Backend:** Express.js / Next.js API Route Handlers  

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
