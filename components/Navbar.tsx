"use client";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "@/app/lib/userSlice";
import { RootState } from "@/app/lib/store";
import Image from "next/image";
import { useState } from "react";
import Cart from "./Cart";

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);
  const { user } = useSelector((store: RootState) => store.user);
  const dispatch = useDispatch();
  const handleSignout = () => {
    dispatch(clearUser());
  };

  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };

  return (
    <div className="bg-blue-700">
      <nav className="flex-between text-white py-2 px-4">
        <div>
          <h1>Neural Evo</h1>
        </div>
        <div>
          <ul className="flex-between gap-2">
            {navbarItems.map((items, index) => (
              <li className="py-2 px-4 cursor-pointer" key={index}>
                <Link href={items.link}>{items.label}</Link>
              </li>
            ))}
            {
              <button onClick={toggleSideBar}>
                <Image src="cart.svg" alt="cart" width={25} height={25} />
              </button>
            }
            {sideBar && <Cart />}
            {user != null && <button onClick={handleSignout}>Signout</button>}
            {user ? (
              <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300">
                  {user.displayName.toUpperCase().charAt(0)}
                </span>
              </div>
            ) : (
              <Link href="/login">Login</Link>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

const navbarItems = [
  { label: "Home", link: "/" },
  { label: "Product", link: "/product" },
  { label: "About", link: "/about" },
  { label: "Contact", link: "/contact" },
];
