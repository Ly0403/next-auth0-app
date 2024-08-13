import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MongoCore from "./core/mongo.core";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auth0 App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  MongoCore.connect();


  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
