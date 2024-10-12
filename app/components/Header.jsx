"use client";
import Image from "next/image";
import ProfilePicture from "../assets/Marc Ruizenaar Front-end Developer.jpg";
import { useEffect, useRef } from "react";



export default function Header() {

  const hamburgerMenuRef = useRef(null);

  useEffect(() => {
      const hamburgerMenu = hamburgerMenuRef.current;

      const handleToggle = () => {
          if (hamburgerMenu.open) {
              document.body.classList.add('no-scroll');
          } else {
              document.body.classList.remove('no-scroll');
          }
      };

      hamburgerMenu.addEventListener('toggle', handleToggle);

      return () => {
          hamburgerMenu.removeEventListener('toggle', handleToggle);
      };
  }, []);

  return (
    <header className="flex items-center relative justify-between py-4 md:mt-4">
      <div className="topBorder absolute left-0 top-0 hidden h-[0.2rem] w-full md:block"></div>
      <div className="topcorners absolute left-[-2px] top-[-3px] z-10 hidden h-5 w-5 md:block"></div>
      <div className="topcorners absolute right-[-2px] top-[-3px] z-10 hidden h-5 w-5 rotate-90 md:block"></div>
      <div className="corners absolute bottom-[-8px] left-0 z-10 h-5 w-5"></div>
      <div className="corners absolute bottom-[-8px] right-0 z-10 h-5 w-5 rotate-180"></div>

      <div className="flex w-full items-center md:justify-normal justify-between gap-6 md:pl-6">
        <Image
          src={ProfilePicture}
          height={50}
          width={50}
          alt=""
          className="rounded-full z-50 object-cover"
        />
        <nav className="hidden gap-8 md:flex">
          <a href="#aboutme">About me</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <details ref={hamburgerMenuRef} id="hamburgerMenu" className="md:hidden">
        <summary className="flex flex-col gap-1 absolute cursor-pointer z-50 right-10 top-10">
            <span className="block h-[1px] w-4 bg-black"></span>
            <span className="block h-[1px] w-4 bg-black"></span>
            <span className="block h-[1px] w-4 bg-black"></span>
          </summary>

          <nav className="fixed inset-0 z-20 flex h-screen flex-col items-center justify-center gap-8 bg-white">
            <a href="#aboutme">About me</a>
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
        </details>
      </div>

      <div className="hidden items-center text-nowrap gap-6 pr-6 md:flex">
        <a href="tel:+31628672650" className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mainGreen opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-600"></span>
          </span>
          <p>Available now</p>
        </a>
        <a href="#contact" className="rounded bg-black px-4 py-2 text-white">
          Contact me
        </a>
      </div>

      <div className="topBorder absolute bottom-0 left-0 h-[0.2rem] w-full"></div>
    
    </header>
  );
}
