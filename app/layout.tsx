import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const baseFont = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HackMates: Start building today!",
  description: "Bringing teams together to turn ideas into reality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={baseFont.className}>{children}</body>
    </html>
  );
}
