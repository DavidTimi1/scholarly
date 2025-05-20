import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar";


const openSans = Open_Sans({
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "GradZee",
  description: "Removing Barriers for every Graduate aiming higher!",
  openGraph: {
    type: "website",
    url: "https://pic2plate-tau.vercel.app",
    title: "Pic2Plate",
    description: "Removing Barriers for every Graduate aiming higher!",
    siteName: "Pic2Plate",
    images: [{
      url: "https://pic2plate-tau.vercel.app/images/hero.webp",
    }],
  },
  twitter: { 
    card: "summary_large_image",
    title: "Pic2Plate",
    site: "@Pic2Plate", 
    creator: "@DavidTimi_1", 
    images: "https://pic2plate-tau.vercel.app/images/hero.webp" 
  },
  authors: [{ name: "TimiDev", url: "https://github.com/DavidTimi" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
