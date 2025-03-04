import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="container relative mx-auto flex flex-col justify-between gap-5 px-10 py-8 text-center text-sm font-bold sm:flex-row"
    >
      <p>© Marc Ruizenaar</p>
      <Link href="mailto:info@marcruizenaar.com">info@marcruizenaar.com</Link>
      <Link href="tel:+31628672650">+31 6 286 726 50</Link>
    </footer>
  );
}
