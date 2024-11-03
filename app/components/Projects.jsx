import Image from "next/image";
import PortfolioProjectOne from "../assets/Norwegan-project.jpg";
import PortfolioProjectTwo from "../assets/luxora-design.png";

export default function Projects() {
  return (
    <section
      id="work"
      className="relative flex flex-col items-center justify-center px-5 py-10 sm:px-20"
    >
      <p className="text-mainGray">Work</p>
      <h2 className="mb-8 text-4xl font-black">Websites I&rsquo;ve created</h2>
      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="group flex w-1/2 flex-col gap-2">
          <div className="h-[300px] overflow-hidden rounded">
            <Image
              src={PortfolioProjectOne}
              height={200}
              width={500}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover duration-1000 group-hover:scale-150"
            />
          </div>
          <h3 className="pt-4 font-bold">Nordic restaurant</h3>
          <p className="h-[50px]">
            Built using vanilla JavaScript and Webpack, this project offers
            seamless page transitions without reloading.{" "}
          </p>
          <div className="group relative w-max">
            <a
              className="text-sm font-semibold"
              href="https://marc-ruizenaar.github.io/restaurant_webpack/"
              target="_blank"
            >
              Check website
            </a>
            <span className="absolute bottom-[-2px] left-0 h-1 w-0 bg-mainGreen duration-300 group-hover:w-full group-hover:transition-all"></span>
          </div>
        </div>

        <div className="group flex w-1/2 flex-col gap-2">
          <div className="h-[300px] overflow-hidden rounded">
            <Image
              src={PortfolioProjectTwo}
              height={200}
              width={500}
              alt="Wooden houses portfolio Marc Ruizenaar"
              loading="lazy"
              className="h-full w-full object-cover duration-1000 group-hover:scale-150"
            />
          </div>
          <h3 className="pt-4 font-bold">Wooden houses</h3>
          <p className="h-[50px]">
            Built using Next and Tailwind, focussing on animations.{" "}
          </p>
          <div className="group relative w-max">
            <a
              className="text-sm font-semibold"
              href="https://wood-houses-website-gasf.vercel.app/"
              target="_blank"
            >
              Check website
            </a>
            <span className="absolute bottom-[-2px] left-0 h-1 w-0 bg-mainGreen duration-300 group-hover:w-full group-hover:transition-all"></span>
          </div>
        </div>
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
