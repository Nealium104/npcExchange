import Nav from "./components/Nav";
import type { Metadata } from "next";
import { Roboto_Condensed, Lato } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`text-white flex flex-col font-lato ${roboto.variable} ${lato.variable}`}
    >
      <body>
        <Nav />
        <div className="max-w-screen-xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
