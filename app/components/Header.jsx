import Image from "next/image";
import ProfilePicture from "../assets/Marc Ruizenaar Front-end Developer.jpg";

export default function Header() {
  return (
    <header className="flex items-center justify-between pt-2">
      <div className="flex items-center gap-6">
        <Image
          src={ProfilePicture}
          height={50}
          width={50}
          alt=""
          className="rounded-full object-cover"
        />

        <nav className="flex gap-4">
          <a href="#">About me</a>
          <a href="">Work</a>
          <a href="">Experience</a>
          <a href="">Contact</a>
        </nav>
      </div>

      <div className="flex items-center gap-6">
        <a href="" className="flex items-center gap-3">
          <span class="relative flex h-3 w-3">
            <span class="bg-mainGreen absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
            <span class="relative inline-flex h-3 w-3 rounded-full bg-green-600"></span>
          </span>
          <p>Available now</p>
        </a>

        <a href="" className="rounded bg-black px-4 py-2 text-white">
          Contact me
        </a>
      </div>
    </header>
  );
}
