import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Lexend,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontLexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});
