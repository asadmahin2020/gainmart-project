// Top navigation bar component

import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartCount, cartTotal } = useCart();

  return (
    <header className="border-b bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-0">
        {/* Logo / title */}
        <Link to="/" className="text-lg font-bold text-indigo-600">
          GainMart
        </Link>

        {/* Simple search box  */}
        <div className="hidden flex-1 items-center justify-center px-4 sm:flex">
          <input
            className="w-full max-w-md rounded-full border border-gray-300 px-4 py-1 text-sm shadow-sm focus:border-indigo-500 focus:outline-none"
            placeholder="Search supplements (UI only)..."
          />
        </div>

        {/* Right side links */}
        <div className="flex items-center gap-4 text-sm">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "font-semibold text-indigo-600" : "text-gray-700"
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "font-semibold text-indigo-600" : "text-gray-700"
            }
          >
            My Account
          </NavLink>

          {/* Cart info */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              "flex items-center gap-1 rounded-full border px-3 py-1 text-xs sm:text-sm " +
              (isActive ? "border-indigo-500 text-indigo-600" : "border-gray-300 text-gray-700")
            }
          >
            <span>Cart</span>
            <span className="rounded-full bg-indigo-600 px-2 py-0.5 text-[10px] font-semibold text-white">
              {cartCount}
            </span>
            <span className="hidden sm:inline text-gray-500">
              / {cartTotal} BDT
            </span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
