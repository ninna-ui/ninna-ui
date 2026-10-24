import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ninna UI + Next.js",
  description: "A starter template with Ninna UI and Next.js",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="default">
      <body className="min-h-screen bg-base-50 text-base-content antialiased">
        {children}
      </body>
    </html>
  );
}
