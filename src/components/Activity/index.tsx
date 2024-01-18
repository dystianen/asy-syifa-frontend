import { Box, Card, Container, Grid, Text } from "@mantine/core";
import React from "react";
import TitleSection from "../TitleSection";
import { useGetListActivityQuery } from "@/store/api.slice";
import Image from "next/image";

function Activity() {
  const { data: responseActivity } = useGetListActivityQuery();
  return (
    <Container size={"xl"} mb={100}>
      <TitleSection title="Kegiatan" desc="Kegiatan kami di TPQ Asy-Syifa’" />
      <Grid>
        {responseActivity?.data?.map((activity: any, index: number) => (
          <Grid.Col key={index} span={{ base: 6, md: 4 }}>
            <Card className="relative overflow-hidden card-activity" p={0}>
              <Image
                src={activity.file_path}
                width={200}
                height={100}
                alt={activity.file_name}
                className="w-full h-32 md:h-64 rounded-sm img-activity"
              />
              <Box className="absolute h-40 bg-gradient-to-t from-black z-50 w-full bottom-0">
                <Text c={"white"} className="absolute bottom-3 left-5">
                  {activity.title}
                </Text>
              </Box>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}

export default Activity;
