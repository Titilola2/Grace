import Image from "next/image";
import React from "react";
import boss from "@/assets/images/boss.svg";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import { numberData } from "@/data";

const AboutAuthor = () => {
  const router = useRouter()

  return (
    <section className="w-full px-[1rem] gap-6 lg:px-[8rem] flex flex-col-reverse lg:flex-row justify-between py-8 sidebar">
      <div className="w-full ">
        <div className="hidden lg:block w-[70%] lg:w-[85%] xl:w-[55%]  h-[85%] lg:left-[15%] xl:left-[10%] border-8 border-red-900 relative" />
        <Image className="w-full lg:w-96 lg:h-full xl:h-96 top-[-90%] relative shadow" src={boss} alt="boss" />
      </div>
      <div className="w-full">
        <h1 className="font-['Cardo'] text-3xl font-[700] tracking-[0.776px] leading-10 text-[#0E1B2B]">About Author</h1>
        <div className="border-b-2 w-9 border-red-900 mt-2 mb-4" />
        <div className="">
          <span className="text-black text-opacity-70 text-lg font-medium">Ashton Grey</span>
          <span className="text-black text-opacity-70 text-lg font-semibold"> is one of the new New York times bestselling Authors. </span>
          <span className="text-black text-opacity-70 text-lg font-normal">
            She writes part time from her Maryland home she shares with her family and her puppy, Mocha. When she is not completing home chores or saving lives at a local hospital, she can be found on her couch with a pen and a paper trying to help a
            city sassy doll catch the next eligible Manhattan billionaire bachelor. Despite the roller-coaster ride, there is always a happily ever after all.
          </span>
        </div>

        <div className="py-8">
          <Button onClick={()=> router.push("/about")} title="Read More..." height="50px" />
        </div>
        <div className="flex items-center w-full">
          {numberData.map((item, index) => (
            <div className="flex w-full items-center" key={index}>
              <div className="flex-col justify-center items-start inline-flex w-full">
                <div className="text-slate-900 text-5xl font-bold font-['Cardo'] leading-10">{item.number}</div>
                <div className="text-neutral-400 text-base font-normal font-['Inter'] leading-7">{item.text}</div>
              </div>
              {index !== numberData.length - 1 && <div className="w-20 h-[3.8rem] border-l-2 border-slate-400" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;
