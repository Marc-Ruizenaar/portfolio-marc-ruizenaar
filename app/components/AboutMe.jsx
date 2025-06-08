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
          Alongside my passion for coding, I have a love for windsurfing and
          wakeboarding. If I&#39;m not behind a screen, you can find me around a
          lake or the sea.
        </p>

        <p className="mt-4">
          Before diving into web development, I worked as a designer &#40;mainly
          packaging design&#41;. To me, building a website is a lot like designing a
          carton box. Instead of folding it into shape, you&#39;re building
          different pages, making sure everything fits together seamlessly for
          the best experience.
        </p>
      </div>

      <LineStyling />
    </section>
  );
}
