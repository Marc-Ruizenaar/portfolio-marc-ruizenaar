import PushAnimation from "./elements/PushAnimation";
import LineStyling from "./styling/LineStyling";

export default function JumboHeader() {
  return (
    <section className="relative flex h-[80vh] flex-col items-center justify-center gap-4 py-5 text-center md:h-[80vh]">
      <h1 className="relative text-3xl font-black leading-[3.2rem] md:text-6xl md:leading-[5rem]">
        Building a tech community!
      </h1>

      <div className="relative">
        <h2 className="relative z-10 text-xl font-bold">
          The tech environment in The Netherlands needs a stronger community
          foundation
        </h2>
      </div>
      <p>Want to be part of something bigger? Let&apos;s talk!</p>

      <div className="flex gap-5">
        <a
          className="flex items-center gap-3 rounded-xl border-2 border-black px-5 py-3 text-sm text-black"
          href="mailto:info@marcruizenaar.com"
        >
          Send a email
        </a>
        <a
          className="flex items-center gap-3 rounded-xl bg-black px-5 py-3 text-sm text-white"
          href="tel:+31628672650"
        >
          <PushAnimation />
          Call me directly
        </a>
      </div>

      <LineStyling />
    </section>
  );
}
