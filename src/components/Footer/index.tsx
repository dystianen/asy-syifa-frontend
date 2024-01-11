"use client";
import {
  ActionIcon,
  Box,
  Container,
  Flex,
  Grid,
  Stack,
  Text,
  Title,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import Image from "next/image";
import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Contact() {
  const theme = useMantineTheme();

  const dataContact = [
    {
      icon: (
        <FaLocationDot
          style={{ fontSize: 20, color: theme.colors.success[5] }}
        />
      ),
      title:
        "Jl. Sawojajar XIII No. 60 Sawojajar, Kedungkandang, Kota Malang - Jawa Timur Kode Pos. 65139",
    },
    {
      icon: <FaPhone style={{ color: theme.colors.success[5] }} />,
      title: "+62 813-3491-6696",
    },
    {
      icon: (
        <MdEmail style={{ fontSize: 20, color: theme.colors.success[5] }} />
      ),
      title: "umisayyidah611@gmail.com",
    },
  ];
  return (
    <Container size={"xl"} mt={100} pb={30}>
      <Grid gutter={{base: 20, md: 50}}>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Stack>
            <Image
              src={"/assets/logo.png"}
              width={100}
              height={100}
              alt="logo"
            />
            <Text c={"neutral.7"}>
              Lembaga Pendidikan dan Kajian Islam Asy-Syifa’ peduli dengan
              pendidikan putra-putri dan demi masa depan Islam yang lebih
              cemerlang.
            </Text>
            <Flex gap={20}>
              <ActionIcon
                variant="transparent"
                onClick={() => window.open("https://www.instagram.com/assovo/")}
              >
                <FaInstagram
                  style={{ fontSize: 44, color: theme.colors.danger[5] }}
                />
              </ActionIcon>
              <ActionIcon
                variant="transparent"
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send?phone=+6285606168910"
                  )
                }
              >
                <FaWhatsapp
                  style={{ fontSize: 44, color: theme.colors.success[5] }}
                />
              </ActionIcon>
            </Flex>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Stack>
            <Title order={4}>Hubungi Kami</Title>
            {dataContact.map((it, index) => (
              <Flex key={index} align={"start"} gap={5}>
                <Box mt={3}>{it.icon}</Box>
                <Text c={"neutral.7"}>{it.title}</Text>
              </Flex>
            ))}
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Stack>
            <Title order={4}>Peta Lokasi</Title>
            <UnstyledButton
              onClick={() =>
                window.open("https://goo.gl/maps/eRzfFEVbniXgEb6i8")
              }
            >
              <Image
                src={"/assets/peta.png"}
                width={400}
                height={400}
                alt="map"
                className="w-full"
              />
            </UnstyledButton>
          </Stack>
        </Grid.Col>
      </Grid>
      <Text c={"neutral.7"} ta={"center"} mt={72}>
        2024 &copy; Copyright - Lembaga Pendidikan dan Kajian Islam{" "}
        <Text c={"success.4"} component="span">
          Asy-Syifa’
        </Text>
      </Text>
    </Container>
  );
}

export default Contact;
