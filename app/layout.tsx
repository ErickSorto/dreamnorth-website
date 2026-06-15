import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const display = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dream-north.com"),
  title: {
    default: "DreamNorth | AI Dream Journal",
    template: "%s | DreamNorth",
  },
  description:
    "Remember, understand, and visualize your dreams with DreamNorth.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "DreamNorth | AI Dream Journal",
    description:
      "Remember, understand, and visualize your dreams with DreamNorth.",
    url: "https://dream-north.com",
    siteName: "DreamNorth",
    images: [
      {
        url: "/dreamnorth/social-preview.png",
        width: 1200,
        height: 630,
        alt: "DreamNorth AI dream journal preview with a glowing lighthouse and dream journaler.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DreamNorth | AI Dream Journal",
    description:
      "Remember, understand, and visualize your dreams with DreamNorth.",
    images: ["/dreamnorth/social-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
