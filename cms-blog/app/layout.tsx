import type { Metadata } from "next";
import { Inter, Crete_Round, Work_Sans } from "next/font/google";
import "./globals.css";
import { ChildProps } from "@/types";
const inter = Inter({ subsets: ["latin"] });
const creteRound = Crete_Round({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-creteRound"
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-workSans"
});
export const metadata: Metadata = {
  title: "Example for portfolio",
  description:
    "This website is created by Izhorbek to gain the expreience in Next js. Look at website and share your opinion."
};

function RootLayout({ children }: ChildProps) {
  return (
    <html lang="en">
      <body className={` ${creteRound.variable} ${workSans.variable}`}>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
