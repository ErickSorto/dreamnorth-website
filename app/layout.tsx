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
  applicationName: "DreamNorth",
  category: "AI dream journal app",
  authors: [{ name: "DreamNorth" }],
  creator: "DreamNorth",
  publisher: "DreamNorth",
  title: {
    default: "DreamNorth | AI Dream Journal App & AI Dream Tools",
    template: "%s | DreamNorth",
  },
  description:
    "DreamNorth is an AI dream journal app with dream interpretation, symbol tracking, voice notes, and AI image tools for visualizing dream worlds.",
  keywords: [
    "dream journal app",
    "AI dream journal",
    "dream interpretation app",
    "dream tracker",
    "dream analysis",
    "AI dream tools",
    "lucid dream journal",
    "dream visualization",
  ],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "DreamNorth | AI Dream Journal App & AI Dream Tools",
    description:
      "Record dreams, interpret symbols, track patterns, and generate AI dream worlds with DreamNorth.",
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
    title: "DreamNorth | AI Dream Journal App",
    description:
      "Record dreams, interpret symbols, track patterns, and generate AI dream worlds with DreamNorth.",
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
