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
    
      <div className="bg-white w-full h-auto lg:px-[8rem] px-[1rem] lg:py-[4rem] flex flex-col sidebar">
        <h1 className="text-2xl lg:text-4xl font-normal font-custom w-full my-3 text-center mt-8">PROJECTS </h1>

        <div className="w-full flex flex-col">
          <div className="flex flex-col lg:flex-row w-full gap-8 items-center">
            <Image className="w-full lg:w-[60%]" src={proj1} alt="books" />
            <div className="flex flex-col w-full gap-8">
              <h1 className="font-custom text-4xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
              <p className="font-semibold"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>
              Lorem Ipsum is a placeholder text commonly used in the design and printing industry. It's designed to be visually appealing and representative of typical text, without conveying any actual meaning. This helps designers and typographers focus on the layout and overall aesthetic of a document without being distracted by the content.
              </p>
              <div>
                <Button onClick={() => router.push("https://www.amazon.com/One-Bossy-Fake-Marriage-Billionaire-ebook/dp/B0CC3PCCRT?ref_=ast_author_dp")} title="Order Now" width="200px" height="55px" fontSize="24px" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full gap-8 my-[10rem] items-center">
         
          <div className="flex flex-col w-full gap-8">
            <h1 className="font-custom text-4xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </h1>
            <h2 className="font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit..</h2>
            <p>
            Lorem Ipsum is a placeholder text commonly used in the design and printing industry. It's designed to be visually appealing and representative of typical text, without conveying any actual meaning. This helps designers and typographers focus on the layout and overall aesthetic of a document without being distracted by the content.
            </p>
            <div>
              <Button onClick={() => router.push("https://www.amazon.com/One-Bossy-Tease-Enemies-off-limits-ebook/dp/B0CW1DWJ3P?ref_=ast_author_dp")} title="Order Now" width="200px" height="55px" fontSize="24px" />
            </div>
          </div>
          <Image className="w-full lg:w-[70%]" src={proj2} alt="books" />
        </div>
       
      </div>
 
      <div className="w-1/2">
     {/*   <Review />*/}
      </div>
    </section>
  );
};

export default Fullstack;
