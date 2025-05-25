import { AuthProvider } from "@/lib/auth";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pizza Dashboard",
  description: "A Next.js dashboard for pizza orders",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gray-50"}>
        <AuthProvider>
          {/* Global toast notifications */}
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                fontSize: "1rem",
                borderRadius: "0.5rem",
                background: "#fff",
                color: "#222",
                boxShadow: "0 2px 12px 0 rgba(0,0,0,0.08)",
              },
              success: {
                style: {
                  background: "#e6fffa",
                  color: "#22543d",
                },
              },
              error: {
                style: {
                  background: "#fff5f5",
                  color: "#c53030",
                },
              },
            }}
          />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}


