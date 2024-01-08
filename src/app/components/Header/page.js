import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/thumb.png";
const Header = () => {
  return (
    <div className="bg-white text-black py-2 border w-full">
      <div className=" mx-auto flex items-center w-full">
        <div className="w-1/5">
          <Link href="/">
            <Image src={logo} alt="Dealhub Logo" className="pr-1"></Image>
          </Link>
        </div>
        <div className="flex items-center md:py-2 px-2  w-2/5 md:w-3/5 border-2 rounded">
          <div className="w-full">
            <input
              type="text"
              className="bg-white text-black  w-full focus:outline-none  "
              placeholder="Search here"
            />
          </div>
          <button className="md:text-xl md:-ml-6">
            <AiOutlineSearch />
          </button>
        </div>

        <div className="w-1/5 flex items-center font-bold md:text-lg justify-between md:px-3">
          <div className="flex items-center gap-1 ">
            <BiSolidUser />
            <button className="hover:bg-slate-100 px-2 py-1 rounded-md">
              Login
            </button>
          </div>
          <p>|</p>
          <button className="hover:bg-slate-100 px-2 py-1 rounded-md">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
