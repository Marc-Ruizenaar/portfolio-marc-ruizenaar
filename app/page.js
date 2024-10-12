import AboutMe from "./components/AboutMe";
import JumboHeader from "./components/JumboHeader";
import Projects from "./components/Projects";
import MyExperience from "./components/MyExperience";
import ItsTime from "./components/ItsTime";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="border_div container mx-auto px-6">
      <Header />
      <main>
        <JumboHeader />

        <AboutMe />

        <Projects />

        <MyExperience />

        <ItsTime />
      </main>

      <Footer />
    </div>
  );
}
