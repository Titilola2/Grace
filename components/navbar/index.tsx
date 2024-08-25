"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { menu } from "@/data";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import {useRouter} from "next/navigation"
const Navbar = () => {
  const router = useRouter()
  const [showCategories, setShowCategories] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleSubPages = () => {
    setShowCategories(!showCategories);
  };
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowMobileMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="w-full px-3 md:px-12 lg:px-32 py-4 xl:px-40 bg-[#e0f2fe]  ">
      <div className="flex flex-col justify-between items-center w-full gap-2">
        <div className="w-full flex justify-between lg:justify-center gap-8 items-center">
          <div className="lg:hidden">{showMobileMenu ? <IoClose onClick={toggleMobileMenu} className="text-3xl cursor-pointer" color="#082f49" /> : <IoMenu onClick={toggleMobileMenu} className="text-3xl cursor-pointer" color="#082f49" />}</div>
        </div>
        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-col lg:flex-row items-center w-full justify-between">
          {menu.map((item: any, index: number) => (
            <div key={index} className="flex items-center cursor-pointer">
              {item.name === "Categories" ? (
                <div className="flex items-center relative hover:border border hover:border-b-[#082f49] hover:text-[#082f49] border-b py-2 hover:py-2">
                  <p className="text-xl" onClick={toggleSubPages}>
                    {item.name}
                  </p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 ml-3 cursor-pointer ${showCategories ? "transform rotate-180" : ""}`} onClick={toggleSubPages}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                  {showCategories && (
                    <div className="absolute left-0 mt-[13rem] bg-teal-50 shadow-md rounded-md w-[220px]">
                      <ul>
                        {item.subPages.map((subPage: any, index: number) => (
                          <li key={index} className="w-full">
                            <Link onClick={toggleSubPages} href={subPage.url}>
                              <p className="px-4 py-4 w-full hover:bg-sky-900 hover:text-white cursor-pointer ">{subPage.name}</p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <Link href={item.url ? item.url : ""}>
                  <p className="hover:border border hover:border-b-[#082f49] hover:text-[#082f49] border-b py-2 hover:py-2 text-xl">{item.name}</p>
                </Link>
              )}
            </div>
          ))}
        
        </div>
      </div>
      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="w-full mt-4">
          {menu.map((item: any, index) => (
            <div key={index} className="flex flex-col items-center py-2">
              {item.name === "Categories" ? (
                <div className="flex items-center relative">
                  <p onClick={toggleSubPages}>{item.name}</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 ml-3 cursor-pointer ${showCategories ? "transform rotate-180" : ""}`} onClick={toggleSubPages}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                  {showCategories && (
                    <div className="absolute left-0 mt-[13rem] bg-teal-50 shadow-md rounded-md w-[220px]">
                      <ul>
                        {item.subPages.map((subPage: any, index: number) => (
                          <li key={index} className="w-full">
                            <Link onClick={toggleSubPages} href={subPage.url}>
                              <p className="px-4 py-4 w-full hover:bg-sky-900 hover:text-white cursor-pointer ">{subPage.name}</p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <Link href={item.url ? item.url : ""}>
                  <p className="hover:border border hover:border-b-[#082f49] hover:text-[#082f49] border-b py-2 hover:py-2">{item.name}</p>
                </Link>
              )}
            </div>
          ))}
      
        </div>
      )}
    </nav>
  );
};

export default Navbar;
