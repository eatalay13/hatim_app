import Footer from "@/components/footer";
import Header from "@/components/header";
import ScrollToTop from "@/components/scroll-up";
import { fontLexend } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Kur'an Hatim Uygulaması",
    absolute: "Hatim",
    default: "Kur'an Hatim Uygulaması",
  },
  description: siteConfig.description,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "rgb(4 120 87 / 0.7)" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps extends Readonly<{
  children: React.ReactNode;
}> { }

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="tr">
      <body className={fontLexend.className}>
        <Header />
        <main>
          {children}
          <Footer />
        </main>
        <ScrollToTop />
      </body>
    </html>
  );
}
