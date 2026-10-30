import Header from "@/components/header";
import "./globals.css";
import "@fontsource-variable/inter";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import Footer from "@/components/footer";
import type { Metadata } from "next";


const title = "Dávid Juhász · Founder, Momentum Moat";
const description =
  "I build human-focused AI systems teams actually use. Founder of Momentum Moat, AI strategy and implementation for Dutch SMEs. Previously founded RentSwap (acquired) and worked on AI and cloud at Deutsche Telekom.";

export const metadata: Metadata = {
  metadataBase: new URL("https://davidjuhasz.vercel.app"),
  title,
  description,
  openGraph: { title, description, images: ["/thumbnail.png"], type: "website" },
  twitter: { card: "summary_large_image", title, description, images: ["/thumbnail.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`relative bg-paper pt-28 font-sans text-ink antialiased dark:bg-night dark:text-white/90 sm:pt-36`}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[46rem] overflow-hidden">
          <div className="absolute left-1/2 top-[-12rem] h-[34rem] w-[60rem] -translate-x-1/2 rounded-full bg-lime/60 blur-[9rem] dark:bg-moss/30" />
          <div className="absolute right-[-10rem] top-[6rem] h-[22rem] w-[30rem] rounded-full bg-[#e7f0ff] blur-[8rem] dark:bg-[#1c2a3d]/60" />
        </div>
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
