import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mastering Next.js",
  description: "A tutorial project from Code With Mosh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
