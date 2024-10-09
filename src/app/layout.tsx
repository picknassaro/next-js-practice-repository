import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import AuthProvider from "./auth/Provider";

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
    <html lang="en" data-theme="winter">
      <AuthProvider>
        <body className="antialiased">
          <NavBar />
          <main className="p-5">{children}</main>
        </body>
      </AuthProvider>
    </html>
  );
}
