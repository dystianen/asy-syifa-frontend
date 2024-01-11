import { theme } from "@/config/theme";
import { Box, Container } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa6";

function Header() {
  // const isMobile = useMediaQuery('(min-width: 56.25em)');

  return (
    <header className="h-20">
      <Container
        size={"xl"}
        className="flex justify-between items-center h-full"
      >
        <Box className="flex items-center gap-5">
          <Image src={"/assets/logo.png"} width={40} height={40} alt="logo" />
          <h1 className="text-2xl">Asy-Syifa&#39;</h1>
        </Box>
        {/* {isMobile ? (
          <FaBars />
        ) : ( */}
          <nav className="flex gap-10">
            <Link href={"/home"}>Home</Link>
            <Link href={"/visi"}>Profil</Link>
            <Link href={"/blog"}>Blog</Link>
            <Link href={"/kontak"}>Kontak</Link>
          </nav>
        {/* )} */}
      </Container>
    </header>
  );
}

export default Header;
