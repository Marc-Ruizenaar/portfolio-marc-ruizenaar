import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaGithub, FaTimes } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import Image from "next/image";

// Reusable Image Popup Component
const ImagePopup = ({ src, alt, onClose, blurDataURL }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90%] max-w-[90%] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-0 top-0 z-10 m-2 rounded-full bg-white/50 p-2 hover:bg-white/75"
        >
          <FaTimes size={24} color="black" />
        </button>
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={1200}
          placeholder="blur"
          blurDataURL={blurDataURL}
          priority
          className="max-h-full max-w-full object-contain"
        />
      </div>
    </div>
  );
};

export default function PortfolioPopup({ onClose, project, blog }) {
  const [popupImage, setPopupImage] = useState(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="scrollbar-hide fixed inset-0 z-[100] overflow-y-auto bg-white">
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 text-black hover:text-gray-700"
      >
        <FaTimes size={30} color="#16a34a" />
      </button>

      {blog ? (
        <>
          <div className="container mx-auto px-4 py-8">
            <section className="flex flex-col items-center gap-8 lg:flex-row">
              <div className="flex max-w-xl flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div className="relative w-max">
                    <h1 className="text-2xl font-bold"> {project.title}</h1>
                    <span className="absolute bottom-[-2px] left-0 h-1 w-full bg-mainGreen duration-300 group-hover:w-full group-hover:transition-all"></span>
                  </div>
                  <p>{project.description}</p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="relative w-max">
                    <h2 className="text-xl font-bold">Tech Stack:</h2>
                    <span className="absolute bottom-[-2px] left-0 h-1 w-full bg-mainGreen duration-300 group-hover:w-full group-hover:transition-all"></span>
                  </div>
                  <p>{project.techStack}</p>
                </div>
              </div>

              <div className="w-full max-w-2xl">
                <Image
                  src={project.imageOne}
                  alt={project.title}
                  width={600}
                  height={600}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </section>
          </div>
        </>
      ) : (
        <div className="container mx-auto px-4 py-8">
          <section className="flex flex-col items-center gap-8 lg:flex-row">
            <div className="flex max-w-xl flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="relative w-max">
                  <h1 className="text-2xl font-bold"> {project.title}</h1>
                  <span className="absolute bottom-[-2px] left-0 h-1 w-full bg-mainGreen duration-300 group-hover:w-full group-hover:transition-all"></span>
                </div>
                <p>{project.description}</p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="relative w-max">
                  <h2 className="text-xl font-bold">Tech Stack:</h2>
                  <span className="absolute bottom-[-2px] left-0 h-1 w-full bg-mainGreen duration-300 group-hover:w-full group-hover:transition-all"></span>
                </div>
                <p>{project.techStack}</p>
              </div>

              <Link
                href={project.gitHub}
                target="_blank"
                className="flex items-center gap-2"
              >
                <FaGithub size={25} />
                <span>View on GitHub</span>
              </Link>

              <Link
                href={project.link}
                target="_blank"
                className="flex items-center gap-2"
              >
                <TfiWorld size={25} />
                <span>Visit the site</span>
              </Link>
            </div>

            <div className="w-full max-w-2xl">
              <Image
                src={project.imageOne}
                alt={project.title}
                width={600}
                height={600}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </section>

          <section className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <Image
              src={project.imageTwo}
              alt={project.title}
              width={600}
              height={600}
              placeholder="blur"
              blurDataURL={project.imageTwo.blurDataURL}
              className="w-full cursor-pointer rounded-lg shadow-lg"
              onClick={() =>
                setPopupImage({
                  src: project.imageTwo,
                  blurDataURL: project.imageTwo.blurDataURL,
                })
              }
            />
            <Image
              src={project.imageThree}
              alt={project.title}
              width={600}
              height={600}
              placeholder="blur"
              blurDataURL={project.imageThree.blurDataURL}
              className="w-full cursor-pointer rounded-lg shadow-lg"
              onClick={() =>
                setPopupImage({
                  src: project.imageThree,
                  blurDataURL: project.imageThree.blurDataURL,
                })
              }
            />
          </section>

          {project.imageFour && (
            <section className="mt-8 grid grid-cols-1 gap-8">
              <Image
                src={project.imageFour}
                alt={project.title}
                width={600}
                height={600}
                placeholder="blur"
                blurDataURL={project.imageFour.blurDataURL}
                className="w-full cursor-pointer rounded-lg shadow-lg"
                onClick={() =>
                  setPopupImage({
                    src: project.imageFour,
                    blurDataURL: project.imageFour.blurDataURL,
                  })
                }
              />
            </section>
          )}

          {popupImage && (
            <ImagePopup
              src={popupImage.src}
              alt={project.title}
              blurDataURL={popupImage.blurDataURL}
              onClose={() => setPopupImage(null)}
            />
          )}
        </div>
      )}
    </div>
  );
}
