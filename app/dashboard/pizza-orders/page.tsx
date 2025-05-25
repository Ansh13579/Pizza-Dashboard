import { pizzaOrders } from "@/lib/data";
import OrdersTable from "@/components/pizza/OrdersTable";

export default function PizzaOrdersPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2 flex items-center">
              <span className="mr-4 text-5xl">🍕</span>
              Pizza Orders
            </h1>
            <p className="text-xl opacity-90">
              Manage and track all your delicious pizza orders
            </p>
          </div>
          <div className="hidden lg:block text-8xl opacity-20">
            📊
          </div>
        </div>
      </div>
      
      {/* Orders Table */}
      <OrdersTable orders={pizzaOrders} />
    </div>
  );
}


