import { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import NavbarDemo from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

// Initialize the fonts with the correct configurations
const inter = Inter({ subsets: ["latin"], variable: "--inter" });
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Define the metadata
export  const metadata: Metadata = {
  title: "Paper Cup Machine Manufacturer and Supplier - Nessco India",
  description:
    "Trusted Paper Cup Machine Manufacturer since 1978. Nessco offers a wide range of paper cup making machines pairing with the latest technology. Enquire now!",
  keywords: [
    "Nessco India",
    "Paper Cup Machine",
    "Packaging Machines",
    "Machinery Manufacturer",
  ],
  openGraph: {
    title: "Paper Cup Machine Manufacturer and Supplier - Nessco India",
    description:
      "Trusted Paper Cup Machine Manufacturer since 1978. Nessco offers a wide range of paper cup making machines pairing with the latest technology. Enquire now!",
    images: [
      {
        url: "https://www.nesscoindia.com/Assets/images/resource/fully-automatic-paper-cup-making-machine.webp",
        alt: "Fully Automatic Paper Cup Making Machine",
      },
    ],
  },
  robots: "index, follow",
  authors: [{ name: "Nessco India" }],
  publisher: "Nessco India",
  alternates: {
    canonical: "https://www.nesscoindia.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="https://www.nesscoindia.com/Assets/images/banner/banner-image-nessco-2.webp"
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable}`}>
        <NavbarDemo />
        {children}
        <Footer />
      </body>
    </html>
  );
}
