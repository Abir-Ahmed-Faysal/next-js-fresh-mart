// app/dashboard/layout.js
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { authOptions } from "@/lib/authOptions";
import { cn } from "@/lib/utils"; // optional helper for conditional classes
import { LogOut, PlusCircle, Home, ShoppingBag } from "lucide-react";

export default async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const navLinks = [
    { href: "/dashboard", label: "Overview", icon: Home },
    { href: "/dashboard/add-product", label: "Add Product", icon: PlusCircle },
    { href: "/", label: "My Products", icon: ShoppingBag },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg p-4 flex flex-col">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Dashboard
        </h2>
        <nav className="flex-1 space-y-2">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg transition",
                "text-gray-700 hover:bg-gray-100 hover:text-blue-600",
                "dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-blue-400"
              )}
            >
              <Icon className="w-5 h-5" />
              <span>{label}</span>
            </Link>
          ))}
        </nav>

        {/* Footer (logout) */}
        <div className="mt-auto">
          <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg transition font-medium
            text-red-600 hover:bg-red-50
            dark:text-red-400 dark:hover:bg-red-900/30">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 text-gray-900 dark:text-gray-100">
        {children}
      </main>
    </div>
  );
}
