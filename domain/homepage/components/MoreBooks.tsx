import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Button from "@/components/button";
import { bookData } from "@/data";
import { useRouter } from "next/navigation";
import { IoLogoReact } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandTypescript } from "react-icons/tb";
import { FaPython } from "react-icons/fa6";
import { DiRuby } from "react-icons/di";
import { FaNode } from "react-icons/fa";
import { RiBootstrapLine } from "react-icons/ri";
import { SiRubyonrails } from "react-icons/si";

const MoreBooks = () => {
  const router = useRouter()
  const [isGlowing, setIsGlowing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlowing(!isGlowing);
    }, 1200);
    return () => clearInterval(interval);
  }, [isGlowing]);

  return (
    <section className="w-full bg-white py-4 lg:py-[3rem] flex flex-col items-center justify-center gap-[2rem] lg:px-[8rem]  px-[1rem] sidebar">
      <h1 className="font-custom text-center text-red-800 text-4xl font-bold ">Technology stack</h1>
      <div className="h-[30rem]  w-full  rounded-xl shadow-xl grid grid-cols-3 p-8 text-red-900 place-items-center justify-items-center items-center">
        <div className=""> <TiHtml5 className={` ${isGlowing ? 'h-[5rem] w-[4rem]' : 'h-[3.5rem] w-[3.5rem]'}`} /></div>
        <div className=""> <IoLogoCss3 className={` ${isGlowing ? 'h-[5rem] w-[4rem]' : 'h-[3.5rem] w-[3.5rem]'}`} /></div>
        <div className=""> <TbBrandJavascript className={` ${isGlowing ? 'h-[5rem] w-[4rem]' : 'h-[3.5rem] w-[3.5rem]'}`} /> </div>
        <div className=""> <IoLogoReact className={` ${isGlowing ? 'h-[5rem] w-[4rem]' : 'h-[3.5rem] w-[3.5rem]'}`} /></div>
        <div className="">  <TbBrandNextjs className={` ${isGlowing ? 'h-[5rem] w-[4rem]' : 'h-[3.5rem] w-[3.5rem]'}`} /></div>
        <div className=""> <BiLogoTailwindCss className={` ${isGlowing ? 'h-[5rem] w-[4rem]' : 'h-[3.5rem] w-[3.5rem]'}`} /> </div>
        <div className=""> <TbBrandTypescript className={` ${isGlowing ? 'h-[5rem] w-[4rem]' : 'h-[3.5rem] w-[3.5rem]'}`} /> </div>
        <div className=""> <FaPython className={` ${isGlowing ? 'h-[5rem] w-[4rem]' : 'h-[3.5rem] w-[3.5rem]'}`} /> </div>
        <div className=""> <DiRuby className={` ${isGlowing ? 'h-[5rem] w-[4rem]' : 'h-[3.5rem] w-[3.5rem]'}`} /> </div>
        <div className=""><FaNode className={` ${isGlowing ? 'h-[5rem] w-[4rem]' : 'h-[3.5rem] w-[3.5rem]'}`} />  </div>
        <div className=""><RiBootstrapLine className={` ${isGlowing ? 'h-[5rem] w-[4rem]' : 'h-[3.5rem] w-[3.5rem]'}`} /> </div>
        <div className="">  <SiRubyonrails className={` ${isGlowing ? 'h-[5rem] w-[4rem]' : 'h-[3.5rem] w-[3.5rem]'}`} /></div>
      </div>
    </section>
  );
};

export default MoreBooks;