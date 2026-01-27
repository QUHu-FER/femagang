import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "esdm Sumatera Barat",
  description: "website resmi esdm Sumatera Barat",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: ["ESDM", "Sumatera Barat", "Energi", "Pertambangan", "Sumber Daya Mineral"],
  authors: [{ name: "Dinas ESDM Sumbar" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#2563eb",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script
          src="https://cdn.userway.org/widget.js"
          data-account="aLsAun4U5c"
          data-position="5"
          data-size="medium"
          data-color="#2563eb"
          async
          defer
        ></script>
      </body>
    </html>
  );
}
