import { Divider, Stack, Text, Title } from "@mantine/core";
import React from "react";

type PropsTitle = {
  title: string;
  desc: string;
};
function TitleSection({ title, desc }: PropsTitle) {
  return (
    <Stack align="center" mb={32} w={"100%"}>
      <Title ta={"center"} c={"neutral.8"} w={"max-content"}>
        {title}
        <Divider size={"lg"} mt={5} color={"success.4"} />
      </Title>
      <Text component="p" c={"neutral.7"}>
        {desc}
      </Text>
    </Stack>
  );
}

export default TitleSection;
