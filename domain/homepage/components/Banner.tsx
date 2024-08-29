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
    <div className="flex flex-row justify-between bg-white mr-8 -ml-8">
     
    
    <section className="bg-white w-full h-auto my-8 lg:py-[4rem] flex flex-col lg:flex lg:flex-row items-center justify-between lg:gap-8 lg:pl-[8rem] px-4 sidebar">
      <div className=" w-full flex flex-col gap-[3.5rem]">
        
        <CarouselComponent settings={settings}>
          {images.map((image, index) => (
            <Image onClick={() => router.push(image.url)} className="cursor-pointer" src={image.src} key={index} alt="image" />
          ))}
        </CarouselComponent>*
      </div>
    </section>  


    </div>
  );
};

export default Banner;
