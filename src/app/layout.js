import localFont from "next/font/local";
import "./globals.css";

const kode_mono = localFont({
  src: "../../public/KodeMono.ttf",
  variable: "--font-kode-mono",
});

export const metadata = {
  title: "Hexdle",
  description: "Made by Adam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kode_mono.className}>{children}</body>
    </html>
  );
}
