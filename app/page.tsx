"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function LoginPage() {
  const { status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isSigningIn, setIsSigningIn] = useState(false);

  // Show error if redirected with error param
  const error = searchParams.get("error");
  if (error) {
    toast.error("Authentication failed. Please try again.");
  }

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Pizza Dashboard</h1>
          <p className="text-gray-600">Sign in to access your dashboard</p>
        </div>
        <button
          onClick={async () => {
            setIsSigningIn(true);
            try {
              await signIn("google", { callbackUrl: "/dashboard" });
            } catch {
              toast.error("Google sign-in failed.");
              setIsSigningIn(false);
            }
          }}
          className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium rounded-lg px-6 py-3 hover:from-red-600 hover:to-orange-600 transition"
          disabled={isSigningIn}
        >
          {isSigningIn ? (
            <span className="animate-spin h-5 w-5 border-2 border-b-0 border-white rounded-full" />
          ) : (
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              {/* Google logo path */}
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          )}
          {isSigningIn ? "Signing in..." : "Sign in with Google"}
        </button>
      </div>
    </div>
  );
}

