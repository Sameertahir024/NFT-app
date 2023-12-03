import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  return (
    <div className="bg-[#cabfbf20]">
      <div className=" max-w-[1440px] mx-auto  flex justify-between items-center px-[1.5rem] md:px-[3.75rem]  py-[1.25rem] ">
        <div className="">
          <Link href="/">
            <Image src="/./assets/logo.png" width={80} height={28} alt="" />
          </Link>
        </div>

        <div>
          <ul className="hidden md:flex gap-[2.75rem]  text-center font-Open_Sans text-base not-italic font-semibold">
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="#About">ABOUT</Link>
            </li>
            <li>
              <Link href="#Team">TEAM</Link>
            </li>
            <li>
              <Link href="#Demo">CLLECTIONS</Link>
            </li>
            <li>
              <Link href="#FAQ">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex font-open-sans bg-b text-[#FFFFFF] text-[16px] font-[600] border px-4 py-1 rounded-[50px] ">
          <Link href="/Register">Register</Link>
        </div>
        <div className="flex md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Nav;
