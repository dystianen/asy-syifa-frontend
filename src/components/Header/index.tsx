"use client";
import {
  ActionIcon,
  Box,
  Collapse,
  Container,
  Flex,
  Menu,
  Stack,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

function Header() {
  const router = useRouter();
  const isSmallerScreen = useMediaQuery("(max-width: 30em)");
  const [isShowNavbar, setIsShowNavbar] = useState<boolean>(false);
  const [openedProfile, setOpenedProfile] = useState<boolean>(false);

  return (
    <header className="h-20 fixed w-full top-0 bg-white z-50 shadow-md">
      <Container
        size={"xl"}
        className="flex justify-between items-center h-full"
      >
        <Box
          className="flex items-center gap-5 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image src={"/assets/logo.png"} width={40} height={40} alt="logo" />
          <Text size="xl">Asy-Syifa&#39;</Text>
        </Box>
        {isSmallerScreen ? (
          <ActionIcon
            variant="transparent"
            c={"dark"}
            onClick={() => setIsShowNavbar(!isShowNavbar)}
          >
            {isShowNavbar ? (
              <MdClose style={{ fontSize: 32 }} />
            ) : (
              <FaBars style={{ fontSize: 24 }} />
            )}
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

      <Collapse
        in={isShowNavbar}
        className="z-50 absolute bg-white w-full shadow-lg"
      >
        <Stack mx={16} mb={24}>
          <Link href={"/"}>Home</Link>
          <Menu shadow="md">
            <Menu.Target>
              <UnstyledButton onClick={() => setOpenedProfile(!openedProfile)}>
                <Flex align={"center"} gap={10}>
                  Profil
                  <IoIosArrowDown />
                </Flex>
              </UnstyledButton>
            </Menu.Target>

            <Collapse in={openedProfile} bg={"transparent"}>
              <Stack ml={16} my={10}>
                <Link href={"/visi-misi"}>Visi & Misi</Link>
                <Link href={"/jadwal"}>Jadwal</Link>
              </Stack>
            </Collapse>
          </Menu>
          <Link href={"/blog"}>Artikel</Link>
          <Link href={"/kontak"}>Kontak</Link>
        </Stack>
      </Collapse>
    </header>
  );
}

export default Header;
