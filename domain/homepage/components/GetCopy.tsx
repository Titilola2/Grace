import React from "react";
import Image from "next/image";
import cup from "@/assets/images/cup.svg";
import Button from "@/components/button";
import { useRouter } from "next/navigation";

const GetCopy = () => {
  const router = useRouter();
  return (
    <section className="w-full bg-[#E0B3A0;] flex flex-col md:flex-row justify-between lg:px-[8rem] items-center px-[1rem] py-11 sidebar">
      <div className="w-full">
        {" "}
        <h1 className="font-['Cardo'] text-3xl font-[600] tracking-[0.776px] leading-10 text-[#0E1B2B]">Get Book Copy Today!</h1>
        <div className="border-b-2 w-9 border-red-900 mt-2 mb-4" />
        <div className="w-full">
          <p className="py-6 lg:w-[60%] w-full">Get ready to be hit by a roller coaster of emotions as you read an of the books in my series</p>
          <Button onClick={() => router.push("https://www.amazon.com/stores/Ashton-Grey/author/B0CCWVBC7N?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true")} title="Order Now" fontSize="18px" />
        </div>
      </div>
      <div>
        <Image src={cup} alt="cup" />
      </div>
    </section>
  );
};

export default GetCopy;
