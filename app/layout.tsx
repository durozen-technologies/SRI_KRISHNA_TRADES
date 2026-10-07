import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B192C",
};

export const metadata: Metadata = {
  title: "Sri Krishna Traders | Complete Building Solutions, Bathroom Fittings & Hardware",
  description: "Sri Krishna Traders - Premium bathroom & sanitary ware, electrical goods, Havells, Crompton, V-Guard geysers, Finolex PVC/CPVC pipes, water storage tanks, and hardware materials with on-site delivery.",
  keywords: [
    "Sri Krishna Traders",
    "Havells Electricals",
    "Crompton Fans",
    "Finolex Pipes",
    "V-Guard Geysers",
    "RR Kabel",
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
    <html lang="en" className={`scroll-smooth ${inter.variable} ${plusJakarta.variable}`}>
      <body className="font-sans bg-[#F8FAFC] text-[#0F172A] min-h-screen flex flex-col antialiased selection:bg-orange-500 selection:text-white">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
