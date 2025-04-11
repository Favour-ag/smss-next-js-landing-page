import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"] });

export const metadata = {
  title: "SSMS - Smart School Management",
  description: "An all-in-one digital school management solution.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Navbar />
      <body className={poppins.className}>{children}</body>
      <Footer />
    </html>
  );
}
