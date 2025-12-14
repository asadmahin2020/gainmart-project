// Home page:

import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  // Just taking first 4 products as "featured"
  const featured = products.slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl space-y-10">
      {/* Hero section */}
      <section className="grid gap-8 rounded-3xl bg-indigo-600 px-6 py-10 text-white sm:grid-cols-2 sm:px-10 lg:px-16">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-indigo-100">
            GainMart Supplements Center
          </p>
          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            
          </h1>
          <p className="max-w-md text-sm text-indigo-100">
            This is a student project. You can browse products, add to cart and go to checkout.
            
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/products"
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-indigo-600"
            >
              Shop Supplements
            </Link>
            <a
              href="#categories"
              className="rounded-full border border-indigo-200 px-5 py-2 text-sm font-semibold text-white"
            >
              Browse Categories
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          {/* Just a simple colored block instead of real image */}
          <div className="h-40 w-40 rounded-3xl bg-indigo-400/60 shadow-lg" />
        </div>
      </section>

      {/* Categories list */}
      <section id="categories" className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            Shop by category
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {[
            "Protein & Fitness",
            "Weight Gain",
            "Vitamins",
            "Pre Workout",
            "Performance",
            "Accessories",
          ].map((cat) => (
            <Link
              key={cat}
              to={`/products?category=${encodeURIComponent(cat)}`}
              className="flex items-center justify-center rounded-2xl border border-gray-200 bg-white px-3 py-3 text-xs font-semibold text-gray-700 hover:border-indigo-400 hover:text-indigo-600 sm:text-sm"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            Featured supplements
          </h2>
          <Link
            to="/products"
            className="text-xs font-semibold text-indigo-600 hover:underline"
          >
            View all
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
