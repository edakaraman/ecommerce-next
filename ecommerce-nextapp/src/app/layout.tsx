import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/index.css";
import { ThemeProvider } from "@/context/ThemeContext";
import LeftMenu from "../components/HomeContent/LeftMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EdaYol",
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
        <ThemeProvider>
          <div className="flex">
            <LeftMenu />
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
