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
      <link rel="icon" href="/HexdleLogo.png" type="image/png" sizes="any" />
      <body className={kode_mono.className}>{children}</body>
    </html>
  );
}
