"use client";
import { menu } from "@/data";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 w-full px-3 md:px-8 lg:px-24 xl:px-40 bg-[#e0f2fe]">
      <div className="container mx-auto flex flex-col  items-center px-4 gap-6 w-full">
        <nav className="flex flex-wrap gap-4 lg:gap-16 md:justify-end w-full items-center">
          {menu
            .filter((item) => item.name !== "Categories") 
            .map((item, index) => (
              <div className="flex" key={index}>
                <Link href={item.url ? item.url : ""}>
                  <p className="hover:border border hover:border-b-[#6B232A] hover:text-[#6B232A] border-b py-2 hover:py-2">{item.name}</p>
                </Link>
              </div>
            ))}
        </nav>
        <div className="mb-4 lg:mb-0 flex items-center justify-between w-full">
          <p className="w-full">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
