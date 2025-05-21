import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar";


const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "GradZee✨",
  description: "Removing Barriers for every Graduate aiming higher!",
  openGraph: {
    type: "website",
    // url: "https://pic2plate-tau.vercel.app",
    title: "GradZee✨",
    description: "Removing Barriers for every Graduate aiming higher!",
    siteName: "GradZee",
    // images: [{
    //   url: "https://pic2plate-tau.vercel.app/images/hero.webp",
    // }],
  },
  twitter: { 
    card: "summary_large_image",
    title: "GradZee✨",
    site: "@GradZee", 
    creator: "@DavidTimi_1", 
    // images: "https://pic2plate-tau.vercel.app/images/hero.webp" 
  },
  authors: [{ name: "Dev_id", url: "https://github.com/DavidTimi" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} antialiased`}
      >
        <div className="w-full h-full">
          <Navbar />
          <div className="w-full h-full py-8">
          {children}
        </div>
        </div>
      </body>
    </html>
  );
}
