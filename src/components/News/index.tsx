import React from "react";
import TitleSection from "../TitleSection";
import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

function News() {
  const theme = useMantineTheme();
  const data = [
    {
      img: "/assets/foto1.png",
      title: "Sholawat",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      img: "/assets/foto1.png",
      title: "Sholawat",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      img: "/assets/foto1.png",
      title: "Sholawat",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      img: "/assets/foto1.png",
      title: "Sholawat",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];
  
  return (
    <Box>
      <TitleSection
        title="Artikel Terbaru"
        desc="Ikuti dan simak informarsi dan berita terbaru tentang TPQ
        Asy-Syifa’"
      />

      <Box bg={"success.4"} py={32}>
        <Container size={"xl"}>
          <Grid align="center">
            {data.map((item, index) => (
              <Grid.Col span={{ base: 6, md: 3 }} key={index}>
                <Card bg={"white"} radius={15} shadow="sm" p={0}>
                  <Image
                    src={item.img}
                    width={300}
                    height={100}
                    alt="image"
                    className="w-full object-contain"
                  />
                  <Box p={16}>
                    <Title order={5} c={"neutral.9"}>
                      {item.title}
                    </Title>
                    <Text lineClamp={3} c={"neutral.7"}>
                      {item.desc}
                    </Text>
                    <Link href={"#"} style={{ width: "max-content" }}>
                      <Text
                        c="success.4"
                        styles={{
                          root: {
                            "&:hover": {
                              color: theme.colors.success[9],
                            },
                          },
                        }}
                      >
                        Selengkapnya
                      </Text>
                    </Link>
                  </Box>
                </Card>
              </Grid.Col>
            ))}
          </Grid>

          <Flex justify="center" mt={32}>
            <Button bg={"white"} c={"success.4"} radius={"xl"}>
              Lihat Selengkapnya
            </Button>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}

export default News;
