"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

const Damo = () => {
  const settings1 = {
    // dots: true,
    infinite: true,
    slidesToShow: 4.5,
    slidesToScroll: -1,
    arrows: false,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    centerPadding: 10,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  const settings2 = {
    // dots: true,
    infinite: true,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 2000,
    autoplaySpeed: 2000,
    centerPadding: 10,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div id="Demo" className="bg-[#202020] py-9 pt-7">
      <div className="flex items-center justify-center">
        <h1 className="text-[#FFFFFF] font-bold text-[2rem] uppercase underline underline-offset-1">
          {" "}
          colletions
        </h1>
      </div>

      <div className=" mt-4">
        <div className="mb-4  ">
          <Slider className="" {...settings1}>
            <div className="p-4">
              <div className="bg-[#f9f7f7] rounded-2xl  border-2 border-white  ">
                <div className="flex content-center justify-center items-center overflow-hidden">
                  <Image
                    className=""
                    src="/./assets/NFTS/bighead.png"
                    width={500}
                    height={1}
                    alt="Picture of the author"
                  />
                </div>
                <div className="flex justify-between text-center bg-[#202020] px-6 rounded-b-2xl font-bold text-[#FFFFFF]">
                  <div className=" ">
                    <h1 className="text-gray-500 text-[.] ">weriod</h1>
                    <h1 className="text-[.]">#666</h1>
                  </div>
                  <div>
                    <h1 className="text-gray-500 text-[.]">price</h1>
                    <h1 className="text-[.]">0.89E</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-[#f9f7f7] rounded-2xl  border-2 border-white  ">
                <div className="flex content-center justify-center items-center overflow-hidden">
                  <Image
                    className=""
                    src="/./assets/NFTS/bighead-1.png"
                    width={500}
                    height={1}
                    alt="Picture of the author"
                  />
                </div>
                <div className="flex justify-between text-center bg-[#202020] px-6 rounded-b-2xl font-bold text-[#FFFFFF]">
                  <div className=" ">
                    <h1 className="text-gray-500 ">weriod</h1>
                    <h1>#666</h1>
                  </div>
                  <div>
                    <h1 className="text-gray-500">price</h1>
                    <h1>0.89E</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-[#f9f7f7] rounded-2xl  border-2 border-white  ">
                <div className="flex content-center justify-center items-center overflow-hidden">
                  <Image
                    className=""
                    src="/./assets/NFTS/bighead-2.png"
                    width={500}
                    height={1}
                    alt="Picture of the author"
                  />
                </div>
                <div className="flex justify-between text-center bg-[#202020] px-6 rounded-b-2xl font-bold text-[#FFFFFF]">
                  <div className=" ">
                    <h1 className="text-gray-500 ">weriod</h1>
                    <h1>#666</h1>
                  </div>
                  <div>
                    <h1 className="text-gray-500">price</h1>
                    <h1>0.89E</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-[#f9f7f7] rounded-2xl  border-2 border-white  ">
                <div className="flex content-center justify-center items-center overflow-hidden">
                  <Image
                    className=""
                    src="/./assets/NFTS/bighead-3.png"
                    width={500}
                    height={1}
                    alt="Picture of the author"
                  />
                </div>
                <div className="flex justify-between text-center bg-[#202020] px-6 rounded-b-2xl font-bold text-[#FFFFFF]">
                  <div className=" ">
                    <h1 className="text-gray-500 ">weriod</h1>
                    <h1>#666</h1>
                  </div>
                  <div>
                    <h1 className="text-gray-500">price</h1>
                    <h1>0.89E</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-[#f9f7f7] rounded-2xl  border-2 border-white  ">
                <div className="flex content-center justify-center items-center overflow-hidden">
                  <Image
                    className=""
                    src="/./assets/NFTS/bighead-4.png"
                    width={500}
                    height={1}
                    alt="Picture of the author"
                  />
                </div>
                <div className="flex justify-between text-center bg-[#202020] px-6 rounded-b-2xl font-bold text-[#FFFFFF]">
                  <div className=" ">
                    <h1 className="text-gray-500 ">weriod</h1>
                    <h1>#666</h1>
                  </div>
                  <div>
                    <h1 className="text-gray-500">price</h1>
                    <h1>0.89E</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-[#f9f7f7] rounded-2xl  border-2 border-white  ">
                <div className="flex content-center justify-center items-center overflow-hidden">
                  <Image
                    className=""
                    src="/./assets/NFTS/bighead-5.png"
                    width={500}
                    height={1}
                    alt="Picture of the author"
                  />
                </div>
                <div className="flex justify-between text-center bg-[#202020] px-6 rounded-b-2xl font-bold text-[#FFFFFF]">
                  <div className=" ">
                    <h1 className="text-gray-500 ">weriod</h1>
                    <h1>#666</h1>
                  </div>
                  <div>
                    <h1 className="text-gray-500">price</h1>
                    <h1>0.89E</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-[#f9f7f7] rounded-2xl  border-2 border-white  ">
                <div className="flex content-center justify-center items-center overflow-hidden">
                  <Image
                    className=""
                    src="/./assets/NFTS/bighead-6.png"
                    width={500}
                    height={1}
                    alt="Picture of the author"
                  />
                </div>
                <div className="flex justify-between text-center bg-[#202020] px-6 rounded-b-2xl font-bold text-[#FFFFFF]">
                  <div className=" ">
                    <h1 className="text-gray-500 ">weriod</h1>
                    <h1>#666</h1>
                  </div>
                  <div>
                    <h1 className="text-gray-500">price</h1>
                    <h1>0.89E</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-[#f9f7f7] rounded-2xl  border-2 border-white  ">
                <div className="flex content-center justify-center items-center overflow-hidden">
                  <Image
                    className=""
                    src="/./assets/NFTS/bighead-7.png"
                    width={500}
                    height={1}
                    alt="Picture of the author"
                  />
                </div>
                <div className="flex justify-between text-center bg-[#202020] px-6 rounded-b-2xl font-bold text-[#FFFFFF]">
                  <div className=" ">
                    <h1 className="text-gray-500 ">weriod</h1>
                    <h1>#666</h1>
                  </div>
                  <div>
                    <h1 className="text-gray-500">price</h1>
                    <h1>0.89E</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-[#f9f7f7] rounded-2xl  border-2 border-white  ">
                <div className="flex content-center justify-center items-center overflow-hidden">
                  <Image
                    className=""
                    src="/./assets/NFTS/bighead-8.png"
                    width={500}
                    height={1}
                    alt="Picture of the author"
                  />
                </div>
                <div className="flex justify-between text-center bg-[#202020] px-6 rounded-b-2xl font-bold text-[#FFFFFF]">
                  <div className=" ">
                    <h1 className="text-gray-500 ">weriod</h1>
                    <h1>#666</h1>
                  </div>
                  <div>
                    <h1 className="text-gray-500">price</h1>
                    <h1>0.89E</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-[#f9f7f7] rounded-2xl  border-2 border-white  ">
                <div className="flex content-center justify-center items-center overflow-hidden">
                  <Image
                    className=""
                    src="/./assets/NFTS/bighead-9.png"
                    width={500}
                    height={1}
                    alt="Picture of the author"
                  />
                </div>
                <div className="flex justify-between text-center bg-[#202020] px-6 rounded-b-2xl font-bold text-[#FFFFFF]">
                  <div className=" ">
                    <h1 className="text-gray-500 ">weriod</h1>
                    <h1>#666</h1>
                  </div>
                  <div>
                    <h1 className="text-gray-500">price</h1>
                    <h1>0.89E</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-[#f9f7f7] rounded-2xl  border-2 border-white  ">
                <div className="flex content-center justify-center items-center overflow-hidden">
                  <Image
                    className=""
                    src="/./assets/NFTS/bighead-10.png"
                    width={500}
                    height={1}
                    alt="Picture of the author"
                  />
                </div>
                <div className="flex justify-between text-center bg-[#202020] px-6 rounded-b-2xl font-bold text-[#FFFFFF]">
                  <div className=" ">
                    <h1 className="text-gray-500 ">weriod</h1>
                    <h1>#666</h1>
                  </div>
                  <div>
                    <h1 className="text-gray-500">price</h1>
                    <h1>0.89E</h1>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="mb-4  ">
          <Slider className="" {...settings2}>
            <div className="p-4">
              <div className="bg-[#f9f7f7] rounded-2xl  border-2 border-white  ">
                <div className="flex content-center justify-center items-center overflow-hidden">
                  <Image
                    className=""
                    src="/./assets/NFTS/bighead.png"
                    width={500}
                    height={1}
                    alt="Picture of the author"
                  />
                </div>
                <div className="flex justify-between text-center bg-[#202020] px-6 rounded-b-2xl font-bold text-[#FFFFFF]">
                  <div className=" ">
                    <h1 className="text-gray-500 text-[.] ">weriod</h1>
                    <h1 className="text-[.]">#666</h1>
                  </div>
                  <div>
                    <h1 className="text-gray-500 text-[.]]">price</h1>
                    <h1 className="text-[.]">0.89E</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-[#f9f7f7] rounded-2xl  border-2 border-white  ">
                <div className="flex content-center justify-center items-center overflow-hidden">
                  <Image
                    className=""
                    src="/./assets/NFTS/bighead-1.png"
                    width={500}
                    height={1}
                    alt="Picture of the author"
                  />
                </div>
                <div className="flex justify-between text-center bg-[#202020] px-6 rounded-b-2xl font-bold text-[#FFFFFF]">
                  <div className=" ">
                    <h1 className="text-gray-500 ">weriod</h1>
                    <h1>#666</h1>
                  </div>
                  <div>
                    <h1 className="text-gray-500">price</h1>
                    <h1>0.89E</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-[#f9f7f7] rounded-2xl  border-2 border-white  ">
                <div className="flex content-center justify-center items-center overflow-hidden">
                  <Image
                    className=""
                    src="/./assets/NFTS/bighead-2.png"
                    width={500}
                    height={1}
                    alt="Picture of the author"
                  />
                </div>
                <div className="flex justify-between text-center bg-[#202020] px-6 rounded-b-2xl font-bold text-[#FFFFFF]">
                  <div className=" ">
                    <h1 className="text-gray-500 ">weriod</h1>
                    <h1>#666</h1>
                  </div>
                  <div>
                    <h1 className="text-gray-500">price</h1>
                    <h1>0.89E</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-[#f9f7f7] rounded-2xl  border-2 border-white  ">
                <div className="flex content-center justify-center items-center overflow-hidden">
                  <Image
                    className=""
                    src="/./assets/NFTS/bighead-3.png"
                    width={500}
                    height={1}
                    alt="Picture of the author"
                  />
                </div>
                <div className="flex justify-between text-center bg-[#202020] px-6 rounded-b-2xl font-bold text-[#FFFFFF]">
                  <div className=" ">
                    <h1 className="text-gray-500 ">weriod</h1>
                    <h1>#666</h1>
                  </div>
                  <div>
                    <h1 className="text-gray-500">price</h1>
                    <h1>0.89E</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-[#f9f7f7] rounded-2xl  border-2 border-white  ">
                <div className="flex content-center justify-center items-center overflow-hidden">
                  <Image
                    className=""
                    src="/./assets/NFTS/bighead-4.png"
                    width={500}
                    height={1}
                    alt="Picture of the author"
                  />
                </div>
                <div className="flex justify-between text-center bg-[#202020] px-6 rounded-b-2xl font-bold text-[#FFFFFF]">
                  <div className=" ">
                    <h1 className="text-gray-500 ">weriod</h1>
                    <h1>#666</h1>
                  </div>
                  <div>
                    <h1 className="text-gray-500">price</h1>
                    <h1>0.89E</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-[#f9f7f7] rounded-2xl  border-2 border-white  ">
                <div className="flex content-center justify-center items-center overflow-hidden">
                  <Image
                    className=""
                    src="/./assets/NFTS/bighead-5.png"
                    width={500}
                    height={1}
                    alt="Picture of the author"
                  />
                </div>
                <div className="flex justify-between text-center bg-[#202020] px-6 rounded-b-2xl font-bold text-[#FFFFFF]">
                  <div className=" ">
                    <h1 className="text-gray-500 ">weriod</h1>
                    <h1>#666</h1>
                  </div>
                  <div>
                    <h1 className="text-gray-500">price</h1>
                    <h1>0.89E</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-[#f9f7f7] rounded-2xl  border-2 border-white  ">
                <div className="flex content-center justify-center items-center overflow-hidden">
                  <Image
                    className=""
                    src="/./assets/NFTS/bighead-6.png"
                    width={500}
                    height={1}
                    alt="Picture of the author"
                  />
                </div>
                <div className="flex justify-between text-center bg-[#202020] px-6 rounded-b-2xl font-bold text-[#FFFFFF]">
                  <div className=" ">
                    <h1 className="text-gray-500 ">weriod</h1>
                    <h1>#666</h1>
                  </div>
                  <div>
                    <h1 className="text-gray-500">price</h1>
                    <h1>0.89E</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-[#f9f7f7] rounded-2xl  border-2 border-white  ">
                <div className="flex content-center justify-center items-center overflow-hidden">
                  <Image
                    className=""
                    src="/./assets/NFTS/bighead-7.png"
                    width={500}
                    height={1}
                    alt="Picture of the author"
                  />
                </div>
                <div className="flex justify-between text-center bg-[#202020] px-6 rounded-b-2xl font-bold text-[#FFFFFF]">
                  <div className=" ">
                    <h1 className="text-gray-500 ">weriod</h1>
                    <h1>#666</h1>
                  </div>
                  <div>
                    <h1 className="text-gray-500">price</h1>
                    <h1>0.89E</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-[#f9f7f7] rounded-2xl  border-2 border-white  ">
                <div className="flex content-center justify-center items-center overflow-hidden">
                  <Image
                    className=""
                    src="/./assets/NFTS/bighead-8.png"
                    width={500}
                    height={1}
                    alt="Picture of the author"
                  />
                </div>
                <div className="flex justify-between text-center bg-[#202020] px-6 rounded-b-2xl font-bold text-[#FFFFFF]">
                  <div className=" ">
                    <h1 className="text-gray-500 ">weriod</h1>
                    <h1>#666</h1>
                  </div>
                  <div>
                    <h1 className="text-gray-500">price</h1>
                    <h1>0.89E</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-[#f9f7f7] rounded-2xl  border-2 border-white  ">
                <div className="flex content-center justify-center items-center overflow-hidden">
                  <Image
                    className=""
                    src="/./assets/NFTS/bighead-9.png"
                    width={500}
                    height={1}
                    alt="Picture of the author"
                  />
                </div>
                <div className="flex justify-between text-center bg-[#202020] px-6 rounded-b-2xl font-bold text-[#FFFFFF]">
                  <div className=" ">
                    <h1 className="text-gray-500 ">weriod</h1>
                    <h1>#666</h1>
                  </div>
                  <div>
                    <h1 className="text-gray-500">price</h1>
                    <h1>0.89E</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-[#f9f7f7] rounded-2xl  border-2 border-white  ">
                <div className="flex content-center justify-center items-center overflow-hidden">
                  <Image
                    className=""
                    src="/./assets/NFTS/bighead-10.png"
                    width={500}
                    height={1}
                    alt="Picture of the author"
                  />
                </div>
                <div className="flex justify-between text-center bg-[#202020] px-6 rounded-b-2xl font-bold text-[#FFFFFF]">
                  <div className=" ">
                    <h1 className="text-gray-500 ">weriod</h1>
                    <h1>#666</h1>
                  </div>
                  <div>
                    <h1 className="text-gray-500">price</h1>
                    <h1>0.89E</h1>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Damo;
