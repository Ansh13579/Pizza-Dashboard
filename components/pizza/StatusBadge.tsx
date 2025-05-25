import { OrderStatus } from "@/types";

const statusStyles: Record<OrderStatus, { 
  bg: string; 
  text: string; 
  icon: string; 
  ring: string;
  pulse?: boolean;
}> = {
  "Pending": { 
    bg: "bg-gradient-to-r from-yellow-100 to-yellow-200", 
    text: "text-yellow-800", 
    icon: "⏳", 
    ring: "ring-yellow-300",
    pulse: true
  },
  "Preparing": { 
    bg: "bg-gradient-to-r from-blue-100 to-blue-200", 
    text: "text-blue-800", 
    icon: "👨‍🍳", 
    ring: "ring-blue-300",
    pulse: true
  },
  "Out for Delivery": { 
    bg: "bg-gradient-to-r from-purple-100 to-purple-200", 
    text: "text-purple-800", 
    icon: "🚚", 
    ring: "ring-purple-300",
    pulse: true
  },
  "Delivered": { 
    bg: "bg-gradient-to-r from-green-100 to-green-200", 
    text: "text-green-800", 
    icon: "✅", 
    ring: "ring-green-300"
  },
  "Cancelled": { 
    bg: "bg-gradient-to-r from-red-100 to-red-200", 
    text: "text-red-800", 
    icon: "❌", 
    ring: "ring-red-300"
  },
};

export default function StatusBadge({ status }: { status: OrderStatus }) {
  const style = statusStyles[status];
  
  return (
    <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${style.bg} ${style.text} ring-2 ${style.ring} ${
      style.pulse ? 'animate-pulse' : ''
    } transition-all duration-300 hover:scale-105`}>
      <span className="text-base">{style.icon}</span>
      {status}
    </span>
  );
}



