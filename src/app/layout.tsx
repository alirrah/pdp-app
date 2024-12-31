import React from "react";

import type { Metadata } from "next";

import "@/styles/typography.css";

import "./globals.css";

export const metadata: Metadata = {
  title: "اکسین",
  description: "نرم افزار توسعه فردی اکسین",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
