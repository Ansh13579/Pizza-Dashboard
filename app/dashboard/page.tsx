"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function DashboardPage() {
  const { data: session } = useSession();
  
  const stats = [
    {
      title: "Today's Orders",
      value: "5",
      icon: "📊",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      change: "+12%",
      changeType: "increase"
    },
    {
      title: "Delivered",
      value: "3",
      icon: "✅",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      change: "+8%",
      changeType: "increase"
    },
    {
      title: "Pending",
      value: "2",
      icon: "⏳",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
      change: "-5%",
      changeType: "decrease"
    },
    {
      title: "Out for Delivery",
      value: "1",
      icon: "🚚",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      change: "+3%",
      changeType: "increase"
    },
  ];
  
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-white shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">
              Hello, {session?.user?.name || "User"}! 👋
            </h1>
            <p className="text-xl opacity-90 mb-4">
              Welcome to your pizza dashboard. Let's make today delicious!
            </p>
            <div className="flex items-center space-x-2 text-orange-100">
              <span className="text-lg">🍕</span>
              <span>Manage your pizza orders and view real-time statistics</span>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="text-8xl opacity-20">🍕</div>
          </div>
        </div>
      </div>
      
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={stat.title}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 hover:transform hover:scale-105 border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div className={`text-sm px-2 py-1 rounded-full ${
                stat.changeType === 'increase' 
                  ? 'bg-green-100 text-green-600' 
                  : 'bg-red-100 text-red-600'
              }`}>
                {stat.change}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
              <p className={`text-3xl font-bold ${stat.textColor}`}>{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Main Action Card */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
          <div className="text-center">
            <div className="text-6xl mb-4">🍕</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h2>
            <p className="text-gray-600 mb-6">
              Access your most important features with one click
            </p>
            <Link
              href="/dashboard/pizza-orders"
              className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
            >
              <span>🍕</span>
              <span>View All Pizza Orders</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="mr-2">📈</span>
            Recent Activity
          </h3>
          <div className="space-y-4">
            {[
              { action: "New order received", time: "2 minutes ago", icon: "🆕" },
              { action: "Order delivered", time: "15 minutes ago", icon: "✅" },
              { action: "Payment confirmed", time: "1 hour ago", icon: "💳" },
              { action: "Order prepared", time: "2 hours ago", icon: "👨‍🍳" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <span className="text-xl">{activity.icon}</span>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}











