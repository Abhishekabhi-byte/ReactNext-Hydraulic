import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import ConditionalFooter from "./ConditionalFooter";
// import ConditionalFooter from "./ConditionalFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Resilient ",
  description: "Resilient Solutions provide the best hydraulic machines ",
  keywords: "Parker products, hydraulic products, hydraulic Solution, Solutions of hydraulic in gamharia-jharkhand",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <ConditionalFooter/>
      </body>
    </html>
  );
}