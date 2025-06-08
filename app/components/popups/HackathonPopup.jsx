import Image from "next/image";
import { FaTimes } from "react-icons/fa";

export default function HackathonPopup({ onClose, project }) {
  return (
    <div className="scrollbar-hide fixed inset-0 z-[100] overflow-y-auto bg-white">
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 text-black hover:text-gray-700"
      >
        <FaTimes size={30} color="#16a34a" />
      </button>

      <div className="container mx-auto px-4 py-8">
        <section className="flex flex-col gap-8 lg:flex-row">
          <div className="mt-16 h-max max-w-xl gap-6">
            <div className="flex flex-col gap-4">
              <div className="relative w-auto md:w-max">
                <h1 className="break-normal text-2xl font-bold">
                  {project.title}
                </h1>
                <span className="absolute bottom-[-2px] left-0 h-1 w-full bg-mainGreen duration-300 group-hover:w-full group-hover:transition-all"></span>
              </div>
              <p>
                <div
                  dangerouslySetInnerHTML={{ __html: project.description_long }}
                />
              </p>
            </div>

            <div className="mt-5 flex flex-col gap-4">
              <div className="relative w-max">
                <h2 className="mt-4 text-xl font-bold">Tech Stack:</h2>
                <span className="absolute bottom-[-2px] left-0 h-1 w-full bg-mainGreen duration-300 group-hover:w-full group-hover:transition-all"></span>
              </div>
              <p>{project.techStack}</p>
            </div>
          </div>

          <div className="flex w-full max-w-2xl flex-col gap-6">
            <Image
              src={project.imageOne}
              alt={project.title}
              width={600}
              height={600}
              className="w-full rounded-lg shadow-lg"
            />
            <Image
              src={project.imageTwo}
              alt={project.title}
              width={600}
              height={600}
              placeholder="blur"
              blurDataURL={project.imageTwo.blurDataURL}
              className="w-full rounded-lg shadow-lg"
            />
            <Image
              src={project.imageThree}
              alt={project.title}
              width={600}
              height={600}
              placeholder="blur"
              blurDataURL={project.imageThree.blurDataURL}
              className="w-full rounded-lg shadow-lg"
            />

            {project.imageFour && (
              <Image
                src={project.imageFour}
                alt={project.title}
                width={600}
                height={600}
                placeholder="blur"
                blurDataURL={project.imageFour.blurDataURL}
                className="w-full rounded-lg shadow-lg"
              />
            )}

            {project.imageFive && (
              <Image
                src={project.imageFive}
                alt={project.title}
                width={600}
                height={600}
                placeholder="blur"
                blurDataURL={project.imageFive.blurDataURL}
                className="w-full rounded-lg shadow-lg"
              />
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
