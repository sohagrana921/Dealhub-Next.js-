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
    <div>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        interval={800}
        infiniteLoop={true}
      >
        <Image src={image1} alt="" />
        <Image src={image2} alt="" />
        <Image src={image3} alt="" />
      </Carousel>
    </div>
  );
};

export default Banner;
