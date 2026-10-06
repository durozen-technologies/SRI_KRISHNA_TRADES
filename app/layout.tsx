import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B192C",
};

export const metadata: Metadata = {
  title: "Sri Krishna Traders | Complete Building Solutions, Bathroom Fittings & Hardware",
  description: "Sri Krishna Traders - Premium bathroom & sanitary ware, Santé bath fittings dealer, electrical goods, PVC/CPVC pipes, water storage tanks, and hardware materials with on-site delivery.",
  keywords: [
    "Sri Krishna Traders",
    "Santé Bath Fittings",
    "Hardware Store",
    "Building Materials",
    "Bathroom Fittings",
    "Sanitary Ware",
    "PVC Pipes",
    "CPVC Pipes",
    "Overhead Water Tanks",
    "Electrical Goods",
    "Plumbing Solutions"
  ],
  authors: [{ name: "Sri Krishna Traders" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.className} ${inter.variable}`}>
      <body className="bg-[#F8FAFC] text-[#0F172A] min-h-screen flex flex-col antialiased selection:bg-orange-500 selection:text-white">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
