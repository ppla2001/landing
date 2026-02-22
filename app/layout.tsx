import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { EmailModalProvider } from "@/contexts/EmailModalContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pedro Pla · Product & Growth",
  description:
    "I turn ambiguous problems into clear roadmaps, ship products that scale, and find growth levers others miss.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem("theme");var d=window.matchMedia("(prefers-color-scheme: dark)").matches;var dark=t==="dark"||(!t&&d);document.documentElement.classList.toggle("dark",dark);})();`,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            <EmailModalProvider>{children}</EmailModalProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
