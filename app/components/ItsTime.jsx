import Image from "next/image";
import BackgroundImage from "../assets/backgroundImage.jpg";
import Link from "next/link";
import PushAnimation from "./elements/PushAnimation";

export default function ItsTime() {
  return (
    <section
      data-aos="fade-in"
      className="relative z-20 mt-10 flex h-[200px] flex-col items-center justify-center gap-5 overflow-hidden"
    >
      <Image
        src={BackgroundImage}
        height={300}
        width={300}
        alt="Profile picture Marc Ruizenaar Full-stack developer"
        loading="lazy"
        className="unset-0 absolute -z-10 w-screen object-cover"
      />

      <p className="text-4xl font-bold text-white">Let&rsquo;s connect!</p>
      <div className="flex gap-4">
        <Link
          href="mailto:info@marcruizenaar.com"
          className="rounded border-[1px] border-white px-4 py-2 text-white"
        >
          Send a email
        </Link>
        <Link
          href="tel:+31628672650"
          className="flex items-center gap-3 rounded border-[1px] border-white px-4 py-2 text-white"
        >
          <PushAnimation />
          Call me directly
        </Link>
      </div>
    </section>
  );
}
