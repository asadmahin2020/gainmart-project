// Login page 

import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="mx-auto flex max-w-md flex-col gap-4 rounded-3xl border border-gray-200 bg-white p-6 text-sm">
      <h1 className="text-lg font-semibold text-gray-900">Login</h1>
      <p className="text-xs text-gray-500">
        
      </p>

      <div className="space-y-3">
        <div>
          <label className="text-xs font-semibold text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-1.5 text-sm focus:border-indigo-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-700">
            Password
          </label>
          <input
            type="password"
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-1.5 text-sm focus:border-indigo-500 focus:outline-none"
          />
        </div>
      </div>

      <button className="mt-2 rounded-full bg-indigo-600 px-6 py-2 text-sm font-semibold text-white hover:bg-indigo-700">
        Login (fake)
      </button>

      <p className="pt-1 text-xs text-gray-500">
        New user?{" "}
        <Link
          to="/register"
          className="font-semibold text-indigo-600 hover:underline"
        >
          Create an account
        </Link>
      </p>
    </div>
  );
}
