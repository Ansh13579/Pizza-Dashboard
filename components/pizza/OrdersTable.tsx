"use client";

import { useState, useMemo } from "react";
import { PizzaOrder, OrderStatus } from "@/types";
import StatusBadge from "./StatusBadge";

type SortField = "id" | "orderDate";
type SortDirection = "asc" | "desc";

interface OrdersTableProps {
  orders: PizzaOrder[];
}

export default function OrdersTable({ orders }: OrdersTableProps) {
  const [sortField, setSortField] = useState<SortField>("orderDate");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
  const [statusFilter, setStatusFilter] = useState<OrderStatus | "All">("All");
  
  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };
  
  const filteredAndSortedOrders = useMemo(() => {
    let result = [...orders];
    
    if (statusFilter !== "All") {
      result = result.filter((order) => order.status === statusFilter);
    }
    
    result.sort((a, b) => {
      if (sortField === "id") {
        return sortDirection === "asc"
          ? a.id.localeCompare(b.id)
          : b.id.localeCompare(a.id);
      } else {
        return sortDirection === "asc"
          ? new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime()
          : new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime();
      }
    });
    
    return result;
  }, [orders, statusFilter, sortField, sortDirection]);
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b border-gray-200">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="mb-4 lg:mb-0">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center">
              <span className="mr-3 text-3xl">🍕</span>
              Pizza Orders
            </h3>
            <p className="text-gray-600 mt-1">
              Showing {filteredAndSortedOrders.length} of {orders.length} orders
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <label htmlFor="status-filter" className="text-sm font-medium text-gray-700">
                Filter by status:
              </label>
              <select
                id="status-filter"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as OrderStatus | "All")}
                className="border-2 border-gray-300 rounded-lg text-sm px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white shadow-sm min-w-[160px]"
              >
                <option value="All">All Statuses</option>
                <option value="Pending">⏳ Pending</option>
                <option value="Preparing">👨‍🍳 Preparing</option>
                <option value="Out for Delivery">🚚 Out for Delivery</option>
                <option value="Delivered">✅ Delivered</option>
                <option value="Cancelled">❌ Cancelled</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gradient-to-r from-gray-800 to-gray-900">
            <tr>
              <th
                scope="col"
                className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider cursor-pointer hover:bg-gray-700 transition-colors"
                onClick={() => handleSort("id")}
              >
                <div className="flex items-center space-x-2">
                  <span>Order ID</span>
                  {sortField === "id" && (
                    <span className="text-orange-400 text-lg">
                      {sortDirection === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </div>
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                Customer
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                Pizza Type
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                Quantity
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider cursor-pointer hover:bg-gray-700 transition-colors"
                onClick={() => handleSort("orderDate")}
              >
                <div className="flex items-center space-x-2">
                  <span>Order Date</span>
                  {sortField === "orderDate" && (
                    <span className="text-orange-400 text-lg">
                      {sortDirection === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </div>
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredAndSortedOrders.map((order, index) => (
              <tr 
                key={order.id} 
                className="hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-bold text-gray-900 bg-gray-100 px-3 py-1 rounded-full inline-block">
                    {order.id}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {order.customerName.charAt(0)}
                    </div>
                    <div className="text-sm font-medium text-gray-900">{order.customerName}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="text-lg mr-2">🍕</span>
                    <span className="text-sm font-medium text-gray-900">{order.pizzaType}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-bold text-gray-900 bg-blue-100 px-3 py-1 rounded-full inline-block">
                    {order.quantity}x
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">
                  {order.orderDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={order.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Empty State */}
      {filteredAndSortedOrders.length === 0 && (
        <div className="py-16 text-center">
          <div className="text-8xl mb-4">🍕</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No orders found</h3>
          <p className="text-gray-500">No orders match the selected filter criteria.</p>
        </div>
      )}
    </div>
  );
}
