import type { Metadata } from "next";
import { Geist, Geist_Mono, Work_Sans } from "next/font/google";
import "./globals.css";
import ReactQueryContext from "@/lib/context/react-query-context";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "noloops",
  description: "A leading tech company in Nepal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${workSans.variable} antialiased font-work-sans`}
      >
        <ReactQueryContext>
          <Header/>
          {children}
          <Footer/>
        </ReactQueryContext>
      </body>
    </html>
  );
}
