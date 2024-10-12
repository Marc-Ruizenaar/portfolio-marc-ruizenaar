import Image from "next/image";
import ProfilePicture from "../assets/Marc Ruizenaar Front-end Developer.jpg";

export default function AboutMe() {
  return (
    <section className="py-10 flex items-center gap-10">
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
          <span className="bg-mainGreen absolute bottom-[-5px] -z-10 block h-1 w-full"></span>
        </h2>
        <p>
          I'm a Dutch developer living in Stockholm, I've been passionate about
          coding for the past three years. <br />
          <br />
          When I'm not coding, you can probably find me windsurfing or enjoying
          other sports.
        </p>
      </div>
    </section>
  );
}
