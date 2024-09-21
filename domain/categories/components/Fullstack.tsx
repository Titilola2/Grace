"use client";
import React from "react";
import Button from "@/components/button";
import Image from "next/image";
import book from "@/assets/images/book1.svg";
import proj1 from "@/assets/images/Proj1.png";
import proj2 from "@/assets/images/Proj2.png";
import richbook from "@/assets/images/richbook.svg";
import Review from "@/domain/homepage/components/Review";
import { useRouter } from "next/navigation";
import billionaire from "@/assets/images/billionaire.svg";

const Fullstack = () => {
  const router = useRouter();
  return (
    <section className="w-full">
      <div className="bg-white w-full h-auto lg:px-[8rem] mt-4 px-[1rem] lg:py-[4rem] flex flex-col sidebar">
        <h1 className="lg:text-6xl text-2xl font-custom w-full my-3">PROJECTS </h1>
       
      </div>
    
      <div className="bg-white w-full h-auto lg:px-[8rem] px-[1rem] lg:py-[2rem] flex flex-col sidebar">
        <div className="w-full flex flex-col">
          <div className="flex flex-col lg:flex-row w-full gap-8 items-center">
            <Image className="w-full lg:w-[60%]" src={proj1} alt="books" />
            <div className="flex flex-col w-full gap-8">
              <h1 className="font-custom text-4xl">Foodieland.</h1>
              <p className="font-semibold"> A Culinary Paradise for All Tastes</p>
              <p>
              Foodieland is a vibrant food company dedicated to crafting delicious, high-quality meals across a wide variety of categories. Specializing in vegan, dessert, chocolate, and breakfast dishes, Foodieland is committed to satisfying diverse taste buds with creative, flavorful options. Whether you’re craving plant-based meals, decadent sweets, or a hearty breakfast to start your day, Foodieland offers something for everyone. With an emphasis on using fresh, nutritious ingredients, Foodieland makes it easy to enjoy a wide range of cuisines, expertly tailored for every food lover.
              </p>
              <div>
                <Button onClick={() => router.push("https://tobams.vercel.app/")} title="View Live" width="200px" height="55px" fontSize="24px" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full gap-8 my-[10rem] items-center">
         
          <div className="flex flex-col w-full gap-8">
            <h1 className="font-custom text-4xl">ECHOMAX  </h1>
            <h2 className="font-semibold">Your Ultimate Destination for Premium Headsets</h2>
            <p>
            Echomax is a leading e-commerce company specializing in high-quality headsets designed to elevate your audio experience. Whether you need headsets for gaming, music, work, or everyday use, SoundWave offers a diverse selection to meet every need. From noise-canceling headphones to wireless earbuds, each product is crafted with cutting-edge technology and superior comfort. At SoundWave, we’re committed to delivering exceptional sound quality, style, and durability, ensuring you find the perfect headset for any occasion. Experience audio like never before with SoundWave, your trusted source for premium headsets.
            </p>
            <div>
              <Button onClick={() => router.push("https://stage2-ashen.vercel.app/")} title="View Live" width="200px" height="55px" fontSize="24px" />
            </div>
          </div>
          <Image className="w-full lg:w-[60%]" src={proj2} alt="books" />
        </div>
       
      </div>
 
      <div className="w-1/2">
     {/*   <Review />*/}
      </div>
    </section>
  );
};

export default Fullstack;
