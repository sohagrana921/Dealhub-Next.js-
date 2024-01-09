/* eslint-disable react/no-unescaped-entities */

const Footer = () => {
  return (
    <footer className="pt-4 min-h-[65vh] flex  flex-col">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  md:gap-16 p-4 flex-grow">
        {/* Column 1: Contact Information */}
        <div className="md:col-span-1 lg:col-span-1">
          <div className="font-bold uppercase mb-6">Contact Information</div>
          <p className="mb-1 text-base text-gray-600">Call us</p>
          <p className="text-red-500 font-bold text-2xl my-2">123-456-7890</p>
          <p className="mb-3 text-base text-gray-600">Support@dealhub.com</p>
          <p className="mb-3 text-base text-gray-600">Mirpur 2, Dhaka</p>
        </div>

        {/* Column 2: Company */}
        <div className="md:col-span-1">
          <div className="font-bold text-sm uppercase mb-6">Company</div>
          <ul>
            <li className="mb-3 text-sm text-gray-600">About Us</li>
            <li className="mb-3 text-sm text-gray-600">Buy</li>
            <li className="mb-3 text-sm text-gray-600">My Wishlist</li>
            <li className="mb-3 text-sm text-gray-600">Contact Us</li>
            <li className="mb-3 text-sm text-gray-600">Order Tracking</li>
          </ul>
        </div>

        {/* Column 3: Find it Fast */}
        <div className="lg:col-span-1">
          <div className="font-bold text-sm uppercase mb-6">Find it Fast</div>
          <ul>
            <li className="mb-3 text-sm text-gray-600">Accessories</li>
            <li className="mb-3 text-sm text-gray-600">Headphones</li>
            <li className="mb-3 text-sm text-gray-600">Computer</li>
            <li className="mb-3 text-sm text-gray-600">TV & Smart box</li>
            <li className="mb-3 text-sm text-gray-600">Home & Garden</li>
            <li className="mb-3 text-sm text-gray-600">Children</li>
          </ul>
        </div>

        {/* Column 4: Explore */}
        <div className="lg:col-span-1">
          <div className="font-bold text-sm uppercase mb-6">Explore</div>
          <ul>
            <li className="mb-3 text-sm text-gray-600">Gift a Smile</li>
            <li className="mb-3 text-sm text-gray-600">Creybit Cares</li>
            <li className="mb-3 text-sm text-gray-600">Size Guide</li>
            <li className="mb-3 text-sm text-gray-600">F.A.Q.'s</li>
            <li className="mb-3 text-sm text-gray-600">Privacy Policy</li>
            <li className="mb-3 text-sm text-gray-600">Store Location</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black text-sm text-white text-center py-5">
        Copyright &copy; {new Date().getFullYear()}{" "}
        <span className="text-red-500">DealHub</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
