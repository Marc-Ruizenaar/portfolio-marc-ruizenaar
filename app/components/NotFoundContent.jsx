import Link from "next/link";
import LineCornersStyling from "./styling/LineCornersStyling";

export default function NotFoundContent() {
  return (
    <section className="relative flex h-[60vh] flex-col items-center justify-center gap-6 py-5 text-center md:h-[50vh]">
      <h1 className="text-2xl font-bold">Page not found</h1>
      <p>
        We tried our best, but it seems that this page does not exist or may
        have been moved.
      </p>

      <Link
        href={"./"}
        className="rounded-xl border-2 border-green-600 bg-green-600 px-4 py-2 font-bold text-white"
      >
        Go to homepage
      </Link>

      <LineCornersStyling />
    </section>
  );
}
