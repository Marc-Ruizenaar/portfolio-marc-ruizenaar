import Image from "next/image";
import ProfilePicture from "../assets/Marc-Ruizenaar-Front-end-Developer.jpg";

export default function AboutMe() {
  return (
    <section
      data-aos="fade-in"
      id="aboutme"
      className="relative flex flex-col items-center gap-10 px-5 py-10 sm:flex-row sm:px-20 sm:py-20"
    >
      <Image
        src={ProfilePicture}
        height={300}
        width={300}
        alt="Profile picture Marc Ruizenaar Front-end developer"
        loading="lazy"
        className="rounded-full"
      />

      <div>
        <p>My name is</p>
        <h2 className="relative mb-5 w-max text-4xl font-black">
          Marc Ruizenaar
          <span className="absolute bottom-[-5px] -z-10 block h-1 w-full bg-mainGreen"></span>
        </h2>
        <p>I&quot;m a Dutch developer living in Stockholm, I&quot;ve been passionate about coding for the past three years. <br /><br />
          When I&quot;m not coding, you can probably find me windsurfing or enjoying
          other sports.
        </p>
      </div>

      <div className="topBorder absolute bottom-0 left-0 h-[0.2rem] w-full"></div>
      <div className="corners absolute bottom-[-8px] left-0 z-10 h-5 w-5"></div>
      <div className="corners absolute bottom-[-8px] right-0 z-10 h-5 w-5 rotate-180"></div>
    </section>
  );
}
