import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Nunito } from 'next/font/google';
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer"

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito",
});

// Configure Inter
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // pick the weights you need
  variable: "--font-inter",             // optional: for using in Tailwind as a variable
});




export const metadata: Metadata = {
  title: "Polk County Bully",
  description: "polk-county-bully website",
  metadataBase: new URL("https://polk-county-bully-website.vercel.app/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${inter.variable}`}>
      <body className="">
        <Providers>
          <Navbar />
          <main className="">{children}</main>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
