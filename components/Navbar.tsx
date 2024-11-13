"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { Dialog } from "@headlessui/react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import Image from "next/image";

const Navbar = () => {
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  return (
    <header className="bg-white shadow-sm">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <Image src="/logo.svg" width={150} height={150} alt="Your Company Logo" />            
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Login / Logout and Sign-up Buttons */}
        <div className="flex flex-1 items-center justify-end gap-x-6">
          {!session ? (
            <>
              <Link
                href="/login"
                className="hidden lg:block text-sm font-semibold text-gray-900 hover:text-gray-700"
              >
                Log in
              </Link>
              <Link
                href="/register"
                className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
              >
                Sign up
              </Link>
            </>
          ) : (
            <>
              <span className="hidden lg:block text-sm text-gray-800">{session.user?.email}</span>
              <button
                onClick={() => signOut()}
                className="hidden lg:block rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-500"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <FaBars className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dialog */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            {/* Mobile Logo */}
            <Link href="/" className="-m-1.5 p-1.5 flex items-center">
              <Image src="/logo.svg" width={200} height={200} alt="Your Company Logo" />
              <span className="ml-3 text-lg font-bold text-gray-900">Your Company</span>
            </Link>
            
            {/* Close Button */}
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <FaXmark className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="mt-6 space-y-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Login / Logout and Sign-up Button for Mobile */}
          <div className="mt-6">
            {session ? (
              <button
                onClick={() => signOut()}
                className="w-full rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-500"
              >
                Log out
              </button>
            ) : (
              <Link
                href="/register"
                className="w-full block text-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
              >
                Sign up
              </Link>
            )}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
