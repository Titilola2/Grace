import Button from "@/components/button";
import React from "react";
import Image from "next/image";
import book from "@/assets/images/book1.svg";
import CarouselComponent from "./Carousel";
import { useRouter } from "next/navigation";
import { images } from "@/data";

const Banner = () => {
  const settings = {};
  const router = useRouter();

  return (
    <section className="bg-white w-full h-auto my-8 lg:py-[4rem] flex flex-col lg:flex lg:flex-row items-center justify-between lg:gap-8 lg:pl-[8rem] px-4 sidebar">
      <div className="lg:w-[50%] w-full flex flex-col gap-[3.5rem]">
        <div className="lg:mt-[5rem]">
          <h1 className="lg:text-[80px] text-5xl font-normal font-custom w-full my-6">NARRATIVE PEN</h1>
          <Button width="200px" height="60px" onClick={() => router.push("https://www.amazon.com/stores/Ashton-Grey/author/B0CCWVBC7N?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true")} fontSize="27px" title="Order Now" />
        </div>
        <CarouselComponent settings={settings}>
          {images.map((image, index) => (
            <Image onClick={() => router.push(image.url)} className="cursor-pointer" src={image.src} key={index} alt="image" />
          ))}
        </CarouselComponent>
      </div>
      <div className="lg:w-[50%]">
        <Image className="w-full h-[100vh]" src={book} alt="baby_daddy" />
      </div>
    </section>
  );
};

export default Banner;
