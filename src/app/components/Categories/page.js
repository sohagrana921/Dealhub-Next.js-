import Link from "next/link";
import React from "react";
import { HiChevronDoubleRight } from "react-icons/hi";

import { FaStaylinked } from "react-icons/fa";
const Categories = () => {
  const categories = [
    {
      id: "12",
      name: "Audio & Home Theater",
    },
    {
      id: "1",
      name: "Camera & Photo",
    },
    {
      id: "2",
      name: "Computer & Laptop",
    },
    {
      id: "3",
      name: "Games & Consoles",
    },
    {
      id: "4",
      name: "Headphone & Speaker",
    },
    {
      id: "5",
      name: "Smartphone & Accessories",
    },
    {
      id: "6",
      name: "Battary & Accessories",
    },
    {
      id: "7",
      name: "Furnitures",
    },
    {
      id: "8",
      name: "Television",
    },
  ];

  return (
    <div className="space-y-1 border-b-2 rounded-xl md:mt-0 mt-2">
      <div className="bg-black py-2 px-2 text-white flex gap-3 items-center">
        <span>
          <FaStaylinked></FaStaylinked>
        </span>
        <h2 className="tracking-widest   font-semibold ">BROWSE CATEGORIES</h2>
      </div>
      {categories.map((category) => (
        <Link
          className="block bg-slate-100 rounded hover:border-l-4 border-orange-500 hover:text-orange-500 py-1 pl-2 hover:font-semibold"
          key={category.id}
          href={`/category/${category.id}`}
        >
          <HiChevronDoubleRight className="inline-block" /> {category.name}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
