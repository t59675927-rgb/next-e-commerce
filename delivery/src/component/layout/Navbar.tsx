import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Shop
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6">
          <Link href="/" className="hover:text-gray-600">
            Home
          </Link>
          <Link href="/products" className="hover:text-gray-600">
            Products
          </Link>
        </div>

        {/* Cart */}
        <div className="text-xl cursor-pointer">🛒</div>
      </div>
    </nav>
  );
}
