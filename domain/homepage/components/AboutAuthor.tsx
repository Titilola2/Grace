import Image from "next/image";
import React from "react";
import boss from "@/assets/images/img.jpg";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import { numberData } from "@/data";

const AboutAuthor = () => {
  const router = useRouter()

  return (
    <section className="w-full px-[4rem] gap-6 lg:gap-12  flex flex-col lg:flex-row justify-between py-8 sidebar">
     
      <div className="w-full">
        <h1 className="font-['Cardo'] text-5xl font-[800] tracking-[0.776px] leading-10 text-sky-900">Grace Olafare</h1>
        <div className="border-b-2 w-9 border-red-900 mt-2 mb-4" />
        <div className="">
          <span className="text-black text-opacity-70 text-2xl font-medium">LLL</span>
          <span className="text-black text-opacity-70 text-2xl font-semibold"></span>
          <span className="text-black text-opacity-70 text-2xl font-normal">
           
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quasi perferendis sit sed ipsam? Provident tempora sed praesentium vitae voluptatem dignissimos corrupti, autem atque facilis soluta illum molestiae consectetur animi!
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quasi perferendis sit sed ipsam? Provident tempora sed praesentium vitae voluptatem dignissimos corrupti, autem atque facilis soluta illum molestiae consectetur animi!
          </span>
        </div>

        <div className="py-8">
          <Button onClick={()=> router.push("/contacts")} title="Hire me" height="50px" />
        </div>
       
      </div>
      <div className="w-full  ">
        <div className="hidden lg:block w-[70%] lg:w-full xl:w-[85%] " />
        <Image className="w-1/2  lg:w-3/4 h-[90%] rounded-2xl  " src={boss} alt="boss" />
      </div>
    </section>
  );
};

export default AboutAuthor;
