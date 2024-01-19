import { Divider, Stack, Text, Title } from "@mantine/core";
import React from "react";
import { motion } from "framer-motion";

type PropsTitle = {
  title: string;
  desc: string;
};
function TitleSection({ title, desc }: PropsTitle) {
  return (
    <Stack align="center" mb={32} w={"100%"}>
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
        }}
        viewport={{ once: true }}
      >
        <Title ta={"center"} c={"neutral.9"} w={"max-content"}>
          {title}
          <Divider size={"lg"} mt={5} color={"success.8"} />
        </Title>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
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
        <Text component="p" ta={"center"} c={"neutral.8"}>
          {desc}
        </Text>
      </motion.div>
    </Stack>
  );
}

export default TitleSection;
