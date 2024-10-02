"use client";

import Link from "next/link";
import { Product } from "@/types/store";
import ProductCard from "./productCard";
import CartDrawer from "./cartDrawer";
import useGetQuery from "@/hooks/useGetQuery";

export default function Store() {
  // const [products, setProducts] = useState<Product[]>([]);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch("https://fakestoreapi.com/products/?limit=8")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching products:", error);
  //       setIsLoading(false);
  //       throw new Error("Failed to Get products");
  //     });
  // }, []);

  const {
    data: products,
    isLoading,
    error,
  } = useGetQuery<Product[]>("https://fakestoreapi.com/products/?limit=8");

  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-10 bg-background shadow-md transition-shadow duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Drop Store</h1>
            <div className="flex items-center space-x-4">
              <Link href="/all-products" className="hover:underline">
                View All
              </Link>
              <CartDrawer />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-xl">Loading products...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
