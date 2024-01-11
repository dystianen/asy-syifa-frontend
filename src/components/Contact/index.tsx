import {
  ActionIcon,
  Box,
  Container,
  Flex,
  Grid,
  Stack,
  Text,
  Title,
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
    <Box h={500}>
      <Stack justify="center" h={"100%"}>
        <Container size={"xl"}>
          <Grid gutter={50}>
            <Grid.Col span={4}>
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
                  <ActionIcon>
                    <FaInstagram
                      style={{ fontSize: 44, color: theme.colors.danger[5] }}
                    />
                  </ActionIcon>
                  <ActionIcon>
                    <FaWhatsapp
                      style={{ fontSize: 44, color: theme.colors.success[5] }}
                    />
                  </ActionIcon>
                </Flex>
              </Stack>
            </Grid.Col>
            <Grid.Col span={4}>
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
            <Grid.Col span={4}>
              <Stack>
                <Title order={4}>Hubungi Kami</Title>
                <Image
                  src={"/assets/peta.png"}
                  width={400}
                  height={400}
                  alt="map"
                  className="w-full"
                />
              </Stack>
            </Grid.Col>
          </Grid>
        </Container>
      </Stack>
    </Box>
  );
}

export default Contact;
