"use client";
import { Card, Container, Stack, Text, Title } from "@mantine/core";
import dynamic from "next/dynamic";
import React from "react";

const Banner = dynamic(() => import("@/components/Banner"));

function Jadwal() {
  const listJadwal = [
    "1). Hari Senin – Jum’at, waktu: pukul 13.30 – 17.00 : Pembelajaran Baca Al-Quran untuk anak pada usia dini sampai usia SD/yang sederajat",
    "2). Hari Senin – Jum’at, waktu: pukul 18.00 – 19.30 : Pembelajaran Baca Al-Quran dan Fiqih untuk anak pria dan wanita pada Usia SD sampai usia SMA/SMK",
    "3). Hari Senin – Rabu, waktu: pukul 19.30 – 21.00 : Untuk Remaja Usia SMA, SMK dan Dewasa: Pembacaan Dzikir, Rotib, Fiqih, Kajian Kitab Kuning, dan Kajian Keislaman",
    "4). Hari Ahad : Belajar dasar bahasa Arab dan kitab Pernikahan",
  ];

  return (
    <Container size={"lg"}>
      <Banner title="Jadwal Kegiatan" image="/assets/jadwal-kegiatan.png" />
      <Stack justify="center" h={"100%"}>
        <Title order={3} c={"success.4"} ta={"center"}>
          Tempat
        </Title>
        <Text ta={"center"}>
          “Kegiatan ini bertempat di Wilayah RT. 05 RW. 03 Kelurahan Sawojajar,
          tempatnya di kediaman Bapak AHMAD NASIKIN, S.Ag, M.Pd. yang beralamat
          di Jl. Sawojajar XIII No. 60 Kelurahan Sawojajar, Kecamatan
          Kedungkandang, Kota Malang, 65139.”
        </Text>
        <Title order={3} c={"success.4"} ta={"center"} mt={64}>
          Jadwal
        </Title>
        <Stack>
          {listJadwal.map((item, index) => (
            <Card key={index} withBorder radius={"lg"}>
              {item}
            </Card>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}

export default Jadwal;
