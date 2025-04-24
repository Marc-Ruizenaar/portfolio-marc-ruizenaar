import Image from "next/image";
import ProfilePicture from "../assets/Marc-Ruizenaar-Front-end-Developer.jpg";
import LineStyling from "./styling/LineStyling";

export default function AboutMe() {
  return (
    <section
      data-aos="fade-in"
      id="aboutme"
      className="relative flex flex-col items-center gap-10 px-5 py-10 sm:flex-row sm:px-20 sm:py-20"
    >
      <div className="h-[300px] w-[300px]">
        <Image
          src={ProfilePicture}
          height={300}
          width={300}
          alt="Profile picture Marc Ruizenaar Full-stack developer"
          loading="eager"
          className="rounded-full"
          srcSet={`${ProfilePicture}?w=150 150w,
           ${ProfilePicture}?w=300 300w,
           ${ProfilePicture}?w=600 600w`}
          sizes="(max-width: 300px) 150px, 300px"
        />
      </div>
      <div>
        <p>My name is</p>
        <div className="relative w-max">
          <h2 className="relative mb-5 text-4xl font-black">Marc Ruizenaar</h2>
          <span className="absolute bottom-[-5px] block h-1 w-full bg-mainGreen"></span>
        </div>
        <p>
          I’m a Dutch developer living in Stockholm. Before moving here, I ran
          my own web agency, where I built and designed websites while managing
          a team of eight people.
        </p>
        <p className="mt-2">
          I always had an interest in React, and after five years of running my
          company, I decided to take a step back and spend a year studying React.
        </p>
        <p className="mt-2">
          When I&rsquo;m not coding, you can probably find me windsurfing or
          enjoying other sports.
        </p>
      </div>

      <LineStyling />
    </section>
  );
}
