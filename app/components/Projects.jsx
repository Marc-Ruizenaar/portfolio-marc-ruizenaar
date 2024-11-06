import Image from "next/image";
import PortfolioProjectOne from "../assets/Norwegan-project.jpg";
import PortfolioProjectTwo from "../assets/luxora-design.png";
import { Project } from "./elements/project";

export default function Projects() {
  return (
    <section
      id="work"
      className="relative flex flex-col items-center justify-center px-5 py-10 sm:px-20"
    >
      <p className="text-mainGray">Work</p>
      <h2 className="mb-8 text-4xl font-black text-center">Websites I&rsquo;ve created</h2>
      <div className="flex flex-col gap-5 sm:flex-row">

        <Project
          image={PortfolioProjectOne}
          title="Nordic restaurant"
          description="Built using vanilla JavaScript and Webpack, this project offers seamless page transitions without reloading."
          link="https://marc-ruizenaar.github.io/restaurant_webpack/"
        />

        <Project
          image={PortfolioProjectTwo}
          title="Wooden houses"
          description="Built using Next and Tailwind, focussing on animations."
          link="https://wood-houses-website-gasf.vercel.app/"
        />

      </div>

      <a
        target="_blank"
        href="https://github.com/Marc-Ruizenaar"
        className="mt-10 inline-block rounded-xl border-[1px] border-black px-4 py-2 text-center"
      >
        More work
      </a>

      <div className="topBorder absolute bottom-0 left-0 h-[0.2rem] w-full"></div>
      <div className="corners absolute bottom-[-8px] left-0 z-10 h-5 w-5"></div>
      <div className="corners absolute bottom-[-8px] right-0 z-10 h-5 w-5 rotate-180"></div>
    </section>
  );
}
