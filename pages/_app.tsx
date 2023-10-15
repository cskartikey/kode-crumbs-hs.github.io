import type { AppProps } from "next/app";
import { Fira_Sans, Unica_One } from "next/font/google";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import NavBar from "@/components/Nav";
import { ThemeProvider } from "next-themes";
import ToggleButton from "@/components/ToggleButton";
import "public/static/css/globals.css";

const fireSans = Fira_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-sans",
});

const unicaOne = Unica_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-unica-one",
});

const billy = localFont({
  src: [
    {
      path: "../public/static/fonts/Billy-Light.otf",
      weight: "300",
      style: "light",
    },
    {
      path: "../public/static/fonts/Billy-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/static/fonts/Billy-Bold.otf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-billy",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main
      className={` ${unicaOne.variable} ${fireSans.variable} ${billy.variable}`}
    >
      <ThemeProvider attribute="class">
      <NavBar />
      <Component {...pageProps} />
      <ToggleButton/>
      <Footer />
      </ThemeProvider>
    </main>
  );
}
