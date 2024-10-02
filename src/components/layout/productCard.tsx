import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Product } from "@/types/store";
import { useCart } from "./cartProvider";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

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
        <h3 className="text-sm font-semibold">{product.title}</h3>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p className="text-sm font-medium">${product.price.toFixed(2)}</p>
        <Button variant="outline" size="sm" onClick={() => addToCart(product)}>
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}
