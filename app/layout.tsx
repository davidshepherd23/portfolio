import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import Footer from "@/components/footer";
import Head from "next/head";
import Image from "next/image";
import thumbnailImg from "@/public/thumbnail.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio: David Juhasz",
  description:
    "A portfolio website for David Juhasz. I am a full stack web developer using NextJS, Typescript and React.",
  openGraph: {
    images: [thumbnailImg],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative h-[500px] bg-gray-50 pt-28 text-gray-950 dark:bg-gray-900 dark:text-gray-50 
        dark:text-opacity-90 sm:pt-36`}
      >
        <div
          className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem]
                       rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#946263] sm:w-[68.75]"
        ></div>
        <div
          className="absolute left-[-35rem] top-[-1rem] -z-10  h-[31.25rem] w-[50rem]
                     rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394] 
                      sm:w-[68.75] md:left-[-33rm] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[5rem]"
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

export function Metatags({
  title = "Portfolio: David Juhasz",
  description = "A portfolio website for David Juhasz. I am a full stack web developer using NextJS, Typescript and React.",
}) {
  return (
    <Head>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@JDavid233" />
      <meta name="twitter:title" content={thumbnailImg.src} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={thumbnailImg.src} />
      <meta name="twitter:url" content="https://davidjuhasz.vercel.app" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={thumbnailImg.src} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://davidjuhasz.vercel.app" />
    </Head>
  );
}
