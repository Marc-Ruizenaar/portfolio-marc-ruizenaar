import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import PortfolioLinktree from "../../assets/portfolio/Linktree.jpg";
import Link from "next/link";
import { IoClose } from "react-icons/io5";


export default function LinkTreeCreatorPage() {
  return (
    <>
      <div className="border_div container relative mx-auto bg-white px-5 md:px-0">


        <main className="flex w-full flex-col gap-10 p-12 relative">
          <section className="flex flex-col items-center gap-8 lg:flex-row">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="relative w-max">
                  <h1 className="text-2xl font-bold">LinkTreeCreator</h1>
                  <span className="absolute bottom-[-2px] left-0 h-1 w-full bg-mainGreen duration-300 group-hover:w-full group-hover:transition-all"></span>
                </div>
                <p>
                  I build a Linktree-builder platform. I intentionally chose a
                  competitive SaaS platform so I could look the other sites and
                  see how they designed/build there site.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="relative w-max">
                  <h2 className="text-xl font-bold">Tech Stack:</h2>
                  <span className="absolute bottom-[-2px] left-0 h-1 w-full bg-mainGreen duration-300 group-hover:w-full group-hover:transition-all"></span>
                </div>
                <p>
                  React - Next.js - Supabase (Auth, Database, Storage) -
                  Tailwind CSS
                </p>
              </div>

              <Link href={"/"} target="_blank">
                <FaGithub size={30} />
              </Link>
            </div>

            <Image
              src={PortfolioLinktree}
              alt="Linktree"
              width={600}
              height={600}
              className="w-full"
            />
          </section>

          <Image
            src={PortfolioLinktree}
            alt="Linktree"
            width={600}
            height={600}
            className="w-full"
          />

          <section className="grid grid-cols-2 gap-8">
            <Image
              src={PortfolioLinktree}
              alt="Linktree"
              width={600}
              height={600}
              className="w-full"
            />
            <Image
              src={PortfolioLinktree}
              alt="Linktree"
              width={600}
              height={600}
              className="w-full"
            />
          </section>
        </main>
      </div>
      <Link
        href={""}
        className="fixed font-bold bottom-5 right-5 rounded-lg bg-green-600 px-4 py-2 text-white"
      >
        Go to website
      </Link>
    </>
  );
}
