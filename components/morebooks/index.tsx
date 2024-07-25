import React from "react";
import Image from "next/image";
import Link from "next/link";
import { bookImages } from "@/data";

const MoreBooks = () => {

  return (
    <div className="w-full">
      <h1 className="text-center font-custom w-full my-3 lg:text-4xl text-2xl">More Books from the Author</h1>
      <div className="w-full flex">
        {bookImages.map((item, index) => (
          <Link href={item.url} key={index} className="w-full">
            <Image className="w-full h-[40vh]" src={item.src} alt="image" loading="lazy" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoreBooks;
