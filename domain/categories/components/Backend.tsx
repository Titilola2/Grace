"use client"
import Button from "@/components/button";
import MoreBooks from "@/components/morebooks";
import React from "react";
import { useRouter } from "next/navigation";


const Backend = () => {
    const router = useRouter();

  return (
    <section className="w-full">
      <div className="bg-white w-full h-auto lg:px-[8rem] mt-4 px-[1rem] lg:py-[4rem] flex flex-col sidebar">
        <h1 className="lg:text-5xl xl:text-[7xl] text-2xl font-normal font-custom w-full my-3 text-center">CLEAN AND WHOLESOME </h1>
        <div className="w-full text-center flex justify-center lg:py-24 py-10">
          <Button onClick={() => router.push("https://www.amazon.com/One-Bossy-Tease-Enemies-off-limits-ebook/dp/B0CW1DWJ3P?ref_=ast_author_dp")} title="Order Now" width="150px" height="60px" fontSize="20px" />
        </div>
        <div>
          <h1 className="lg:text-[60px] text-2xl font-normal font-custom w-full my-[2rem] lg:my-[5rem] text-center">COMING SOON</h1>
        </div>
        <div className="w-full">
          <MoreBooks />
        </div>
      </div>{" "}
    </section>
  );
};

export default Backend;
