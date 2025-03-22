import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jumia Kenya | Online Shopping for Fashion, Electronics, Phones, Beauty, Home & More",
  description: "Jumia Kenya - The #1 Online Shopping destination for Electronics, Phones, Computers, Fashion, Home Appliances, and more in Kenya. Best Prices ✓ Fast Delivery ✓ Cash on Delivery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-jumia-light-gray`}>
        {children}
      </body>
    </html>
  );
}
