"use client";
import { Suspense } from "react";
import LoginInner from "app/LoginInner";

export default function Page() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center">Loading...</div>}>
      <LoginInner />
    </Suspense>
  );
}


