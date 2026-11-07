import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WDD 430 Portfolio",
  description: "My WDD 430 development portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}