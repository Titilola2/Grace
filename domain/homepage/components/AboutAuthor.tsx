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
          <span className="text-black text-opacity-70 text-xl font-medium">Hello</span>
          <span className="text-black text-opacity-70 text-xl font-semibold"></span>
          <span className="text-black text-opacity-70 text-xl font-normal">
           
          , I'm Grace - a driven and self-taught developer with a passion for building exceptional digital experiences. I've honed my skills in a versatile tech stack, including Reactjs, Nextjs, Mongodb, Tailwindcss, and Nodejs, and have a working knowledge of Ruby on Rails, C, and Python.

 Staying up-to-date with industry trends and continuously improving my skills is essential to me. On this portfolio, you'll find a showcase of my projects and achievements. Let's connect if you're looking for a talented and dedicated developer who is passionate about delivering exceptional results.
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
