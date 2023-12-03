"use client";
import Image from "next/image";
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import "./styles.css";

// import required modules
import { Autoplay, Navigation, Pagination, EffectCards } from "swiper/modules";

const About = () => {
  return (
    <div id="About" className="bg-b">
      <div className=" grid md:grid-cols-2 place-content-center justify-items-center md:max-w-[60.5rem] mx-auto py-10 p-12">
        <div className="grid place-content-center justify-items-center ">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay, EffectCards]}
            className="h-[18rem] w-[12.625rem]  "
          >
            <SwiperSlide className=" bg-[#FFFFFF]   rounded-2xl   ">
              <div className=" bg-[#FFFFFF] flex items-center justify-center">
                <Image
                  className=""
                  src="/./assets/NFTS/bighead.png"
                  width={500}
                  height={1}
                  alt="Picture of the author"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className=" bg-[#FFFFFF]   rounded-2xl   ">
              <div className=" bg-[#FFFFFF] flex items-center justify-center">
                <Image
                  className=""
                  src="/./assets/NFTS/bighead-1.png"
                  width={500}
                  height={1}
                  alt="Picture of the author"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className=" bg-[#FFFFFF]   rounded-2xl   ">
              <div className=" bg-[#FFFFFF] flex items-center justify-center">
                <Image
                  className=""
                  src="/./assets/NFTS/bighead-2.png"
                  width={500}
                  height={1}
                  alt="Picture of the author"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className=" bg-[#FFFFFF]   rounded-2xl   ">
              <div className=" bg-[#FFFFFF] flex items-center justify-center">
                <Image
                  className=""
                  src="/./assets/NFTS/bighead-3.png"
                  width={500}
                  height={1}
                  alt="Picture of the author"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className=" bg-[#FFFFFF]   rounded-2xl   ">
              <div className=" bg-[#FFFFFF] flex items-center justify-center">
                <Image
                  className=""
                  src="/./assets/NFTS/bighead-4.png"
                  width={500}
                  height={1}
                  alt="Picture of the author"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className=" bg-[#FFFFFF]   rounded-2xl   ">
              <div className=" bg-[#FFFFFF] flex items-center justify-center">
                <Image
                  className=""
                  src="/./assets/NFTS/bighead-5.png"
                  width={500}
                  height={1}
                  alt="Picture of the author"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className=" bg-[#FFFFFF]   rounded-2xl   ">
              <div className=" bg-[#FFFFFF] flex items-center justify-center">
                <Image
                  className=""
                  src="/./assets/NFTS/bighead-6.png"
                  width={500}
                  height={1}
                  alt="Picture of the author"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className=" bg-[#FFFFFF]   rounded-2xl   ">
              <div className=" bg-[#FFFFFF] flex items-center justify-center">
                <Image
                  className=""
                  src="/./assets/NFTS/bighead-7.png"
                  width={500}
                  height={1}
                  alt="Picture of the author"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className=" bg-[#FFFFFF]   rounded-2xl   ">
              <div className=" bg-[#FFFFFF] flex items-center justify-center">
                <Image
                  className=""
                  src="/./assets/NFTS/bighead-8.png"
                  width={500}
                  height={1}
                  alt="Picture of the author"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="  bg-[#FFFFFF]   rounded-2xl   ">
              <div className=" bg-[#FFFFFF] flex items-center justify-center">
                <Image
                  className=""
                  src="/./assets/NFTS/bighead-9.png"
                  width={500}
                  height={1}
                  alt="Picture of the author"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className=" bg-[#FFFFFF]   rounded-2xl   ">
              <div className=" flex items-center justify-center">
                <Image
                  className=""
                  src="/./assets/NFTS/bighead-10.png"
                  width={500}
                  height={1}
                  alt="Picture of the author"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="    ">
          <div className="  flex flex-col   justify-center md:justify-start md:text-start text-center  gap-5 mt-6 text-[#FFFFFF] ">
            <h1 className="text-[1.25rem] font-bold ">
              Welcome To The Weirdos Club.
            </h1>
            <h3 className="text-[.875rem] font-bold">
              The WEIRDOS CLUB is a private collection of NFTs—unique digital
              collectibles. The Weirdos are stored as ERC-721 tokens on the
              Ethereum blockchain and hosted on IPFS.
            </h3>
            <p className="text-[.75rem]">
              With more than 200 hand drawn traits, each NFT is unique and comes
              with a membership to an exclusive group of successful investors.
              Join an ambitious ever-growing community with multiple benefits
              and utilities.
            </p>
            <div className="mb-4">
              <button className="text-[#202020] bg-[#FFFFFF] font-light py-[10.4px] px-[36.8px] rounded-[3.125rem] ">
                JOIN OUR DISCORD
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
