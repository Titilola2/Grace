import Button from "@/components/button";
import React from "react";

const NewsLetter = () => {
  return (
    <section className="w-full bg-white h-auto flex py-16 lg:px-[8rem] px-[1rem] sidebar">
      <div className="w-full h-auto bg-[#F0E1D3] flex flex-col justify-center items-center py-14">
        <h1 className="font-custom text-4xl">Join My Inner Circle</h1>
        <div className="border-b-2 w-9 border-red-900 mt-2 mb-4" />
        <p className="w-full lg:w-[50%] text-center"> Get unlimited access to me and early access to any of my future works, Be one of the first to know about up coming releases and events</p>
        <div className="w-full mt-4 gap-1 flex justify-center items-center">
          <input className="h-[100%] w-[50%] lg:w-[35%] px-2" type="email" placeholder="Your Email" />
          <Button title="Subscribe" fontSize="16px" width="20%"/>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
