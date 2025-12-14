// Product details page: show full info for one product

import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Convert id from URL to number and find product
  const productId = Number(id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl space-y-4">
        <p className="text-sm text-gray-600">Product not found.</p>
        <Link
          to="/products"
          className="text-sm font-semibold text-indigo-600 hover:underline"
        >
          Back to products
        </Link>
      </div>
    );
  }

  // add 1 quantity to cart
  const handleAdd = () => {
    addToCart(product, 1);
  };

  const handleBuyNow = () => {
    addToCart(product, 1);
    navigate("/checkout");
  };

  // simple related products (same category)
  const related = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  return (
    <div className="mx-auto max-w-6xl space-y-10">
      {/* Top information */}
      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-gray-200 bg-white p-4">
          <img
            src={product.image}
            alt={product.name}
            className="h-80 w-full rounded-2xl object-cover"
          />
        </div>

        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
            {product.category}
          </p>
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {product.name}
          </h1>
          <p className="text-sm text-gray-500">Brand: {product.brand}</p>

          <p className="text-3xl font-extrabold text-indigo-600">
            {product.price} <span className="text-sm font-semibold">BDT</span>
          </p>

          <p className="text-sm text-emerald-600">
            {product.stock > 0 ? `In stock (${product.stock} available)` : "Out of stock"}
          </p>

          <p className="max-w-md text-sm text-gray-600">{product.description}</p>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={handleAdd}
              className="rounded-full bg-indigo-600 px-6 py-2 text-sm font-semibold text-white"
            >
              Add to cart
            </button>
            <button
              onClick={handleBuyNow}
              className="rounded-full border border-indigo-600 px-6 py-2 text-sm font-semibold text-indigo-600"
            >
              Buy now (fake)
            </button>
          </div>
        </div>
      </section>

      {/* Description box */}
      <section className="space-y-3 rounded-3xl border border-gray-200 bg-white p-5">
        <h2 className="text-sm font-semibold text-gray-900">
          Product details
        </h2>
        <p className="text-sm text-gray-600">
          
          
        </p>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-gray-900">
            Related products
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
