import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Header/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dealhub",
  description: "Make your life easy",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
