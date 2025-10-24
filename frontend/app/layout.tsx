import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "I am Jeffrey",
  description: "Front-end portfolio of Jeffrey Happel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${firaCode.variable} antialiased`}>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
