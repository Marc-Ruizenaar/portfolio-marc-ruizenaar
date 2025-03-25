import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import ItsTime from "@/app/components/ItsTime";

export default function LinkTreeCreatorPage() {
  return (
    <>
      <div className="border_div container relative mx-auto bg-white px-5 md:px-0">
        <div className="leftBorder absolute left-0 top-0 hidden h-full w-[0.2rem] md:block"></div>
        <div className="rightBorder absolute right-0 top-0 hidden h-full w-[0.2rem] md:block"></div>
        <Header />
        <main>
          <h1>LinkTreeCreator</h1>
        </main>
      </div>
      <ItsTime />

      <Footer />
    </>
  );
}
