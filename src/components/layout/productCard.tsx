import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Product } from "@/types/store";
import { useCart } from "./cartProvider";
import CartButtons from "./cartButtons";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, cart, updateQuantity, removeFromCart } = useCart();
  const cartItem = cart.find((item) => item.id === product.id);

  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <div className="aspect-square relative mb-4">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <h3 className="text-sm font-semibold line-clamp-2">{product.title}</h3>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p className="text-sm font-medium">${product.price.toFixed(2)}</p>
        {cartItem && cartItem.quantity > 0 ? (
          <CartButtons
            updateQuantity={updateQuantity}
            item={cartItem}
            removeFromCart={removeFromCart}
          />
        ) : (
          <Button
            variant="outline"
            size="sm"
            onClick={() => addToCart(product)}>
            Add to cart
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
