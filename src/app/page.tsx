"use client";
import { Button, Container, Grid, Stack, Text } from "@mantine/core";
import { FaArrowDown } from "react-icons/fa6";
import dynamic from "next/dynamic";

const CarouselHero = dynamic(() => import("@/components/CarouselHero"));
const Facility = dynamic(() => import("@/components/Facility"));
const Gallery = dynamic(() => import("@/components/Gallery"));
const News = dynamic(() => import("@/components/News"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  return (
    <>
      <Container size={"xl"} mt={{ base: 28, md: 80 }}>
        <Grid align="center" gutter={0}>
          <Grid.Col
            span={{ base: 12, lg: 6 }}
            order={{ base: 2, lg: 1 }}
            mt={{ base: 60, md: 0 }}
          >
            <Stack w={{ base: "100%", lg: "80%" }}>
              <Text size="32px" fw={600} lh={"xs"} c={"neutral.8"}>
                Lembaga Pendidikan dan Kajian Islam
              </Text>
              <Text size="32px" c="success.4" fw={600}>
                Asy-Syifa&#39;
              </Text>
              <Text component="p" c={"neutral.7"}>
                Menyediakan pendidikan dasar Agama yang berkualitas untuk
                putra-putri kaum muslimin serta mengembangkan kemampuan diri dan
                fitrah manusia akan agama, dan tergeraknya hati untuk membumikan
                Quran serta memahami fiqih sebagai bekal dasar hidup sehari-hari
                di masyarakat.
              </Text>
              <Button
                mt={20}
                w={"max-content"}
                rightSection={<FaArrowDown />}
                bg={"success.5"}
                radius={"xl"}
              >
                Lihat Selengkapnya
              </Button>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 6 }} order={{ base: 1, lg: 2 }}>
            <CarouselHero />
          </Grid.Col>
        </Grid>
      </Container>
      <Facility />
      <Gallery />
      <News />
      <Contact />
    </>
  );
}
