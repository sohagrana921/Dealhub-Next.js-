"use client";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";

import Link from "next/link";
import Image from "next/image";
const Header = () => {
  const [category, setCategory] = useState("All Category");
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const userMenuRef = useRef(null);

  const categoryOptions = [
    "All Category",
    "Audio & Home Theater",
    "Camera & Photo",
    "Games & Consoles",
    "Computer & Laptop",
    "Headphone & Speaker",
    "Smartphone & Accessories",
    "Battary & Accessories",
    "Furnitures",
    "Television",
  ];

  const handleCategoryChange = (value) => {
    setCategory(value);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const toggleMobileSearch = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="bg-white text-black py-1 pl-2">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <Image
              src="/thumb.png"
              width={200}
              height={100}
              alt="Dealhub Logo"
              className="pr-1"
            ></Image>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="relative inline-block text-white border mr-2">
            <select
              className="bg-white text-black px-3 py-3 focus:outline-none"
              value={category}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              {categoryOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          {/* For medium and larger screens, show search input field */}
          <div className=" border hidden md:inline">
            <input
              type="text"
              className="bg-white text-black px-3 py-2 focus:outline-none md:mt-2"
              placeholder="I'm searching for..."
            />
            <button className="md:text-2xl md:mr-2">
              <AiOutlineSearch />
            </button>
          </div>
          {/* For mobile devices, show search icon and toggle search input on click */}
          {isMobileSearchOpen ? (
            <div className="divide-y-2 border md:hidden">
              <input
                type="text"
                className="bg-white text-black px-3 py-3 focus:outline-none"
                placeholder="I'm searching for..."
              />
            </div>
          ) : (
            <button
              className="px-3 py-2 md:hidden"
              onClick={toggleMobileSearch}
            >
              <AiOutlineSearch />
            </button>
          )}
          <div
            className="ml-4 relative inline-block text-black"
            ref={userMenuRef}
          >
            <div className="cursor-pointer text-4xl" onClick={toggleUserMenu}>
              <BiSolidUser />
            </div>
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 py-2 w-32 bg-white text-black rounded-lg shadow-lg">
                <div className="py-1 px-4 cursor-pointer hover:bg-gray-200">
                  My Profile
                </div>
                <div className="py-1 px-4 cursor-pointer hover-bg-gray-200">
                  Wishlist
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
