import Footer from "./components/Footer";
import Header from "./components/Header";
import ItsTime from "./components/ItsTime";
import NotFoundContent from "./components/NotFoundContent";

export default function NotFound() {
  return (
    <>
      <div className="border_div container relative mx-auto bg-white px-5 md:px-0">
        <div className="leftBorder absolute left-0 top-0 hidden h-full w-[0.2rem] md:block"></div>
        <div className="rightBorder absolute right-0 top-0 hidden h-full w-[0.2rem] md:block"></div>
        <Header />
        <main>
          <NotFoundContent />
        </main>
      </div>

      <ItsTime />

      <Footer />
    </>
  );
}
