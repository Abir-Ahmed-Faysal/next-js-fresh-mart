import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

import { authOptions } from "@/lib/authOptions";
import AddProduct from "./components/AddProduct";

export default async function AddProductPage() {
  const session = await getServerSession(authOptions);
  



  if (!session) {
    redirect("/login");
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Add Product</h1>
      <AddProduct  />
    </div>
  );
}
