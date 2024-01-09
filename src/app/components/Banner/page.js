"use client";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "/public/banner-img1.jpg";
import image2 from "/public/banner-img2.jpg";
import image3 from "/public/banner-img3.jpg";
const Banner = () => {
  return (
    <div className="mt-14 md:mt-0">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        interval={800}
        infiniteLoop={true}
      >
        <Image src={image1} alt="" className="md:h-[400px] rounded-md" />
        <Image src={image2} alt="" className="md:h-[400px] rounded-md" />
        <Image src={image3} alt="" className="md:h-[400px] rounded-md" />
      </Carousel>
    </div>
  );
};

export default Banner;
