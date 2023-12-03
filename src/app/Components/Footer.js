"use client";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#202020] px-[1.5rem] md:px-[3.75rem]  py-[1.25rem] mt-2">
      <div className="grid md:grid-cols-2 place-items-center justify-items-center  ">
        <div>
          <h1 className="text-[#FFF] font-[Sanchez] text-[46px] not-italic font-normal leading-[150%] tracking-[0.5px]">
            Join our team
          </h1>
          <p className="text-[#FFF] font-[Roboto] text-lg not-italic font-semibold leading-[150%]">
            we will send you update once a week{" "}
          </p>
        </div>
        <div className="mt-5 md:mt-10">
          <Image
            className=""
            src="/./assets/NFTS/Maps.png"
            width={300}
            height={1}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center place-items-center my-11 gap-6 ">
        <div className="flex flex-col gap-3">
          <h1 className="text-[#FFF] font-Roboto text-lg not-italic font-semibold leading-[150%] capitalize">
            Company
          </h1>
          <p className="text-[#FFF] font-[Roboto] text-base not-italic font-normal leading-[150%]">
            Why Choose us
          </p>
          <p className="text-[#FFF] font-[Roboto] text-base not-italic font-normal leading-[150%]">
            About Us
          </p>
          <p className="text-[#FFF] font-[Roboto] text-base not-italic font-normal leading-[150%]">
            Pricing
          </p>
          <p className="text-[#FFF] font-[Roboto] text-base not-italic font-normal leading-[150%]">
            Testimonial
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-[#FFF] font-Roboto text-lg not-italic font-semibold leading-[150%] capitalize">
            Pricing Plan
          </h1>
          <p className="text-[#FFF] font-[Roboto] text-base not-italic font-normal leading-[150%]">
            Documentation
          </p>
          <p className="text-[#FFF] font-[Roboto] text-base not-italic font-normal leading-[150%]">
            Guide
          </p>
          <p className="text-[#FFF] font-[Roboto] text-base not-italic font-normal leading-[150%]">
            Tutorial
          </p>
          <p className="text-[#FFF] font-[Roboto] text-base not-italic font-normal leading-[150%]">
            Rate us
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-[#FFF] font-Roboto text-lg not-italic font-semibold leading-[150%] capitalize">
            About
          </h1>
          <p className="text-[#FFF] font-[Roboto] text-base not-italic font-normal leading-[150%]">
            Press
          </p>
          <p className="text-[#FFF] font-[Roboto] text-base not-italic font-normal leading-[150%]">
            Partners
          </p>
          <p className="text-[#FFF] font-[Roboto] text-base not-italic font-normal leading-[150%]">
            Pricing
          </p>
          <p className="text-[#FFF] font-[Roboto] text-base not-italic font-normal leading-[150%]">
            Testimonial
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-[#FFF] font-Roboto text-lg not-italic font-semibold leading-[150%] capitalize">
            Terms fff
          </h1>
          <p className="text-[#FFF] font-[Roboto] text-base not-italic font-normal leading-[150%]">
            Privacy
          </p>
          <p className="text-[#FFF] font-[Roboto] text-base not-italic font-normal leading-[150%]">
            Domains
          </p>
          <p className="text-[#FFF] font-[Roboto] text-base not-italic font-normal leading-[150%]">
            Server
          </p>
          <p className="text-[#FFF] font-[Roboto] text-base not-italic font-normal leading-[150%]">
            E-mail Hosting
          </p>
        </div>
      </div>
      <hr />
      <div>
        <div className="flex items-center justify-center mt-4">
          <h1 className="text-[#FFF] font-[Inter] text-xl not-italic font-normal leading-[150%]">
            Copyright @2023
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
