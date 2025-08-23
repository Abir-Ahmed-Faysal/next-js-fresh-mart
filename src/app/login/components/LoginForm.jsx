"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { sendDb } from "@/app/actions/auth/regsisterUser";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function LoginForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signIn("credentials", {
        email: form.email,
        password: form.password,
        // callbackUrl: "/",
        redirect: false,
      });
      if (response.ok) {
        router.push("/");
        e.target.reset()
      } else {
        alert("auth error");
      }
    } catch (err) {
      alert("auth failed");
      console.log(err);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
          required
        />
      </div>

      <Button type="submit" className="w-full mt-4 rounded-xl">
        Login
      </Button>

      <p className="text-center text-sm text-gray-600 mt-3">
        New!Create your account
        <a
          href="/register"
          className="text-indigo-600 font-medium hover:underline"
        >
          Register
        </a>
      </p>
    </form>
  );
}
