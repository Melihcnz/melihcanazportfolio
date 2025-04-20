import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from './context/ThemeContext'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Melih Canaz - Full Stack Developer",
  description: "Melih Canaz - Full Stack Developer kişisel web sitesi, projeler ve portfolyo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
