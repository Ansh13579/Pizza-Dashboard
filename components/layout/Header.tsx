"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const { data: session } = useSession();
  
  return (
    <header className="bg-white shadow-lg border-b-4 border-gradient-to-r from-red-500 to-orange-500 sticky top-0 z-50">
      <div className="max-w-full mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Link href="/dashboard" className="flex items-center space-x-3 group">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-2xl">🍕</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  Pizza Dashboard
                </h1>
                <p className="text-sm text-gray-500">Order Management System</p>
              </div>
            </Link>
          </div>
          
          {/* User Section */}
          {session?.user && (
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3 bg-gray-50 rounded-full px-4 py-2">
                {session.user.image && (
                  <Image
                    src={session.user.image}
                    alt={session.user.name || "User"}
                    width={40}
                    height={40}
                    className="rounded-full ring-2 ring-orange-200"
                  />
                )}
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-700">Welcome back!</p>
                  <p className="text-sm text-gray-500">{session.user.name}</p>
                </div>
              </div>
              
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                <span className="hidden md:inline">Logout</span>
                <span className="md:hidden">🚪</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}






