// Cart page: user can see cart items and go to checkout

import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { items, cartTotal, updateQty, removeFromCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (items.length === 0) return;
    navigate("/checkout");
  };

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <h1 className="text-lg font-semibold text-gray-900">Shopping cart</h1>

      {items.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-6 text-sm text-gray-500">
          <p>Your cart is empty.</p>
          <Link
            to="/products"
            className="mt-3 inline-block text-sm font-semibold text-indigo-600 hover:underline"
          >
            Browse products
          </Link>
        </div>
      ) : (
        <>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b bg-gray-50 text-xs uppercase text-gray-500">
                <tr>
                  <th className="px-4 py-3">Product</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Qty</th>
                  <th className="px-4 py-3">Total</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="border-b last:border-b-0">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-12 w-12 rounded-lg object-cover"
                        />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">
                            {item.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {item.brand}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {item.price} BDT
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      <input
                        type="number"
                        min="1"
                        value={item.qty}
                        onChange={(e) =>
                          updateQty(item.id, Number(e.target.value))
                        }
                        className="w-16 rounded border border-gray-300 px-2 py-1 text-xs"
                      />
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">
                      {item.qty * item.price} BDT
                    </td>
                    <td className="px-4 py-3 text-right text-xs">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col items-end gap-3 text-sm">
            <p className="text-gray-600">
              Subtotal:
              <span className="ml-2 text-base font-bold text-gray-900">
                {cartTotal} BDT
              </span>
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/products"
                className="rounded-full border border-gray-300 px-5 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50"
              >
                Continue shopping
              </Link>
              <button
                onClick={handleCheckout}
                disabled={items.length === 0}
                className="rounded-full bg-indigo-600 px-6 py-2 text-xs font-semibold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
