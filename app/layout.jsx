import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import Header from "@/components/Header";

const nunito = Nunito_Sans({
  weight: ["300", "600", "800"],
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap",
});

export const metadata = {
  title: "Niko REST Countries",
  description:
    "Showcasing all the countries around the world and their details. Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} bg-veryLightGrayLMBG dark:bg-veryDarkBlueDarkBg`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
