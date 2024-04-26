import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Poject | Pelo",
  description:
    "A portfolio website for David Juhasz. A full stack web application using NextJS, Typescript and React.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative h-[500px] bg-gray-50 pt-28 text-gray-950 sm:pt-36`}
      >
        <Header />
        <div
          className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem]
                       rounded-full bg-[#fbe2e3] blur-[10rem] sm:w-[68.75]"
        ></div>
        <div
          className="absolute left-[-35rem] top-[-1rem] -z-10  h-[31.25rem] w-[50rem]
                     rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75] 
                      md:left-[-33rm] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[5rem]"
        ></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
