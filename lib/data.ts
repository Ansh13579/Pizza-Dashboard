import { PizzaOrder } from "@/types";

export const pizzaOrders: PizzaOrder[] = [
  {
    id: "PZA001",
    customerName: "John Doe",
    pizzaType: "Margherita",
    quantity: 2,
    orderDate: "2025-05-20 14:30",
    status: "Delivered",
  },
  {
    id: "PZA002",
    customerName: "Jane Smith",
    pizzaType: "Pepperoni",
    quantity: 1,
    orderDate: "2025-05-21 12:15",
    status: "Preparing",
  },
  {
    id: "PZA003",
    customerName: "Robert Johnson",
    pizzaType: "Veggie Supreme",
    quantity: 3,
    orderDate: "2025-05-21 18:45",
    status: "Out for Delivery",
  },
  {
    id: "PZA004",
    customerName: "Emily Davis",
    pizzaType: "Hawaiian",
    quantity: 2,
    orderDate: "2025-05-22 10:00",
    status: "Pending",
  },
  {
    id: "PZA005",
    customerName: "Michael Brown",
    pizzaType: "BBQ Chicken",
    quantity: 1,
    orderDate: "2025-05-22 11:30",
    status: "Cancelled",
  },
];


