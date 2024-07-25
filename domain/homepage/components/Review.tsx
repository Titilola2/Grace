import React from "react";
import star from "@/assets/images/star.svg";
import review1 from "@/assets/images/review1.svg";
import review2 from "@/assets/images/review2.svg";
import review3 from "@/assets/images/review3.svg";
import Image from "next/image";
import CarouselComponent from "./Carousel";

const Review = () => {
  const settings = { infinite: true, speed: 500, slidesToShow: 2, slidesToScroll: 1, autoplay: true, autoplaySpeed: 2500 };
  const images = [review1, review2, review3];
  return (
    <section className="w-full flex flex-col lg:flex-row py-16 lg:py-[15rem] lg:px-[8rem] bg-white px-[1rem] justify-between sidebar">
      <div className="w-full flex flex-col gap-4">
        <h1 className="font-custom text-3xl">What Readers Say About My Book</h1>
        <p>My readers mean the world to me and I take to heart whatever you all have to say</p>
        <div className="w-full flex items-center gap-1">
          <Image className="w-[10rem]" src={star} alt="rating" />
          <span>(4.5/5)</span>
        </div>
        <p>Overall Customer Ratings</p>
      </div>
      <div className="w-full lg:w-[40%] h-auto">
        <CarouselComponent settings={settings}>
          {images.map((image, index) => (
            <Image className="w-full lg:w-[50%]" src={image} key={index} alt="image" />
          ))}
        </CarouselComponent>
      </div>
    </section>
  );
};

export default Review;
