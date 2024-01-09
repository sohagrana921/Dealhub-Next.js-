import Marquee from "react-fast-marquee";
import img1 from "/public/Brands-Image/brand (1).webp";
import img2 from "/public/Brands-Image/brand (2).webp";
import img3 from "/public/Brands-Image/brand (3).webp";
import img4 from "/public/Brands-Image/brand (4).webp";
import Image from "next/image";

const Brands = () => {
  return (
    <div>
      <Marquee>
        <Image src={img1} alt="" className="w-64 h-48 mr-5 border p-8" />
        <Image src={img2} alt="" className="w-64 h-48 mr-5 border p-8" />
        <Image src={img3} alt="" className="w-64 h-48 mr-5 border p-8" />
        <Image src={img4} alt="" className="w-64 h-48 mr-5 border p-8" />
      </Marquee>
    </div>
  );
};
export default Brands;
