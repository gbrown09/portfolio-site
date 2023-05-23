import Navbar from "./compontents/Navbar";
import "./globals.css";
import "tw-elements/dist/css/tw-elements.min.css";
import { Inter, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Garrett Brown",
  description: "Personal Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html data-theme="night" lang="en">
      <body id="home-section" className="">
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
