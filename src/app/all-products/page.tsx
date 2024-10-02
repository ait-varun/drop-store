"use client";
import CartDrawer from "@/components/layout/cartDrawer";
import ProductCard from "@/components/layout/productCard";
import { Product } from "@/types/store";
import Link from "next/link";
import useGetQuery from "@/hooks/useGetQuery";

export default function AllProducts() {
  const {
    data: products,
    isLoading,
    error,
  } = useGetQuery<Product[]>("https://fakestoreapi.com/products");

  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-10 bg-background shadow-md transition-shadow duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">All Products</h1>
            <div className="flex items-center space-x-4">
              <Link href="/" className="hover:underline">
                Home
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
        {error && (
          <div className="w-full max-w-2xl max-h-48 overflow-auto bg-white/50 rounded-lg p-4 shadow-inner">
            <p className="text-lg sm:text-2xl font-bold text-red-600 break-words">
              {error.message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
