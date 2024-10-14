export default function JumboHeader() {
  return (
    <section data-aos="fade-in" className="flex flex-col relative items-center justify-center gap-5 py-5 h-[60vh] text-center">
      <h1 className="relative text-3xl leading-[3.2rem] md:text-6xl font-black md:leading-[5rem]">
        <span className="bg-mainGreen absolute top-[45%] -z-10 h-1 w-full"></span>
        Front-end developer
        <br /> in Stockholm
      </h1>
      <p>
        Hi there, what are you doing on my website?
        <br />
        If you’re looking for more information, I’m just a call away!
      </p>
      <a
        className="flex items-center gap-3 rounded-xl bg-black px-5 py-3 text-sm text-white"
        href="tel:+31628672650"
      >
        <span className="relative flex h-3 w-3">
          <span className="bg-mainGreen absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-600"></span>
        </span>
        Call me directly
      </a>

      <div className="topBorder absolute left-0 bottom-0 h-[0.2rem] w-full"></div>
      <div className="corners absolute bottom-[-8px] left-0 z-10 h-5 w-5"></div>
      <div className="corners absolute bottom-[-8px] right-0 z-10 h-5 w-5 rotate-180"></div>

    </section>
  );
}
