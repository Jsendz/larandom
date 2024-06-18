import type { Metadata } from "next";
import "./globals.css";
import {Providers} from "./providers";
import Navbar from "./components/Navbar"





export const metadata: Metadata = {
  title: "LaRandom x Andorra",
  description: "Simplemente diferentes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
      <Navbar />
      {children}
      </Providers>
      </body>
    </html>
  );
}
