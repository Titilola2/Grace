"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import next from "@/assets/next.svg";
import prev from "@/assets/prev.svg";
import React, { useState, useRef } from "react";

interface CarouselProps {
  settings?: object;
  children: any;
}
const CarouselComponent: React.FC<CarouselProps> = ({ settings = {}, children }) => {
  const NextArrow: React.FC<any> = (props) => (
    <div {...props} className="absolute lg:top-1/2 top-[65%] right-1 lg:right-[-40px] transform -translate-y-1/2 z-10 cursor-pointer shadow-lg">
      <Image src={next} alt="next" className="w-9 h-9 object-cover" loading="lazy" />
    </div>
  );
  const PrevArrow: React.FC<any> = (props) => (
    <div {...props} className="absolute lg:top-1/2 top-[65%] left-1 lg:left-[-40px] transform -translate-y-1/2 z-10 cursor-pointer shadow-lg">
      <Image src={prev} alt="previous" className="w-9 h-9 object-cover" loading="lazy" />
    </div>
  );

  const sliderRef = useRef<Slider>(null);

  const defaultSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <figure className="flex-1 md:justify-between w-[100%] gap-2 sidebar">
      <Slider ref={sliderRef} {...defaultSettings}>
        {children}
      </Slider>
    </figure>
  );
};

export default CarouselComponent;
