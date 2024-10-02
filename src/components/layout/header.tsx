import Link from "next/link";
import CartDrawer from "./cartDrawer";

export default function Header() {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold">Latest Drops</h2>
      <div className="flex items-center space-x-6">
        <Link href="/all-products" className="hover:underline">
          View all
        </Link>
        <CartDrawer />
      </div>
    </div>
  );
}
