import type { Metadata } from "next";
import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { MantineProvider } from "@mantine/core";
import Header from "@/components/Header";
import { theme } from "@/config/theme";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Asy-Syifa'",
  description: "Lembaga pendidikan dan kajian islam",
};

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
      </head>
      <body className={poppins.className}>
        <MantineProvider theme={theme}>
          <Header />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
