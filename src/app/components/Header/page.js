import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/thumb.png";
const Header = () => {
  return (
    <div className="bg-slate-200 w-full mx-auto px-2 text-black py-2 border fixed z-10 top-0">
      <div className="w-full mx-auto flex gap-4 items-center ">
        <div className="w-1/5">
          <Link href="/">
            <Image
              src={logo}
              alt="Dealhub Logo"
              className="md:w-[200px] bg-slate-100"
            ></Image>
          </Link>
        </div>
        <div className="flex items-center md:py-2 md:px-2 w-auto md:w-2/5  border-2 border-black rounded bg-white">
          <div className="w-full">
            <input
              type="text"
              className="e text-black  w-full focus:outline-none  "
              placeholder="Search here"
            />
          </div>
          <button className="md:text-xl md:-ml-6">
            <AiOutlineSearch />
          </button>
        </div>

        <div className="w-2/5 flex items-center font-bold md:text-lg justify-center md:px-3">
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
