// Checkout page: simple form and order summary 

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { items, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((old) => ({ ...old, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.fullName || !form.phone || !form.address) {
      alert("Please fill at least name, phone, and address.");
      return;
    }
    // This is only fake order confirmation
    alert("Order placed successfully! ");
    clearCart();
    navigate("/");
  };

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl space-y-4">
        <p className="text-sm text-gray-600">
          Your cart is empty. Add some products before checkout.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row">
      <form
        onSubmit={handleSubmit}
        className="flex-1 space-y-4 rounded-3xl border border-gray-200 bg-white p-5 text-sm"
      >
        <h1 className="text-lg font-semibold text-gray-900">
          Billing & shipping
        </h1>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="text-xs font-semibold text-gray-700">
              Full name
            </label>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-1.5 text-sm focus:border-indigo-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-700">
              Email
            </label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-1.5 text-sm focus:border-indigo-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-700">
              Phone
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-1.5 text-sm focus:border-indigo-500 focus:outline-none"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="text-xs font-semibold text-gray-700">
              Address
            </label>
            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-1.5 text-sm focus:border-indigo-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-700">
              City
            </label>
            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-1.5 text-sm focus:border-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-2 rounded-full bg-indigo-600 px-6 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
        >
          Place order (fake)
        </button>
      </form>

      <aside className="w-full rounded-3xl border border-gray-200 bg-white p-5 text-sm lg:w-80">
        <h2 className="text-sm font-semibold text-gray-900">
          Order summary
        </h2>
        <div className="mt-3 space-y-2 border-b pb-3 text-xs">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <p className="max-w-[60%] truncate text-gray-700">
                {item.name} × {item.qty}
              </p>
              <p className="font-semibold text-gray-900">
                {item.qty * item.price} BDT
              </p>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between text-sm">
          <p className="text-gray-600">Total</p>
          <p className="text-base font-bold text-gray-900">{cartTotal} BDT</p>
        </div>
        <p className="mt-2 text-[11px] text-gray-400">
          
        </p>
      </aside>
    </div>
  );
}
