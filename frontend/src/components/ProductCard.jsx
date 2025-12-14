// Reusable card component to show a single product

import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full rounded-t-2xl object-cover"
        />
      </Link>
      <div className="flex flex-1 flex-col px-4 py-3">
        <h3 className="line-clamp-2 text-sm font-semibold text-gray-800">
          {product.name}
        </h3>
        <p className="mt-1 text-xs text-gray-500">{product.brand}</p>
        <div className="mt-auto flex items-center justify-between pt-3">
          <p className="text-base font-bold text-indigo-600">
            {product.price} <span className="text-xs font-medium">BDT</span>
          </p>
          <Link
            to={`/product/${product.id}`}
            className="text-xs font-semibold text-indigo-600 hover:underline"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
