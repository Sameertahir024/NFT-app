"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <div id="FAQ" className="grid md:grid-cols-2 py-24  ">
      <div className="text-center md:text-start p-6 px-16  ">
        <h1 className="text-[30px] font-[Merriweather] font-semibold leading-[150%] tracking-[0.5px] ">
          Frequently asked questions
        </h1>
        <h3 className="font-[1rem] font-[Roboto] text-lg not-italic  leading-[150%]">
          Once you have purchased either the design, code, or both packages, you
          will have access to all of the future updates based on the roadmap,
          free of charge.
        </h3>
      </div>
      <div className=" w-full p-6 ">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full border-b-2 border-[#202020] justify-between  px-4 py-3 text-left text-sm font-medium text-[#202020] hover:bg-[#f9f7f7]   ">
                <span>What is your refund policy?</span>
                <ChevronUpIcon
                  className={`${open ? "rotate-180 transform" : ""} h-5 w-5 `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-[#202020]">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full border-b-2 border-[#202020] justify-between  px-4 py-3 text-left text-sm font-medium text-[#202020] hover:bg-[#f9f7f7]   ">
                <span>What integrations do you support?</span>
                <ChevronUpIcon
                  className={`${open ? "rotate-180 transform" : ""} h-5 w-5 `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-[#202020]">
                Pellentesque neque in vitae turpis dapibus diam duis amet.
                Arcu augue blandit auctor auctor varius dui consectetur.
                Ac mattis dapibus volutpat, pulvinar eget sed sit nisi.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full border-b-2 border-[#202020] justify-between  px-4 py-3 text-left text-sm font-medium text-[#202020] hover:bg-[#f9f7f7]   ">
                <span>
                  I want to build more than one project. Is that allowed?
                </span>
                <ChevronUpIcon
                  className={`${open ? "rotate-180 transform" : ""} h-5 w-5 `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-[#202020]">
                Pellentesque neque in vitae turpis dapibus diam duis amet.
                Arcu augue blandit auctor auctor varius dui consectetur.
                Ac mattis dapibus volutpat, pulvinar eget sed sit nisi.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full border-b-2 border-[#202020] justify-between  px-4 py-3 text-left text-sm font-medium text-[#202020] hover:bg-[#f9f7f7]   ">
                <span>Can I use Windster in open-source projects?</span>
                <ChevronUpIcon
                  className={`${open ? "rotate-180 transform" : ""} h-5 w-5 `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-[#202020]">
                Pellentesque neque in vitae turpis dapibus diam duis amet.
                Arcu augue blandit auctor auctor varius dui consectetur.
                Ac mattis dapibus volutpat, pulvinar eget sed sit nisi.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full border-b-2 border-[#202020] justify-between  px-4 py-3 text-left text-sm font-medium text-[#202020] hover:bg-[#f9f7f7]   ">
                <span>How does support work?</span>
                <ChevronUpIcon
                  className={`${open ? "rotate-180 transform" : ""} h-5 w-5 `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-[#202020]">
                Pellentesque neque in vitae turpis dapibus diam duis amet.
                Arcu augue blandit auctor auctor varius dui consectetur.
                Ac mattis dapibus volutpat, pulvinar eget sed sit nisi.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
