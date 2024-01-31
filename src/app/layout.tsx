import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "@/config/theme";
import { Poppins } from "next/font/google";
import dynamic from "next/dynamic";
import { Providers } from "@/store/Provider";
import { Metadata } from "next";

const Header = dynamic(() => import("@/components/Header"));
const Footer = dynamic(() => import("@/components/Footer"));

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Asy-Syifa’",
  description:
    "Menyediakan pendidikan dasar Agama yang berkualitas untuk putra-putri kaum muslimin serta mengembangkan kemampuan diri dan fitrah manusia akan agama, dan tergeraknya hati untuk membumikan Quran serta memahami fiqih sebagai bekal dasar hidup sehari-hari di masyarakat.",
};

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
