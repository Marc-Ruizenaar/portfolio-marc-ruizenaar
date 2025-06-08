import PortfolioNorwegan from "../assets/portfolio/Norwegan-project.jpg";

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

import HackathonGoogleCloud from "../assets/hackathons/Google_Cloud_Hackathon.jpg";
import HackathonGoogleCloudCustomerSupportGroupPhoto from "../assets/hackathons/googleCloud/Google_Hackathon_Group Picture_Customer_support.jpg";
import HackathonGoogleCloudPresentation from "../assets/hackathons/googleCloud/Google_Hackathon_Presentation_picture.jpg";

import HackathonKongAI from "../assets/hackathons/Kong_AI_Hackathon.jpg";
import HackathonKongAIOne from "../assets/hackathons/KongAI/Kong_AI_Group_picture.jpg";
import HackathonKongAITwo from "../assets/hackathons/KongAI/Kong_AI_Group.jpg";
import HackathonKongAIThree from "../assets/hackathons/KongAI/Kong_AI_Presentation.jpg";

import HackathonOutsystemsMalmo from "../assets/hackathons/Outsystems_Hackathon_Malmo.jpg";
import HackathonOutsystemsOne from "../assets/hackathons/Outsystems/Outsystems_Groups_Picture_Malmo.jpg";
import HackathonOutsystemsTwo from "../assets/hackathons/Outsystems/Outsystems_Groups_Picture_Copenhagen.jpg";
import HackathonOutsystemsThree from "../assets/hackathons/Outsystems/Outsystems_Jury.jpg";
import HackathonOutsystemsFour from "../assets/hackathons/Outsystems/Outsystems_Working.jpg";

export const projects = [
  // REACT
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
    imageOne: PortfolioCabens,
    title: "Wooden houses",
    description: "Built using Next and Tailwind, focussing on animations.",
    link: "https://wood-houses-website-gasf.vercel.app/",
    categories: ["react"],
  },
  //   JAVASCRIPT
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
    imageOne: PortfolioNorwegan,
    title: "Nordic restaurant",
    description:
      "Built using vanilla JavaScript and Webpack, this project offers seamless page transitions without reloading.",
    link: "https://restaurant-webpack-nu.vercel.app/",
    categories: ["javascript"],
  },
  //   WORDPRESS
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
  //   HACKATHONS
  {
    blog: true,
    seeMore: true,
    imageOne: HackathonGoogleCloud,
    imageTwo: HackathonGoogleCloudCustomerSupportGroupPhoto,
    imageThree: HackathonGoogleCloudPresentation,
    imageFour: "",
    link: "",
    gitHub: "",
    techStack:
      "Next.js - Typescript - Tailwind CSS - Twilio - OpenAI - Google Text to Speech",
    title: "Google Cloud Sweden Region Launch 2025",
    description: "Second place within the Customer Support track",
    description_long: `As my time in Sweden is slowly coming to an end, it was an amazing to become second in the Google's Hackathon at Tekniska museet.<br><br>

My team and I rocked our last Hackathon, getting second place within the Customer Support track.
<br><br>
<strong>Idea:</strong> <br>
Ever ended a call and realized you forgot something important? Of course it happens to the best of us.
<br><br>
Our AI creates a real-time summary during the call, helping support agents keep track of all questions, options discussed, and key points. It can also categorize the conversation, and highlight important moments. And create follow up questions to make sure the agent has all the information they need to create the ticket or mail.
<br><br>
Using AI and previous tickets the AI will be able to figure out what the best steps forward are. Sometimes a part of the ticket needs to go to 2 different departments. The AI will help make the emails.
<br><br>
After the call, agents can review the full transcript, edit the summary, or adjust the mood, category, and priority-ensuring nothing gets missed.
<br><br>

I want to thank Peder Linder & Per Lange for being amazing hosts! And the other 120 teams for making it an unforgettable event!
`,
    link: "",
    categories: ["hackathons"],
  },
  {
    blog: true,
    seeMore: true,
    imageOne: HackathonOutsystemsMalmo,
    imageTwo: HackathonOutsystemsOne,
    imageThree: HackathonOutsystemsTwo,
    imageFour: HackathonOutsystemsFour,
    imageFive: HackathonOutsystemsThree,
    link: "",
    gitHub: "",
    techStack: "Outsystems - Next.js (backend) - SendGrid",
    title: "Outsystems Malmo and Copenhagen",
    description: "2 hackathons in Malmo and Copenhagen",
    description_long: `I was invited by the owners of Cillers to join the OutSystems Hackathons in Malmö and Copenhagen.
<br><br>
Initially, a low-code hackathon wasn’t something I was particularly interested in, as I love coding and having the freedom to do whatever I want. However, OutSystems really surprised me!
<br><br>
When I think of low-code, I usually imagine anyone being able to build an app. But that’s far from the truth OutSystems is complex, yet full of powerful features.
<br><br>
A big thank you to the OutSystems team, without their support, it would have been impossible to build a working demo! Also, thanks to Per from Cillers for sponsoring the train tickets for both Hackathons.`,
    link: "",
    categories: ["hackathons"],
  },
  {
    blog: true,
    seeMore: true,
    imageOne: HackathonKongAI,
    imageTwo: HackathonKongAIOne,
    imageThree: HackathonKongAITwo,
    imageFour: HackathonKongAIThree,
    link: "",
    gitHub: "",
    techStack:
      "Next JS - Typescript - Twilio - Kong AI - Tailwind CSS - Google Text to Speech",
    title: "Kong AI - Gateway AI",
    description: "My first hackathon - and now I’m hooked!",
    description_long: `🚀 I joined my first hackathon—and now I'm hooked!<br><br>
My team and I spent the day at Amazon Stockholm for the Cillers Hackathon, building an AI tool to support customer service agents.
<br><br>
Just 1.5 weeks ago, we didn't even know each other. Now, we've grown into an amazing team, and we're definitely not done with hackathons!
<br><br>
We sadly failed our demo, but we learned a lot! Sometimes failing is exactly what you need to level up your skills.
<br><br>
Even with the failed demo, we placed 5th! Our storytelling and clear presentation made sure we took a high spot. Considering this was the first hackathon for most of us, I'd call that a win! 🙌
<br><br>
Massive thanks to Cillers for hosting an amazing hackathon!`,
    link: "",
    categories: ["hackathons"],
  },
];
