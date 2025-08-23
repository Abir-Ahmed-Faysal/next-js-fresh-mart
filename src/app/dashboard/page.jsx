// app/dashboard/layout.js
import { getServerSession } from "next-auth/next";

import { redirect } from "next/navigation";
import Link from "next/link";
import { authOptions } from "@/lib/authOptions";

export default async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 p-4">
        <h2>Dashboard</h2>
        <nav>
          <Link href="/dashboard/add-product">Add Product</Link>
        </nav>
      </aside>
      <main>{children}</main>
    </div>
  );
}
