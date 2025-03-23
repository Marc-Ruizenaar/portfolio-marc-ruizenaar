import LineCornersStyling from "./styling/LineCornersStyling";

export default function MyExperience() {
  return (
    <section
      data-aos="fade-in"
      id="experience"
      className="relative flex flex-col justify-center px-5 py-24 md:px-20"
    >
      <h2 className="mb-14 text-center text-4xl font-black">My experience</h2>
      <div className="flex flex-col gap-20 sm:flex-row md:gap-10">
        <div className="flex flex-col gap-2 sm:w-1/2">
          <h3 className="text-xl font-bold">Work:</h3>

          <div className="relative mb-3 h-5 w-full">
            <div className="topBorder absolute bottom-0 left-0 h-[0.2rem] w-full"></div>
            <div className="corners absolute bottom-[-5px] left-0 z-10 h-4 w-4"></div>
            <div className="corners absolute bottom-[-6px] right-0 z-10 h-4 w-4 rotate-180"></div>
          </div>

          <h4 className="font-bold">
            CO-Owner - Marketing Hunters
            <span className="pl-2 text-sm font-normal">2019 - jul 2024</span>
          </h4>
          <p className="pl-4">
            As a former co-owner of this web agency, I mainly focused on leading the
            design and development team. My role also involved collaborating
            with our clients, as well as designing and developing custom Wordpress
            websites and plugins.
          </p>

          <div className="relative mb-3 h-5 w-full">
            <div className="topBorder absolute bottom-0 left-0 h-[0.2rem] w-full"></div>
            <div className="corners absolute bottom-[-5px] left-0 z-10 h-4 w-4"></div>
            <div className="corners absolute bottom-[-6px] right-0 z-10 h-4 w-4 rotate-180"></div>
          </div>

          <h4 className="font-bold">
            Owner - Marc.
            <span className="pl-2 text-sm font-normal">2015 - 2019 </span>
          </h4>
          <p className="pl-4">Graphic Designer and freelancer</p>
          <p className="pl-8 font-bold">
            Freelance - Graphic Designer at CMIS Group
          </p>
          <p className="pl-8 font-bold">
            Freelance - Graphic Designer at VVD Rotterdam
          </p>

          <div className="relative mb-3 h-5 w-full">
            <div className="topBorder absolute bottom-0 left-0 h-[0.2rem] w-full"></div>
            <div className="corners absolute bottom-[-5px] left-0 z-10 h-4 w-4"></div>
            <div className="corners absolute bottom-[-6px] right-0 z-10 h-4 w-4 rotate-180"></div>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:w-1/2">
          <h3 className="text-xl font-bold">Education:</h3>

          <div className="relative mb-3 h-5 w-full">
            <div className="topBorder absolute bottom-0 left-0 h-[0.2rem] w-full"></div>
            <div className="corners absolute bottom-[-5px] left-0 z-10 h-4 w-4"></div>
            <div className="corners absolute bottom-[-6px] right-0 z-10 h-4 w-4 rotate-180"></div>
          </div>

          <h4 className="font-bold">
            Front-end developer
            <span className="pl-2 text-sm font-normal">2024 - current</span>
          </h4>
          <p className="pl-4">Hyper Island</p>

          <div className="relative mb-3 h-5 w-full">
            <div className="topBorder absolute bottom-0 left-0 h-[0.2rem] w-full"></div>
            <div className="corners absolute bottom-[-5px] left-0 z-10 h-4 w-4"></div>
            <div className="corners absolute bottom-[-6px] right-0 z-10 h-4 w-4 rotate-180"></div>
          </div>

          <h4 className="font-bold">
            Packaging- / Graphic Designer
            <span className="pl-2 text-sm font-normal">2014 - 2017</span>
          </h4>
          <p className="pl-4">Grafisch Lyceum Rotterdam</p>

          <div className="relative mb-3 h-5 w-full">
            <div className="topBorder absolute bottom-0 left-0 h-[0.2rem] w-full"></div>
            <div className="corners absolute bottom-[-5px] left-0 z-10 h-4 w-4"></div>
            <div className="corners absolute bottom-[-6px] right-0 z-10 h-4 w-4 rotate-180"></div>
          </div>
        </div>
      </div>

      <p className="pb-5 pt-5 font-black leading-8 md:pb-0">
        See more on my{" "}
        <a
          href="https://nl.linkedin.com/in/marcruizenaar"
          className="relative"
          target="_blank"
        >
          Linkedin
          <span className="absolute bottom-[-5px] left-0 -z-10 block h-1 w-full bg-mainGreen"></span>
        </a>{" "}
        or{" "}
        <a
          href="https://drive.google.com/file/d/1e7HJZZn6QVpmINveHaW21iVmJpxJlWs7/view?usp=sharing"
          className="relative"
          target="_blank"
        >
          download my CV
          <span className="absolute bottom-[-5px] left-0 -z-10 block h-1 w-full bg-mainGreen"></span>
        </a>
      </p>

      <LineCornersStyling />
    </section>
  );
}
