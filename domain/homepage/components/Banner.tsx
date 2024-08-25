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
    <div className="flex flex-row justify-between bg-white m-12">
      <div className="ml-8">A</div>
      <div className="">A</div>
      <div className="">A</div>
    
    <section className="bg-white w-full h-auto my-8 lg:py-[4rem] flex flex-col lg:flex lg:flex-row items-center justify-between lg:gap-8 lg:pl-[8rem] px-4 sidebar">
      <div className=" w-full flex flex-col gap-[3.5rem]">
        <div className=" flex flex-row  w-screen">
          <div className="w-1/2">Grace Olafare</div>
          <div className="w-1/2">Grace Olafare</div>
        </div>
        <div className=" flex flex-row bg-white">
        <div className="lg:mt-[5rem] w-1/2">
          <h1 className="lg:text-[80px] text-5xl font-normal font-custom w-full my-6">Grace Olafare</h1>
          <Button width="200px" height="60px" onClick={() => router.push("https:")} fontSize="27px" title="Hire me" />
        </div>
        <div className="w-1/2 ">
        <Image className="w-full h-[100vh]" src={book} alt="Grace's Picture" />
      </div>
        </div>
        
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
