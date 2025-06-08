import { useState } from "react";
import Link from "next/link";
import LineStyling from "./styling/LineStyling";
import ProjectCard from "./elements/ProjectCard";
import HackathonCard from "./elements/HackathonCard";
import { projects } from "../data/portfolio";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("react");

  const categories = [
    {
      title: "React",
      id: "react",
    },
    {
      title: "JavaScript",
      id: "javascript",
    },
    {
      title: "Wordpress",
      id: "wordpress",
    },
    {
      title: "Hackathons",
      id: "hackathons",
    },
  ];

  const handleCategoryClick = (e) => {
    const categoryClicked = e.target.dataset.category;
    setSelectedCategory(categoryClicked);
  };

  const filteredProjects = projects.filter((project) =>
    project.categories.includes(selectedCategory),
  );

  return (
    <section
      id="work"
      className="relative flex flex-col items-center justify-center gap-8 px-5 py-20"
    >
      <h2 className="text-center text-4xl font-black">
        Websites I&rsquo;ve created
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => {
          return (
            <button
              data-category={category.id}
              onClick={handleCategoryClick}
              className={`rounded-xl border-2 px-4 py-2 font-bold ${
                selectedCategory === category.id
                  ? "border-green-600 bg-green-600 text-white"
                  : "border-mainGreen bg-transparent text-green-600"
              }`}
              key={category.id}
            >
              {category.title}
            </button>
          );
        })}
      </div>

      {selectedCategory === "wordpress" && (
        <p className="text-center">
          These WordPress projects were developed during my employment at
          Marketing Hunters. <br />
          During these years, I created over 50 WordPress and WooCommerce
          websites.
        </p>
      )}

      <div className="grid gap-10 md:grid-cols-2">
        {filteredProjects.map((project, index) =>
          project.blog ? (
            <HackathonCard
              key={index}
              project={project}
              seeMore={project.seeMore}
              imageOne={project.imageOne}
              imageTwo={project.imageTwo}
              imageThree={project.imageThree}
              title={project.title}
              description={project.description}
              link={project.link}
              categorie={project.categories}
              blog={project.blog}
            />
          ) : (
            <ProjectCard
              key={index}
              project={project}
              seeMore={project.seeMore}
              imageOne={project.imageOne}
              imageTwo={project.imageTwo}
              imageThree={project.imageThree}
              title={project.title}
              description={project.description}
              link={project.link}
              categorie={project.categories}
              blog={project.blog}
            />
          ),
        )}
      </div>

      <Link
        target="_blank"
        href="https://github.com/Marc-Ruizenaar"
        className="mt-10 inline-block rounded-xl border-[1px] border-black px-4 py-2 text-center"
      >
        Check out my code
      </Link>

      <LineStyling />
    </section>
  );
}
