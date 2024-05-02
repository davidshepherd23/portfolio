import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Poject",
  description:
    "A portfolio website for David Juhasz. A full stack web application using NextJS, Typescript and React.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative h-[500px] bg-gray-50 pt-28 text-gray-950 sm:pt-36 dark:bg-gray-900 
        dark:text-gray-50 dark:text-opacity-90`}
      >
        <div
          className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem]
                       rounded-full bg-[#fbe2e3] blur-[10rem] sm:w-[68.75] dark:bg-[#946263]"
        ></div>
        <div
          className="absolute left-[-35rem] top-[-1rem] -z-10  h-[31.25rem] w-[50rem]
                     rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75] 
                      md:left-[-33rm] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[5rem] dark:bg-[#676394]"
        ></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
