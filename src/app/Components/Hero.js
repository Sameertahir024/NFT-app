"use client";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import custum from "../custom.module.css";

const Hero = () => {
  return (
    <div className="bg-w">
      <div className="flex flex-col md:grid grid-cols-2 place-content-center justify-items-center md:grid-flow-row-dense gap-3 md:h-[calc(100vh-5.5rem)] items-center justify-center md:max-w-[65.5rem] mx-auto pt-5 p-4">
        <div className="flex md:hidden bg-[#f9f7f7]  shape-style-2 ">
          <Image
            src="/./assets/Home GIF.gif"
            width={300}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className="  flex flex-col gap-2  md items-center md:items-start md:text-start justify-center text-center mt-4">
          <h1 className="text-[60px] font-[Merriweather] leading-[150%] tracking-[0.5px] ">
            Discover A New <br />
            ERA Of Cool
          </h1>
          <div className="text-4xl md:text-5xl text-[#FFFFFF] bg-gradient-to-r from-gray-800   font-[Inter]  not-italic font-normal leading-[150%]">
            <Typewriter
              options={{
                strings: ["NFTS...", "APE KILLERS...", "COLLECTIONS..."],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <h3 className="font-[1rem] font-[Roboto] text-lg not-italic  leading-[150%]">
            Bored Of Apes? Try Something New.
          </h3>
          <button className="bg-black w-40 font-bold uppercase  text-white py-[10.4px] px-[36.8px] rounded-[3.125rem]">
            exlore
          </button>
        </div>
        <div className="hidden md:flex shape-style">
          <div className="w-[]  ">
            <Image
              className="overflow-visible "
              src="/./assets/Home GIF.gif"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
