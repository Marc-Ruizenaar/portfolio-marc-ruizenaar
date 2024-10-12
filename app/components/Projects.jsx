import Image from "next/image";
import PortfolioProjectOne from "../assets/Norwegan-project.jpg";

export default function Projects() {
  return (
    <section className="flex flex-col items-center justify-center py-10">
      <p className="text-mainGray">Work</p>
      <h2 className="mb-8 text-4xl font-black">Websites i made</h2>
      <div className="flex gap-5">
        <div className="flex flex-col gap-2">
          <Image
            src={PortfolioProjectOne}
            height={200}
            width={500}
            alt=""
            loading="lazy"
            className="h-[300px] rounded object-cover"
          />
          <h3 className="font-bold">Nordic restaurant</h3>
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
            className="h-[300px] rounded object-cover"
          />
          <h3 className="font-bold">Nordic restaurant</h3>
          <p>
            Built using vanilla JavaScript and Webpack, this project offers
            seamless page transitions without reloading.{" "}
          </p>
        </div>
      </div>

      <a
        href=""
        className="mt-10 inline-block rounded-xl border-[1px] border-black px-4 py-2 text-center"
      >
        More work
      </a>
    </section>
  );
}
