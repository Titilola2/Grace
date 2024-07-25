import React from "react";
import Image from "next/image";
import richbook from "@/assets/images/richbook.svg";
import star from "@/assets/images/star.svg";
import Button from "@/components/button";
import { useRouter } from "next/navigation";

const MostPopular = () => {
  const router = useRouter();
  return (
    <section className="w-full flex flex-col md:flex-row bg-white py-8 lg:px-[8rem] px-[1rem] sidebar">
      <div className="w-full">
        <Image className="w-[500px] h-[700px]" src={richbook} alt="image" />
      </div>
      <div className="w-full flex flex-col h-auto justify-between py-6">
        <h1 className="font-custom text-3xl font-[500]">Most Popular</h1>
        <div className="flex flex-col gap-6">
          <p className="text-2xl font-custom font-light">Filthy Rich Grump: A Brother&apos;s Best Friend Age Gap Romance</p>
          <Image src={star} alt="rating" />
          <p className="text-slate-400">4.5 of 5</p>
          <h1 className="text-2xl font-custom">Description</h1>
          <p>I find myself locked in a custody battle with my son’s grandparents. Fighting to keep custody is how I’ve found myself embroiled in this new mess— My best friend has come up with an outrageous scheme to win the custody battle.</p>
          <p className="text-sm w-32 border-b-2 mb-4 cursor-pointer" onClick={() => router.push("https://www.amazon.com/Filthy-Rich-Grump-Brothers-Romance-ebook/dp/B0CBKXDYYC?ref_=ast_author_dp")}>
            See books details
          </p>
        </div>
        <Button onClick={() => router.push("https://www.amazon.com/Filthy-Rich-Grump-Brothers-Romance-ebook/dp/B0CBKXDYYC?ref_=ast_author_dp")} title="Read for Free" width="40%" height="50px" />
      </div>
    </section>
  );
};

export default MostPopular;
