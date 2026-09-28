import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Manar Labs",
    template: "%s | Manar Labs",
  },
  description:
    "Manar Labs — Designing and building modern digital experiences.",
  keywords: [
    "Manar Labs",
    "Manar",
    "Developer",
    "Flutter Developer",
    "Next.js",
    "Software Developer",
    "Web Development",
  ],
  authors: [{ name: "Manar" }],
  creator: "Manar",
  metadataBase: new URL("https://manarlabs.dev"),
  openGraph: {
    title: "Manar Labs",
    description: "Designing and building modern digital experiences.",
    type: "website",
    siteName: "Manar Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manar Labs",
    description: "Designing and building modern digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
