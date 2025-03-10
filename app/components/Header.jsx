"use client";
import Image from "next/image";
import ProfilePicture from "../assets/Marc-Ruizenaar-Front-end-Developer.jpg";
import { useEffect, useRef } from "react";
import HeaderStyling from "./styling/HeaderStyling";
import Link from "next/link";
import LineStyling from "./styling/LineStyling";

export default function Header() {
  const hamburgerMenuRef = useRef(null);

  useEffect(() => {
    const hamburgerMenu = hamburgerMenuRef.current;

    const handleToggle = () => {
      if (hamburgerMenu.open) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    };

    hamburgerMenu.addEventListener("toggle", handleToggle);

    return () => {
      hamburgerMenu.removeEventListener("toggle", handleToggle);
    };
  }, []);

  const links = [
    {
      href: "#aboutme",
      text: "About me",
    },
    {
      href: "#work",
      text: "Work",
    },
    {
      href: "#experience",
      text: "Experience",
    },
    {
      href: "#contact",
      text: "Contact",
    },
  ];

  return (
    <header className="relative flex items-center justify-between p-5 py-4 md:mt-4">
      <HeaderStyling />

      <div className="flex w-full items-center justify-between gap-6 md:justify-normal md:pl-6">
        <Link href={"./"}>
          <Image
            src={ProfilePicture}
            height={50}
            width={50}
            alt=""
            loading="eager"
            className="z-50 rounded-full object-cover"
          />
        </Link>

        <nav id="headerNav" className="hidden md:flex md:gap-4 lg:gap-8">
          <ul className="flex gap-4 lg:gap-8">
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <Link href={link.href} className="group relative">
                    {link.text}
                    <span className="absolute bottom-[-2px] left-0 h-1 w-0 bg-mainGreen duration-300 group-hover:w-full group-hover:transition-all"></span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <details
          ref={hamburgerMenuRef}
          id="hamburgerMenu"
          className="appearance-none md:hidden"
        >
          <summary className="absolute right-5 top-5 z-50 flex cursor-pointer flex-col gap-1 p-5">
            <span className="block h-[1px] w-4 bg-black"></span>
            <span className="block h-[1px] w-4 bg-black"></span>
            <span className="block h-[1px] w-4 bg-black"></span>
          </summary>

          <nav className="fixed inset-0 z-20 h-screen bg-white">
            <ul className="flex h-screen flex-col items-center justify-center gap-8">
              {links.map((link, index) => {
                return (
                  <li key={index}>
                    <Link href={link.href} className="group relative">
                      {link.text}
                      <span className="absolute bottom-[-2px] left-0 h-1 w-0 bg-mainGreen duration-300 group-hover:w-full group-hover:transition-all"></span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </details>
      </div>

      <div className="hidden items-center gap-6 text-nowrap pr-6 md:flex">
        <Link href="tel:+31628672650" className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-600"></span>
          </span>
          <p>Available now</p>
        </Link>
      </div>

      <LineStyling />
    </header>
  );
}
