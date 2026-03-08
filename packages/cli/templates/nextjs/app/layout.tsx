import type React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ninna UI + Next.js",
  description: "A starter template with Ninna UI and Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="default">
      <body>
        <div className="min-h-screen bg-base-50 text-base-content antialiased">
          {children}
        </div>
      </body>
    </html>
  );
}
