export default function JumboHeader() {
  return (
    <section className="flex flex-col items-center justify-center gap-5 py-10 text-center">
      <h1 className="relative text-6xl font-black leading-[5rem]">
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
        href=""
      >
        <span class="relative flex h-3 w-3">
          <span class="bg-mainGreen absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
          <span class="relative inline-flex h-3 w-3 rounded-full bg-green-600"></span>
        </span>
        Call me directly
      </a>
    </section>
  );
}
