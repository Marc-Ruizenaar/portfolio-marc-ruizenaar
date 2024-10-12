"use client";
import AboutMe from "./components/AboutMe";
import JumboHeader from "./components/JumboHeader";
import Projects from "./components/Projects";
import MyExperience from "./components/MyExperience";
import ItsTime from "./components/ItsTime";
import Footer from "./components/Footer";
import Header from "./components/Header";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    AOS.init({duration:1200})
  })

  return (
    <>
    <div className="border_div container mx-auto relative md:px-0 px-5">
      <div className="hidden md:block leftBorder absolute left-0 h-full top-0 w-[0.2rem]"></div>
      <div className="hidden md:block rightBorder absolute right-0 h-full top-0 w-[0.2rem]"></div>
      <Header />
      <main>
        <JumboHeader />

        <AboutMe />

        <Projects />

        <MyExperience />
        </main>
        </div>
        <ItsTime />


      <Footer />

    </>
  );
}
