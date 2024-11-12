import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export const metadata = {
  title: "Shivam Sharma | Web Developer Portfolio | React , NodeJS, NextJS"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link rel="shortcut icon" href="svgs/about2.svg" type="image/x-icon" />
        <meta name="description" content="Explore Shivam Sharma's Web Portfolio featuring Web Development Projects using React, NodeJS, NextJS. Connect for top-tier frontend and backend as well as software development" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
       </head>
      <body style={{overflowX:"hidden"}} className={inter.className+"overflow-x-hidden"}><Navbar/>{children}<Footer/></body>
    </html>
  );
}
