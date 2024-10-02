"use client";

import { useCart } from "@/components/layout/cartProvider";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p>
          Your cart is empty.{" "}
          <Link href="/" className="text-blue-600 hover:underline">
            Continue shopping
          </Link>
        </p>
      ) : (
        <div>
          {" "}
          <div className="space-y-8">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center space-x-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-gray-500">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }>
                      -
                    </Button>
                    <span>{item.quantity}</span>
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }>
                      +
                    </Button>
                  </div>
                  <Button
                    variant="destructive"
                    onClick={() => removeFromCart(item.id)}>
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <p className="text-2xl font-semibold">
              Total: ${totalPrice.toFixed(2)}
            </p>
            <Button className="mt-4">Proceed to Checkout</Button>
          </div>
        </div>
      )}
    </div>
  );
}
