"use client";
import React from "react";
import Button from "@/components/button";
import Image from "next/image";
import book from "@/assets/images/book1.svg";
import bossy from "@/assets/images/bossy.svg";
import book2 from "@/assets/images/book2.svg";
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
            <Image className="w-full lg:w-[60%]" src={bossy} alt="books" />
            <div className="flex flex-col w-full gap-8">
              <h1 className="font-custom text-4xl">One Bossy Fake Marriage : Ex&apos;s Brother Billionaire Romance</h1>
              <p className="font-semibold"> Marriages come with a lot of baggage, even fake ones. </p>
              <p>
                I never thought I&apos;d agree to a fake marriage, especially not with Noah, my ex-boyfriends billionaire brother. But when my financial situation took a turn for the worse, I had no choice. Noah was the CEO of the company where I
                worked, and he offered me financial security in exchange for a fake marriage. He was the sunshine and I was damaged and grumpy, but we were stuck with each other. As we spent more time together, I began to see Noah in a new light.
                Despite our differences, we began to develop feelings for each other. Just when things were going exceptionally, a whirlwind of obstacles made its way to us, including the arrival of my ex- boyfriend, Noah&apos;s jealous
                ex-girlfriend, and *drumroll* A surprise pregnancy! Will Noah and I be able to face these challenges and will our love for each other continue to grow?
              </p>
              <div>
                <Button onClick={() => router.push("https://www.amazon.com/One-Bossy-Fake-Marriage-Billionaire-ebook/dp/B0CC3PCCRT?ref_=ast_author_dp")} title="Order Now" width="200px" height="55px" fontSize="24px" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full gap-8 my-[10rem] items-center">
          <Image className="w-full lg:w-[70%]" src={book2} alt="books" />
          <div className="flex flex-col w-full gap-8">
            <h1 className="font-custom text-4xl">One Bossy Tease: An Enemies to Lovers off-limits Age Gap Romance  </h1>
            <h2 className="font-semibold">With our age gap and his status as a billionaire, my boss is a forbidden fruit that I must taste.</h2>
            <p>
              I never expected to meet a possessive billionaire at work, but Alexander changed everything. Our initial clash {"}"}idn&apos;t go well, but I soon found{">"}myself working for him and living in his guest room. As our relationship grew,
              his possessiveness suffocated me, but we pushed through it during our romantic getaway. When I got a job that offered me an opportunity in California, we broke up, but he flew out to win me back. Despite facing Marcus, his business
              rival, and his ex-wife&apos;s return, we navigated our engagement to a lavish Manhattan wedding but will we get through our marriage? Or will the obstacles tear us apart?
            </p>
            <div>
              <Button onClick={() => router.push("https://www.amazon.com/One-Bossy-Tease-Enemies-off-limits-ebook/dp/B0CW1DWJ3P?ref_=ast_author_dp")} title="Order Now" width="200px" height="55px" fontSize="24px" />
            </div>
          </div>
        </div>
       
      </div>
 
      <div className="w-1/2">
        <Review />
      </div>
    </section>
  );
};

export default Fullstack;
