"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-indigo-600">
        AuthApp
      </Link>

      {/* Right Side */}
      {session ? (
        <div className="flex items-center gap-4">
          
          {/* User Info */}
          <div className="flex items-center gap-3">
            
            {/* Profile Image / Fallback */}
            {session.user?.image ? (
              <img
                src={session.user.image}
                alt="Profile"
                className="h-9 w-9 rounded-full object-cover border border-indigo-500"
              />
            ) : (
              <div className="h-9 w-9 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                <CgProfile size={20} />
              </div>
            )}

            {/* Email */}
            <span className="text-gray-700 text-sm font-medium hidden sm:block">
              {session.user?.name}
            </span>
          </div>

          {/* Logout */}
          <button
            onClick={() => signOut()}
            className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-red-500 hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      ) : (
        <Link
          href="/login"
          className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition"
        >
          Login
        </Link>
      )}
    </nav>
  );
}
