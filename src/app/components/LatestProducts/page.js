"use client";
import Image from "next/image";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import image from "/public/Image-20.jpg.webp";
const LatestProducts = () => {
  const products = [
    {
      id: "1",
      name: "MacBook Air 2018",
      rating: 4.5,
      price: "35.00",
    },
    {
      id: "2",
      name: "MacBook Air 2018",
      rating: 4.5,
      price: "35.00",
    },
    {
      id: "3",
      name: "MacBook Air 2018",
      rating: 4.5,
      price: "35.00",
    },
    {
      id: "4",
      name: "MacBook Air 2018",
      rating: 4.5,
      price: "35.00",
    },
    {
      id: "5",
      name: "MacBook Air 2018",
      rating: 4.5,
      price: "35.00",
    },
    {
      id: "6",
      name: "MacBook Air 2018",
      rating: 4.5,
      price: "35.00",
    },
  ];

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mx-2 py-2 my-2 border-b-2 border-red-500">
        LATEST PRODUCTS
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-1">
        {products.map((product) => (
          <div key={product.id}>
            <div className="border w-auto h-full my-2 flex  items-center">
              <Image src={image} alt="" className="w-32 h-24" />
              <div className="px-2">
                <Rating
                  placeholderRating={product.rating}
                  readonly
                  emptySymbol={<FaRegStar className="text-xs"></FaRegStar>}
                  placeholderSymbol={
                    <FaStar className="text-yellow-400 text-xs"></FaStar>
                  }
                  fullSymbol={<FaStar></FaStar>}
                ></Rating>
                <h3 className="text-sm font-semibold">{product.name}</h3>
                <h3 className="text-red-500 font-semibold">${product.price}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
