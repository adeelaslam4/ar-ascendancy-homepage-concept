import type { Metadata, Viewport } from "next";
import "./globals.css";
import { fontVariables } from "./fonts";

export const metadata: Metadata = {
  title: "A.R. ASCENDANCY — Führungskräfte Coaching, Consulting, Mentoring & Strategic Advisory",
  description:
    "Als Consultant, Mentor & Strategic Advisor unterstütze ich Menschen mit Veränderungswunsch dabei Klarheit zu finden, selbstsichere Entscheidungen zu treffen und sich selbst zu führen.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
  icons: { icon: "/logo/monogram.svg" },
};

export const viewport: Viewport = {
  themeColor: "#efe6df",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}
