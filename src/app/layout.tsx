import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

/* ===== CLASH DISPLAY — Hero headline + project numbers + footer CTA only ===== */
const clashDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/ClashDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clash",
  display: "swap",
});

/* ===== SATOSHI — Body, section titles, labels ===== */
const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

/* ===== META — from content.md META section ===== */
export const metadata: Metadata = {
  title: "Rizky Ananda Herly — Product-minded Technical Builder",
  description:
    "Information Systems student building backend systems and managing products that solve real operational problems.",
  authors: [{ name: "Rizky Ananda Herly" }],
  keywords: [
    "Backend Developer",
    "Product Manager",
    "Portfolio",
    "Rizky Ananda Herly",
    "Telkom University",
    "Laravel",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${clashDisplay.variable} ${satoshi.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
