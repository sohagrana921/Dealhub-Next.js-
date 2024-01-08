"use client";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const navMenu = (
    <>
      <Link
        href="/"
        className={` hover:bg-gray-700 text-white px-3 py-2 rounded-md tracking-widest text-sm font-medium ${
          pathName === "/" && "bg-slate-500"
        }`}
      >
        HOME
      </Link>

      <Link
        href="/contact"
        className="text-gray-300 hover:bg-gray-700 hover:text-white tracking-widest px-3 py-2 rounded-md text-sm font-medium"
      >
        CONTACT
      </Link>

      <Link
        href="/blog"
        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium tracking-widest"
      >
        BLOG
      </Link>

      <Link
        href="/vendors"
        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium tracking-widest"
      >
        VENDORS
      </Link>

      <Link
        href="/compare"
        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium tracking-widest"
      >
        COMPARE
      </Link>
    </>
  );

  return (
    <nav className="bg-black mb-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navMenu}
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only flex">Open main menu</span>
              {!isOpen ? (
                <span className="font-bold text-white border-y-2">MENU</span>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div
              ref={ref}
              className="px-2 pt-2 pb-3 flex  flex-col space-y-1 sm:px-3"
            >
              {navMenu}
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
