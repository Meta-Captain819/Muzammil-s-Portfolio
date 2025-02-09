import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import BackgroundAnimation from "./components/BackgroundAnimation";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Muzammil Mehdi Portfolio",
  description: "Muzammil Mehdi a Full Stack Web developer showcasing his skills in this website portfolio.",
  icons: {
    icon: '/me.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black">
        <BackgroundAnimation />

        <Navbar />
        <div className="z-10">

        {children}
        </div>
        <Footer />
        </div>
      </body>
    </html>
  );
}
