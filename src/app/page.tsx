"use client";
import { Box, Button, Container, Grid, Stack, Text } from "@mantine/core";
import { FaArrowDown } from "react-icons/fa6";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useRef } from "react";

const CarouselHero = dynamic(() => import("@/components/CarouselHero"));
const Facility = dynamic(() => import("@/components/Facility"));
const Gallery = dynamic(() => import("@/components/Gallery"));
const News = dynamic(() => import("@/components/News"));

export default function Home() {
  const refFacility = useRef<HTMLInputElement>(null);
  const scrollToElement = () => {
    if (refFacility.current != null) {
      window.scrollTo({
        top: refFacility.current.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Container size={"xl"}>
        <Grid align="center" gutter={10}>
          <Grid.Col
            span={{ base: 12, lg: 6 }}
            order={{ base: 2, lg: 1 }}
            mt={{ base: 10, md: 0 }}
          >
            <motion.div
              initial={{
                opacity: 0,
                translateY: 100,
              }}
              animate={{
                opacity: 1,
                translateY: 0,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <Stack w={{ base: "100%", lg: "80%" }}>
                <Text size="32px" fw={600} lh={"xs"} c={"neutral.8"}>
                  Lembaga Pendidikan dan Kajian Islam
                </Text>

                <Text size="32px" c="success.5" fw={600}>
                  Asy-Syifa&#39;
                </Text>
                <Text component="p" c={"neutral.7"}>
                  Menyediakan pendidikan dasar Agama yang berkualitas untuk
                  putra-putri kaum muslimin serta mengembangkan kemampuan diri
                  dan fitrah manusia akan agama, dan tergeraknya hati untuk
                  membumikan Quran serta memahami fiqih sebagai bekal dasar
                  hidup sehari-hari di masyarakat.
                </Text>
                <Button
                  mt={{ base: 4, md: 20 }}
                  w={"max-content"}
                  rightSection={<FaArrowDown />}
                  bg={"success.5"}
                  radius={"xl"}
                  onClick={scrollToElement}
                >
                  Lihat Selengkapnya
                </Button>
              </Stack>
            </motion.div>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 6 }} order={{ base: 1, lg: 2 }}>
            <CarouselHero />
          </Grid.Col>
        </Grid>
      </Container>
      <Box ref={refFacility}>
        <Facility />
      </Box>
      <Gallery />
      <News />
    </>
  );
}
