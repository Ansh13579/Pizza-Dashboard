"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { 
    name: "Dashboard", 
    href: "/dashboard",
    icon: "🏠",
    description: "Overview & Stats"
  },
  { 
    name: "Pizza Orders", 
    href: "/dashboard/pizza-orders",
    icon: "🍕",
    description: "Manage Orders"
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  
  return (
    <div className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen shadow-2xl flex-shrink-0">
      <div className="p-6">
        {/* Navigation Header */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-2">Navigation</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
        </div>
        
        {/* Navigation Items */}
        <nav className="space-y-3">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center space-x-4 px-4 py-4 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white hover:transform hover:scale-102"
                }`}
              >
                <div className={`text-2xl transition-transform duration-300 ${
                  isActive ? "animate-bounce" : "group-hover:scale-110"
                }`}>
                  {item.icon}
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-xs opacity-75">{item.description}</p>
                </div>
                {isActive && (
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                )}
              </Link>
            );
          })}
        </nav>
        
        {/* Bottom Section */}
        <div className="mt-12 p-4 bg-gray-800 rounded-xl border border-gray-700">
          <div className="text-center">
            <span className="text-3xl mb-2 block">📊</span>
            <p className="text-sm text-gray-300">Track your pizza business performance</p>
          </div>
        </div>
      </div>
    </div>
  );
}

