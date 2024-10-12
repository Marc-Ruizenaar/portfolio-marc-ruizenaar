import Image from "next/image";

export default function MyExperience() {
  return (
    <section className="flex flex-col justify-center py-10">
      <p className="text-mainGray text-center">Work/education</p>
      <h2 className="mb-8 text-center text-4xl font-black">My experience</h2>
      <div className="flex gap-10">
        <div className="flex w-1/2 flex-col gap-2">
          <h3 className="text-xl font-bold">Work:</h3>
          <h4 className="font-bold">
            CO-Owner - Marketing Hunters
            <span className="pl-2 text-sm font-normal">2019 - jul 2024</span>
          </h4>
          <p className="pl-4">
            Marketing Hunters is a marketing, design, and development agency
            based in the Netherlands. Our small team is capable of designing,
            building, and launching websites and webshops. <br />
            <br /> As a CO-Owner, my responsibilities spanned from leading the
            team, designing/building websites and handling client relations.
          </p>

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
        </div>

        <div className="flex w-1/2 flex-col gap-2">
          <h3 className="text-xl font-bold">Education:</h3>
          <h4 className="font-bold">
            Front-end developer
            <span className="pl-2 text-sm font-normal">2024 - current</span>
          </h4>
          <p className="pl-4">Hyper Island</p>

          <h4 className="font-bold">
            Packaging- / Graphic Designer
            <span className="pl-2 text-sm font-normal">2014 - 2017</span>
          </h4>
          <p className="pl-4">Grafisch Lyceum Rotterdam</p>
        </div>
      </div>

      <p className="pt-5 font-black">
        See more on my{" "}
        <a href="https://nl.linkedin.com/in/marcruizenaar" target="_blank">
          linkedin
        </a>
        {" "}or{" "}
        <a href="#" target="_blank">
          download the CV
        </a>
      </p>
    </section>
  );
}
