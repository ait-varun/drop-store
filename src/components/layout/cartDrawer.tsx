import { ShoppingCart } from "lucide-react";
import { useCart } from "./cartProvider";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CartButtons from "./cartButtons";
export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, totalItems, totalPrice } =
    useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-4 w-4" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>
        <div className="mt-4 space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <div>
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-sm text-gray-500">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
              <CartButtons
                item={item}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            </div>
          ))}
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold">
            Total: ${totalPrice.toFixed(2)}
          </p>
          <Button className="w-full mt-4">
            <Link href="/cart">View Cart</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
