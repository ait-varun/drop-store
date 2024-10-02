import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Product } from "@/types/store";
import { useCart } from "./cartProvider";
import CartButtons from "./cartButtons";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, cart, updateQuantity, removeFromCart } = useCart();
  const cartItem = cart.find((item) => item.id === product.id);

  const keyStr =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  const triplet = (e1: number, e2: number, e3: number) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63);

  const rgbDataURL = (r: number, g: number, b: number) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${
      triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

  return (
    <Card className="w-full">
      <CardContent className="">
        <div className="aspect-square relative mb-4 mt-4">
          <Image
            src={product.image}
            alt={product.title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL={rgbDataURL(131, 131, 131)}
            fill
            className="contain rounded-md"
          />
        </div>
        <h3 className="text-sm font-semibold line-clamp-2 md:h-10">
          {product.title}
        </h3>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p className="text-sm font-medium md:mr-1">
          ${product.price.toFixed(2)}
        </p>
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
