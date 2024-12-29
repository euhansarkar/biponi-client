/* eslint-disable @typescript-eslint/no-empty-object-type */
import { cn } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";

interface CartProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Cart({ className }: CartProps) {
  return (
    <div className={cn("w-80", className)}>
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-bold">Cart</h2>
        <div className="flex flex-col items-center justify-center space-y-4 py-12">
          <div className="rounded-full bg-gray-100 p-3">
            <ShoppingCart className="h-6 w-6 text-gray-400" />
          </div>
          <p className="text-center text-gray-500">
            Your cart is currently empty
          </p>
        </div>
      </div>
    </div>
  );
}
