import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import StoreProvider from "./StoreProvider";
import Footer from "@/components/common/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hestia",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="sticky top-0 z-50">{/* <LoginNavbar /> */}</div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
