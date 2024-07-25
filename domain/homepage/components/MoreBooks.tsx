import React from "react";
import Image from "next/image";
import Button from "@/components/button";
import {bookData} from "@/data";
import { useRouter } from "next/navigation";

const MoreBooks = () => {
    const router = useRouter()
 
  return (
    <section className="w-full bg-white py-4 lg:py-[4rem] flex flex-col items-center justify-center gap-[5rem] lg:px-[8rem]  px-[1rem] sidebar">
      <h1 className="font-custom text-center text-4xl font-semibold">More Books From The Author</h1>
      <div className="grid md:grid-cols-2 gap-3 xl:grid-cols-3 w-full">
        {bookData.map((item, index: number) => (
          <div key={index} className="flex w-full gap-1 items-center">
            <div className="w-full">
              <Image className="w-full lg:w-[180px] h-[260px]" src={item.img} alt="image" />
            </div>
            <div className="flex flex-col items-start gap-8 justify-between">
              <h2 className="font-custom w-[80%]">{item.text}</h2>
              <div className="flex items-center gap-1">
                <div className="rounded-full w-3 h-3 bg-[#6A2229]" />
                <p>{item.page}</p>
              </div>
              <Button onClick={()=> router.push(item.url)} backgroundColor="white" color="black" border="1px solid black" title={item.button} />
            </div>
          </div>
        ))}
      </div>
      <Button onClick={()=> router.push('/categories/contemporary-romance')} title="Show More" fontSize="20px" />
    </section>
  );
};

export default MoreBooks;
