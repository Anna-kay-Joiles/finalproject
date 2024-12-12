"use client";
import React from "react";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem("user");
        router.push("/sign-in");
      })
      .catch((error) => {
        console.error("Error signing out", error);
      });
  };

  return (
    <header className="bg-yellow-500 text-blue-950 py-4">
      <nav className="flex justify-between items-center max-w-screen-lg mx-auto">
        <div className="text-3xl font-bold">
          <h1>Volt Race</h1>
        </div>

        <div className="flex space-x-4">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            
            <li>
              <Link href="/shop" className="hover:underline">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:underline">
                Contact Us 
              </Link>
            </li>

          <li>
              <Link href="/cart" className="hover:underline">
                Cart
              </Link>
            </li>
            </ul>

          <ul className="flex space-x-4">
            {user ? (
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-48 justify-self-end"
                >
                  Log out
                </button>
              </li>
            ) : (
              <li>
                <Link href="/sign-in" className="hover:underline">
                  Sign In
                </Link>
              </li>
            )}
           
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
