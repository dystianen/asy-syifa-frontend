import { Box, Card, Container, Grid, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function Facility() {
  const isMobile = useMediaQuery("(max-width: 56.25em)");

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
          justify={isMobile ? "start" : "center"}
          gutter={"xl"}
          styles={{
            col: {
              display: "flex",
              justifyContent: "center",
            },
          }}
        >
          {data.map((it, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 4, lg: 2 }}>
              <motion.div
                initial={{
                  opacity: 0,
                  translateY: 100,
                }}
                whileInView={{
                  opacity: 1,
                  translateY: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index,
                }}
                viewport={{ once: true }}
              >
                <Card
                  h={220}
                  w={190}
                  radius={"lg"}
                  styles={{
                    root: {
                      boxShadow: "0px 4px 32px rgba(0, 0, 0, 0.06)",
                      ":hover": {
                        boxShadow:
                          "8px 8px 33px #cccccc,-8px -8px 33px #f4f4f4",
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
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Facility;
