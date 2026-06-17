import { Product } from "../../types/product";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-md transition">
      {/* Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="font-semibold text-lg">{product.title}</h2>

        <p className="text-gray-600 mt-2">${product.price}</p>
      </div>
    </div>
  );
}
