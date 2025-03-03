import PortfolioProjectOne from "../assets/portfolio/Norwegan-project.jpg";
import PortfolioCabens from "../assets/portfolio/WoodenCabens.jpg";
import PortfolioQuizMasters from "../assets/portfolio/QuizLayout.jpg";
import PortfolioMovieApp from "../assets/portfolio/Movie-app.jpg";
import PortfolioWeatherAPP from "../assets/portfolio/WeatherAPP.jpg";
import PortfolioLinktree from "../assets/portfolio/Linktree.jpg";
import { Project } from "./elements/project";
import { useState } from "react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("mytop4");

  const categories = [
    {
      title: "Best & New",
      id: "mytop4",
    },
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
  ];

  const projects = [
    {
      image: PortfolioLinktree,
      title: "Linktree-creator",
      description:
        "I build a Linktree-builder platform. I intentionally chose a competitive SaaS platform so I could look the other sites and see how they designed/build there site.",
      link: "https://store-creator.vercel.app/",
      categories: ["mytop4", "react"],
    },
    {
      image: PortfolioMovieApp,
      title: "Movie API",
      description:
        "As a team of two, we developed a website using React and an external API to fetch and display movies.",
      link: "https://stream-vibe-movies.netlify.app/",
      categories: ["mytop4", "react"],
    },
    {
      image: PortfolioQuizMasters,
      title: "Quizmasters",
      description:
        "Built using vanilla JavaScript, Quizmasters is a website where you can take quizzes fetched from an API.",
      link: "https://quiz-quiz-quiz-quiz.netlify.app/",
      categories: ["javascript"],
    },
    {
      image: PortfolioWeatherAPP,
      title: "Weather App",
      description:
        "This is a simple Weather App built as part of the Odin Project exercise. It fetch the weather data from an API.",
      link: "https://marc-ruizenaar.github.io/weatherAPI/",
      categories: ["javascript"],
    },
    {
      image: PortfolioProjectOne,
      title: "Nordic restaurant",
      description:
        "Built using vanilla JavaScript and Webpack, this project offers seamless page transitions without reloading.",
      link: "https://restaurant-webpack-nu.vercel.app/",
      categories: ["javascript"],
    },
    {
      image: PortfolioCabens,
      title: "Wooden houses",
      description: "Built using Next and Tailwind, focussing on animations.",
      link: "https://wood-houses-website-gasf.vercel.app/",
      categories: ["react"],
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
              className={`rounded-xl border-2  px-4 py-2 font-bold ${
                selectedCategory === category.id
                  ? "bg-green-600 border-green-600 text-white"
                  : "bg-transparent border-mainGreen text-green-600"
              }`}
              key={category.id}
            >
              {category.title}
            </button>
          );
        })}
      </div>

      {selectedCategory && (
        <div className="grid gap-10 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <Project
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
              categorie={project.categories}
            />
          ))}
        </div>
      )}

      <a
        target="_blank"
        href="https://github.com/Marc-Ruizenaar"
        className="mt-10 inline-block rounded-xl border-[1px] border-black px-4 py-2 text-center"
      >
        Check out my code
      </a>

      <div className="topBorder absolute bottom-0 left-0 h-[0.2rem] w-full"></div>
      <div className="corners absolute bottom-[-8px] left-0 z-10 h-5 w-5"></div>
      <div className="corners absolute bottom-[-8px] right-0 z-10 h-5 w-5 rotate-180"></div>
    </section>
  );
}
