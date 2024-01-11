"use client";
import { theme } from "@/config/theme";
import {
  ActionIcon,
  Box,
  Container,
  Flex,
  Menu,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaBars } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

function Header() {
  const router = useRouter();
  const isSmallerScreen = useMediaQuery("(max-width: 30em)");

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
        {isSmallerScreen ? (
          <ActionIcon variant="transparent" c={"dark"}>
            <FaBars style={{ fontSize: 24 }} />
          </ActionIcon>
        ) : (
          <nav className="flex gap-10">
            <Link href={"/"}>Home</Link>
            <Menu shadow="md">
              <Menu.Target>
                <UnstyledButton>
                  <Flex align={"center"} gap={10}>
                    Profil
                    <IoIosArrowDown />
                  </Flex>
                </UnstyledButton>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item onClick={() => router.push("/visi-misi")}>
                  Visi & Misi
                </Menu.Item>
                <Menu.Item onClick={() => router.push("/jadwal")}>
                  Jadwal
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
            <Link href={"/blog"}>Artikel</Link>
            <Link href={"/kontak"}>Kontak</Link>
          </nav>
        )}
      </Container>
    </header>
  );
}

export default Header;
