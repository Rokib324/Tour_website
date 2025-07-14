import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Travel App",
  description: "Travel App for booking tours",
  icons: {
    icon: '/rokib_logo.png', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          className={`${poppins.variable} antialiased`}
      >
        <ResponsiveNav/>
        {children}
        
      </body>
    </html>
  );
}
