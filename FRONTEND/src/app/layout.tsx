import type { Metadata } from "next";
import { Poppins, Tinos, Duru_Sans } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/redux/redux-povide";
import { Toaster } from "@/components/ui/toaster";
import PageLoader from "@/components/Loader/ShopLoader";

const inter = Poppins({ subsets: ["latin"], weight: ["400"] });

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "The Haat Bazaar",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className + "bg-pale"}>
        <PageLoader />
        <ReduxProvider>{children}</ReduxProvider>
        <Toaster />
      </body>
    </html>
  );
}
