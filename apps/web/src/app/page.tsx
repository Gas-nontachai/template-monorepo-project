"use client";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <Button variant="warning" href="/products">
        next
      </Button>
    </div>
  );
}
