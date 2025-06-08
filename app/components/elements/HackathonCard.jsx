import Image from "next/image";
import { useState } from "react";
import HackathonPopup from "../popups/HackathonPopup";
import Link from "next/link";

export default function HackathonCard({
  imageOne,
  title,
  description,
  seeMore,
  project,
  link,
  blog,
}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClick = () => {
    if (seeMore === true) {
      setIsPopupOpen(true);
    }
  };

  return (
    <>
      {seeMore === true ? (
        <button
          className="group flex flex-col gap-2 text-left"
          onClick={handleClick}
        >
          <div className="relative md:h-[300px] h-40 overflow-hidden rounded">
            <Image
              src={imageOne}
              height={200}
              width={500}
              alt={title}
              loading="lazy"
              className="h-full w-full object-cover duration-1000 group-hover:scale-110"
            />
            <div className="absolute bottom-2 right-2"></div>
          </div>
          <h3 className="pt-4 font-bold">{title}</h3>
          <p>{description}</p>
          <div className="group relative w-max">
            {blog ? (
              <>
                <p className="text-sm font-semibold">Read more</p>
              </>
            ) : (
              <p className="text-sm font-semibold">Check project</p>
            )}
            <span className="absolute bottom-[-2px] left-0 h-1 w-0 bg-mainGreen duration-300 group-hover:w-full group-hover:transition-all"></span>
          </div>
        </button>
      ) : (
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col gap-2 text-left"
        >
          <div className="relative h-[400px] overflow-hidden rounded">
            <Image
              src={imageOne}
              height={600}
              width={800}
              alt={title}
              loading="lazy"
              className="h-full w-full object-cover duration-1000 group-hover:scale-110"
            />
            <div className="absolute bottom-2 right-2"></div>
          </div>
          <h3 className="pt-4 font-bold">{title}</h3>
          <p>{description}</p>
          <div className="group relative w-max">
            <p className="text-sm font-semibold">View site</p>
            <span className="absolute bottom-[-2px] left-0 h-1 w-0 bg-mainGreen duration-300 group-hover:w-full group-hover:transition-all"></span>
          </div>
        </Link>
      )}

      {isPopupOpen && (
        <HackathonPopup
          project={project}
          onClose={() => setIsPopupOpen(false)}
          blog={blog}
        />
      )}
    </>
  );
}
