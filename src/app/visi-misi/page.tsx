"use client";
import { Container, List, Stack, Text, Title } from "@mantine/core";
import dynamic from "next/dynamic";
import React from "react";
import { motion } from "framer-motion";

const Banner = dynamic(() => import("@/components/Banner"));

function VisiMisi() {
  const listMisi = [
    "Menguatkan dan menanamkan dasar keimanan dan ketaatan beragama Islam dengan mengkaji Quran dan Hadits serta ijtihad (kitab kuning).",
    "Menanamkan semangat Cinta Agama Islam (Allah) dan Rosulullah.",
    "Memperkokoh pemahaman keagamaan bidang : Tauhid, Fiqih, Syari’at, Akhlaq, sehingga hidup tenang dan tenteram dalam lingkungan masyarakat yang multikultural.",
    "Memberikan dasar-dasar kemampuan baca, tulis serta hafalan Al-Qur’an (khususnya Juz ‘Amma) juga Hafalan sistem Sorogan.",
    "Membentuk kepribadian berlandaskan kepada keyakinan yang benar dan perilaku yang mulia.",
  ];

  return (
    <Container size={"lg"}>
      <Banner title="Visi dan Misi" image="/assets/foto3.png" />
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
      >
        <Stack justify="center" h={"100%"}>
          <Title order={3} c={"success.8"} ta={"center"}>
            Visi
          </Title>
          <Text ta={"center"} c={"neutral.8"}>
            “Menjadikan generasi Qur’ani yang cerdas dan berilmu, bertauhid
            kokoh, serta berakhlak mulia.”
          </Text>
          <Title order={3} c={"success.8"} ta={"center"} mt={64}>
            Misi
          </Title>
          <List type="ordered" c={"neutral.8"}>
            {listMisi.map((item, index) => (
              <List.Item key={index}>{item}</List.Item>
            ))}
          </List>
        </Stack>
      </motion.div>
    </Container>
  );
}

export default VisiMisi;
