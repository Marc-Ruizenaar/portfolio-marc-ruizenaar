import Image from "next/image";
import BackgroundImage from "../assets/BackgroundImage.jpg";

export default function ItsTime() {
  return (
<<<<<<< HEAD
    <section data-aos="fade-in" className="z-20 relative flex h-[200px] flex-col mt-10 items-center justify-center gap-5 overflow-hidden">
=======
    <section className="relative flex h-[200px] flex-col items-center justify-center gap-5 overflow-hidden">
>>>>>>> 235cc97164459019d0d3f477b58c790eb44dca78
      <Image
        src={BackgroundImage}
        height={300}
        width={300}
        alt="Profile picture Marc Ruizenaar Front-end developer"
        loading="lazy"
        className="unset-0 absolute -z-10 w-screen object-cover"
      />

      <p className="text-4xl font-bold text-white">It's time!</p>
      <div className="flex gap-4">
        <a
<<<<<<< HEAD
          href="mailto:info@marcruizenaar.com"
=======
          href="#"
>>>>>>> 235cc97164459019d0d3f477b58c790eb44dca78
          className="rounded border-[1px] border-white px-4 py-2 text-white"
        >
          Send a email
        </a>
        <a
<<<<<<< HEAD
          href="tel:+31628672650"
          className="rounded border-[1px] border-white px-4 py-2 flex items-center gap-3 text-white"
        >
          <span className="relative flex h-3 w-3">
            <span className="bg-mainGreen absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-600"></span>
=======
          href="#"
          className="rounded border-[1px] border-white px-4 py-2 flex items-center gap-3 text-white"
        >
          <span class="relative flex h-3 w-3">
            <span class="bg-mainGreen absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
            <span class="relative inline-flex h-3 w-3 rounded-full bg-green-600"></span>
>>>>>>> 235cc97164459019d0d3f477b58c790eb44dca78
          </span>
          Call me directly
        </a>
      </div>
<<<<<<< HEAD


=======
>>>>>>> 235cc97164459019d0d3f477b58c790eb44dca78
    </section>
  );
}
