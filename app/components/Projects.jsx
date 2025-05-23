import PortfolioProjectOne from "../assets/portfolio/Norwegan-project.jpg";
import PortfolioCabens from "../assets/portfolio/WoodenCabens.jpg";
import PortfolioGreenbytes from "../assets/portfolio/Greenbytes.jpg";
import PortfolioMijnVakantieStek from "../assets/portfolio/MijnVakantieStek.jpg";
import PortfolioQuizMasters from "../assets/portfolio/QuizLayout.jpg";
import PortfolioMovieApp from "../assets/portfolio/Movie-app.jpg";
import PortfolioWeatherAPP from "../assets/portfolio/WeatherAPP.jpg";
import PortfolioLinktreeOne from "../assets/portfolio/LinktreeOne.jpg";
import PortfolioLinktreeTwo from "../assets/portfolio/LinktreeTwo.png";
import PortfolioLinktreeThree from "../assets/portfolio/LinktreeThree.png";
import PortfolioPlantsOne from "../assets/portfolio/PlantsOne.jpg";
import PortfolioPlantsTwo from "../assets/portfolio/PlantsTwo.png";
import PortfolioPlantsThree from "../assets/portfolio/PlantsThree.png";
import PortfolioPlantsFour from "../assets/portfolio/PlantsFour.png";
import { useState } from "react";
import Link from "next/link";
import LineStyling from "./styling/LineStyling";
import ProjectCard from "./elements/ProjectCard";

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
  ];

  const projects = [
    {
      seeMore: true,
      imageOne: PortfolioLinktreeOne,
      imageTwo: PortfolioLinktreeTwo,
      imageThree: PortfolioLinktreeThree,
      title: "Linktree-creator",
      description:
        "I build a Linktree-builder platform. I intentionally chose a competitive SaaS platform so I could look the other sites and see how they designed/build there site.",
      link: "https://store-creator.vercel.app/",
      gitHub: "https://github.com/Marc-Ruizenaar/LinkTreeCreator",
      techStack:
        "React - Next.js - Supabase (Auth, Database, Storage) - Tailwind CSS",
      categories: ["react"],
    },
    {
      seeMore: true,
      imageOne: PortfolioPlantsOne,
      imageTwo: PortfolioPlantsTwo,
      imageThree: PortfolioPlantsThree,
      imageFour: PortfolioPlantsFour,
      title: "Plants",
      description:
        "E-commerce platform built in Next.js, React Query, TypeScript, Stripe, and Tailwind.",
      link: "https://ecommerce-plants-liard.vercel.app/",
      gitHub: "https://github.com/Marc-Ruizenaar/ecommerce-plants",
      techStack:
        "Next.js - React Query - Typescript - Stripe - MongoDB - Tailwind CSS",
      categories: ["react"],
    },
    {
      seeMore: false,
      imageOne: PortfolioMovieApp,
      title: "Movie API",
      description:
        "As a team of two, we developed a website using React and an external API to fetch and display movies.",
      link: "https://stream-vibe-movies.netlify.app/",
      categories: ["react"],
    },
    {
      seeMore: false,
      imageOne: PortfolioQuizMasters,
      title: "Quizmasters",
      description:
        "Built using vanilla JavaScript, Quizmasters is a website where you can take quizzes fetched from an API.",
      link: "https://quiz-quiz-quiz-quiz.netlify.app/",
      categories: ["javascript"],
    },
    {
      seeMore: false,
      imageOne: PortfolioWeatherAPP,
      title: "Weather App",
      description:
        "This is a simple Weather App built as part of the Odin Project exercise. It fetch the weather data from an API.",
      link: "https://marc-ruizenaar.github.io/weatherAPI/",
      categories: ["javascript"],
    },
    {
      seeMore: false,
      imageOne: PortfolioProjectOne,
      title: "Nordic restaurant",
      description:
        "Built using vanilla JavaScript and Webpack, this project offers seamless page transitions without reloading.",
      link: "https://restaurant-webpack-nu.vercel.app/",
      categories: ["javascript"],
    },
    {
      seeMore: false,
      imageOne: PortfolioCabens,
      title: "Wooden houses",
      description: "Built using Next and Tailwind, focussing on animations.",
      link: "https://wood-houses-website-gasf.vercel.app/",
      categories: ["react"],
    },
    {
      seeMore: false,
      imageOne: PortfolioGreenbytes,
      title: "Greenbytes",
      description:
        "Custom Wordpress theme build with Woocommerce, for a computershop.",
      link: "https://greenbytes.nl/",
      categories: ["wordpress"],
    },
    {
      seeMore: false,
      imageOne: PortfolioMijnVakantieStek,
      title: "MijnVakantieStek",
      description:
        "Holiday home rental platform, build with a custom Wordpress theme and Advanced Custom Fields (ACF)",
      link: "https://mijnvakantiestek.nl/",
      categories: ["wordpress"],
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

      {selectedCategory && (
        <div className="grid gap-10 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
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
            />
          ))}
        </div>
      )}

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
