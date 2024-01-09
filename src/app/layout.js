import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/page";
import Footer from "./components/Footer/page";
import Popup from "./components/Popup/page";

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
        <Header />
        {children}
        <Popup />
        <Footer />
      </body>
    </html>
  );
}
