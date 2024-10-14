<<<<<<< HEAD
"use client";
=======
>>>>>>> 235cc97164459019d0d3f477b58c790eb44dca78
import AboutMe from "./components/AboutMe";
import JumboHeader from "./components/JumboHeader";
import Projects from "./components/Projects";
import MyExperience from "./components/MyExperience";
import ItsTime from "./components/ItsTime";
import Footer from "./components/Footer";
import Header from "./components/Header";

<<<<<<< HEAD
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
=======
export default function Home() {
  return (
    <div className="border_div container mx-auto px-6">
>>>>>>> 235cc97164459019d0d3f477b58c790eb44dca78
      <Header />
      <main>
        <JumboHeader />

        <AboutMe />

        <Projects />

        <MyExperience />
<<<<<<< HEAD
        </main>
        </div>
        <ItsTime />


      <Footer />

    </>
=======

        <ItsTime />
      </main>

      <Footer />
    </div>
>>>>>>> 235cc97164459019d0d3f477b58c790eb44dca78
  );
}
