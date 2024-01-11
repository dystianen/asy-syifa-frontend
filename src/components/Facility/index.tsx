import { Box, Card, Container, Grid, Stack, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";

function Facility() {
  const data = [
    {
      title: "Taman Pendidikan Tartil Al-Qur’an",
      icon: "/assets/ic-quran.png",
    },
    {
      title: "Majelis Qur’an dan Tafsir",
      icon: "/assets/ic-masjid.png",
    },
    {
      title: "Kajian Kitab dan Dzikir",
      icon: "/assets/ic-masjid.png",
    },
    {
      title: "Jama’ah Sholawat Anak",
      icon: "/assets/ic-sholawat.png",
    },
    {
      title: "Asrama Putra",
      icon: "/assets/ic-asrama.png",
    },
  ];
  return (
    <Box mt={100}>
      <Image
        src="/assets/union.png"
        width={1000}
        height={200}
        alt="union"
        className="w-full"
      />
      <Container size={"xl"}>
        <Grid
          pb={100}
          justify="center"
          gutter={"xl"}
          styles={{
            col: {
              display: "flex",
              justifyContent: "center",
            },
          }}
        >
          {data.map((it, index) => (
            <Grid.Col key={index} span={{ base: 12, lg: 2 }}>
              <Card
                h={220}
                w={190}
                radius={"lg"}
                styles={{
                  root: {
                    boxShadow: "0px 4px 32px rgba(0, 0, 0, 0.06)",
                    ":hover": {
                      boxShadow: "8px 8px 33px #cccccc,-8px -8px 33px #f4f4f4",
                      cursor: "pointer",
                    },
                  },
                }}
              >
                <Stack align="center" h={"100%"} justify="center">
                  <Image src={it.icon} width={80} height={80} alt="icon" />
                  <Text ta={"center"}>{it.title}</Text>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Facility;
