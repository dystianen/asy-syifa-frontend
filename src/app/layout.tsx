"use client";
import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "@/config/theme";
import { Poppins } from "next/font/google";
import dynamic from "next/dynamic";
import { Providers } from "@/store/Provider";

const Header = dynamic(() => import("@/components/Header"));
const Footer = dynamic(() => import("@/components/Footer"));

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logo.png" />
        <title>Asy-Syifa’</title>
      </head>
      <body className={poppins.className}>
        <Providers>
          <MantineProvider theme={theme}>
            <Header />
            <div className="my-36">{children}</div>
            <Footer />
          </MantineProvider>
        </Providers>
      </body>
    </html>
  );
}
