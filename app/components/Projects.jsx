import Image from "next/image";
import PortfolioProjectOne from "../assets/Norwegan-project.jpg";

export default function Projects() {
  return (
    <section
      id="work"
      data-aos="fade-in"
      className="relative flex flex-col items-center justify-center px-5 sm:px-20 py-10"
    >
      <p className="text-mainGray">Work</p>
      <h2 className="mb-8 text-4xl font-black">Websites i made</h2>
      <div className="flex sm:flex-row flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Image
            src={PortfolioProjectOne}
            height={200}
            width={500}
            alt=""
            loading="lazy"
            className="h-[300px] w-full rounded object-cover"
          />
          <h3 className="pt-4 font-bold">Nordic restaurant</h3>
          <p>
            Built using vanilla JavaScript and Webpack, this project offers
            seamless page transitions without reloading.{" "}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <Image
            src={PortfolioProjectOne}
            height={200}
            width={500}
            alt=""
            loading="lazy"
            className="h-[300px] w-full rounded object-cover"
          />
          <h3 className="pt-4 font-bold">Nordic restaurant</h3>
          <p>
            Built using vanilla JavaScript and Webpack, this project offers
            seamless page transitions without reloading.{" "}
          </p>
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
