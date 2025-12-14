// Products page: 

import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [searchParams] = useSearchParams();
  const defaultCategory = searchParams.get("category") || "All";

  const [category, setCategory] = useState(defaultCategory);
  const [brand, setBrand] = useState("All");
  const [search, setSearch] = useState("");

  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];
  const brands = ["All", ...Array.from(new Set(products.map((p) => p.brand)))];

  // Simple filter logic using plain loops
  const filtered = products.filter((p) => {
    if (category !== "All" && p.category !== category) {
      return false;
    }
    if (brand !== "All" && p.brand !== brand) {
      return false;
    }
    if (search) {
      const text = (p.name + " " + p.brand).toLowerCase();
      if (!text.includes(search.toLowerCase())) {
        return false;
      }
    }
    return true;
  });

  return (
    <div className="mx-auto max-w-6xl gap-8 lg:flex">
      {/* Left side filters */}
      <aside className="mb-6 w-full space-y-6 rounded-2xl border border-gray-200 bg-white p-4 text-sm lg:mb-0 lg:w-64">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
            Search
          </h3>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-1.5 text-xs focus:border-indigo-500 focus:outline-none"
          />
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
            Category
          </h3>
          <div className="mt-2 space-y-1">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={
                  "flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-xs " +
                  (category === c
                    ? "bg-indigo-50 font-semibold text-indigo-700"
                    : "text-gray-700 hover:bg-gray-50")
                }
              >
                <span>{c}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
            Brand
          </h3>
          <div className="mt-2 space-y-1">
            {brands.map((b) => (
              <button
                key={b}
                onClick={() => setBrand(b)}
                className={
                  "flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-xs " +
                  (brand === b
                    ? "bg-indigo-50 font-semibold text-indigo-700"
                    : "text-gray-700 hover:bg-gray-50")
                }
              >
                <span>{b}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="border-t pt-3 text-xs text-gray-500">
          <p>Note: Filters are done in frontend only (JavaScript).</p>
        </div>
      </aside>

      {/* Product cards */}
      <section className="flex-1">
        <div className="flex items-center justify-between gap-2 pb-4">
          <div>
            <h1 className="text-lg font-semibold text-gray-900">
              All supplements
            </h1>
            <p className="text-xs text-gray-500">
              Showing {filtered.length} of {products.length} products
            </p>
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="mt-6 text-sm text-gray-500">
            No products found. Try changing filters or search text.
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
