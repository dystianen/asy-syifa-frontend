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
import { motion } from "framer-motion";

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
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        viewport={{ once: true }}
      >
        <Grid gutter={{ base: 20, md: 50 }}>
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
                  onClick={() =>
                    window.open("https://www.instagram.com/assovo/")
                  }
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
              <iframe
                width="100%"
                height="200"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.253790638512!2d112.6532948!3d-7.9727019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6284504a469e5%3A0xb3edf039d83b25d7!2sGg.%2013%20No.60%2C%20Sawojajar%2C%20Kec.%20Kedungkandang%2C%20Kota%20Malang%2C%20Jawa%20Timur%2065139!5e0!3m2!1sid!2sid!4v1705245283402!5m2!1sid!2sid"
                loading="lazy"
              ></iframe>
            </Stack>
          </Grid.Col>
        </Grid>
        <Text c={"neutral.7"} ta={"center"} mt={72}>
          2024 &copy; Copyright - Lembaga Pendidikan dan Kajian Islam{" "}
          <Text c={"success.4"} component="span">
            Asy-Syifa’
          </Text>
        </Text>
      </motion.div>
    </Container>
  );
}

export default Contact;
