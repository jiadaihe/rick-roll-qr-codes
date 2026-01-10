import type { Metadata } from "next";
import { Cascadia_Mono, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const cascadiaMono = Cascadia_Mono({
  variable: "--font-cascadia-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QRICK QROLL",
  description:
    "A bespoke website for Marcos to test his ability to distinguish QR Rick Rolls",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cascadiaMono.variable}`}>{children}</body>
    </html>
  );
}
