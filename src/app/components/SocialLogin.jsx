// components/SocialLogin.jsx
"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/all-product");
    }
  }, [session?.status]);
  const handleGoogleLogin = async () => {
    try {
      await signIn("google", { redirect: false });
    } catch (err) {
      console.error("Google login failed:", err);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-4">
      <p className="text-gray-600 dark:text-gray-300">Or sign in with</p>
      <button
        onClick={handleGoogleLogin}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                   bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700
                   text-gray-900 dark:text-gray-100 transition"
      >
        <FcGoogle size={24} />
        <span>Sign in with Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
