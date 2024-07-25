import React from "react";
import Link from "next/link";
import Image from "next/image";
import images from "@/assets/images.svg";
import Button from "@/components/button";

const About = () => {
  return (
    <section className="w-full my-4 flex lg:flex-row flex-col bg-white py-[1rem] lg:py-[2rem] lg:px-[8rem] gap-4">
      <div className=" w-full h-auto  mt-4 px-[1rem] lg:py-[4rem] flex flex-col sidebar">
        <h1 className="lg:text-5xl text-2xl font-custom w-full my-3">ABOUT THE AUTHOR </h1>
        <h2 className="font-custom lg:text-[40px]"> ASHTON GREY</h2>
        <p>
          Ashton Grey is one of the new New York times bestselling Author. She writes part time from her Maryland home she shares with her family and her puppy, Mocha. When she is not completing home chores or saving lives at a local hospital, she
          can be found on her couch with a pen and a paper trying to help a city sassy doll catch the next eligible Manhattan billionaire bachelor. Despite the roller-coaster ride, there is always a happily ever after. For more steamy Romance Novels
          engulfed with tropes that will make your heat skip a beat, sign up for my enchanting newsletters...
          {""}{" "}
        </p>
          <Link className="mt-4" href="https://dl.bookfunnel.com/uvb9jhaccg">
          <Button title="Subscribe"/>
          </Link>
      </div>
      <div className="w-full">
        <Image src={images} alt="images" loading="lazy" />
      </div>
    </section>
  );
};

export default About;
