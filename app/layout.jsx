import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Manrope } from 'next/font/google';

const ManRope = Manrope({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Marc Ruizenaar - Full-stack developer",
  description: "Full-stack developer in Stockholm, looking for a new challenge!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ManRope.className}>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
