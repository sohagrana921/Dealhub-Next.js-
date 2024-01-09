import React from "react";
import {
  HiBadgeCheck,
  HiOutlineTruck,
  HiOutlineReceiptRefund,
  HiOutlinePaperAirplane,
  HiOutlineShieldCheck,
  HiCheckCircle,
} from "react-icons/hi";

const OurServices = () => {
  return (
    <div className="my-8 border py-10">
      <div className="flex justify-evenly flex-col md:flex-row items-center">
        <p className="hover:text-xl font-semibold hover:font-semibold">
          <HiBadgeCheck className="inline-block text-4xl text-green-600 pr-1" />
          Safe Payment
        </p>
        <p>|</p>
        <p className="hover:text-xl font-semibold hover:font-semibold">
          <HiOutlineTruck className="inline-block text-4xl text-yellow-500 pr-1" />
          Nationwide Delivery
        </p>
        <p>|</p>
        <p className="hover:text-xl font-semibold hover:font-semibold">
          <HiOutlinePaperAirplane className="inline-block text-blue-600  text-4xl pr-1" />
          Best Price Guaranteed
        </p>
        <p>|</p>
        <p className="hover:text-xl font-semibold hover:font-semibold">
          {" "}
          <HiOutlineReceiptRefund className="inline-block text-yellow-500 text-4xl pr-1" />
          Free & Easy Returns
        </p>

        <p>|</p>
        <p className="hover:text-xl font-semibold hover:font-semibold">
          <HiCheckCircle className="inline-block text-4xl text-green-600 pr-1" />
          100% Authentic Products
        </p>
        <p>|</p>
        <p className="hover:text-xl font-semibold hover:font-semibold">
          <HiOutlineShieldCheck className="inline-block text-blue-600 text-4xl pr-1" />
          Dealhub Verified
        </p>
      </div>
    </div>
  );
};

export default OurServices;
