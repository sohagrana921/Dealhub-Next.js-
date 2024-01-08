import Link from "next/link";
import React from "react";
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
    <div className="space-y-2 border-2">
      <div className="bg-black py-2 px-2 text-white flex gap-3 items-center">
        <span>
          <FaStaylinked></FaStaylinked>
        </span>
        <h2 className="tracking-widest   font-semibold ">BROWSE CATEGORIES</h2>
      </div>
      {categories.map((category) => (
        <Link
          className="block hover:border-l-4 border-red-500 hover:text-red-500 pl-2 py-1"
          key={category.id}
          href={`/category/${category.id}`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
