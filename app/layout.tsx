import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aviation Central | South Africa's Airshow Guide",
  description: "Discover the best aviation events, tips for attending, and join our growing community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-background text-foreground font-inter">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SiteHeader />
          <div className="flex-1">
            {children}
          </div>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
