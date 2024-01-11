import { Box, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";

type PropsBanner = {
  title: string;
  image: string;
};

function Banner({ title, image }: PropsBanner) {
  return (
    <Box mb={32} className="relative">
      <Box className="absolute bg-[#00000085] w-full h-full">
        <Text
          c={"white"}
          fz={38}
          fw={600}
          className="absolute left-[25%] top-[40%]"
        >
          {title}
        </Text>
      </Box>
      <Box
        className="absolute h-full right-0"
        style={{
          width: "400px",
          borderBottom: "256px solid #4FDE80",
          borderLeft: "150px solid transparent",
        }}
      >
        <Image
          src={"/assets/logo.png"}
          width={100}
          height={100}
          alt="logo"
          className="absolute left-[50%] -translate-x-[60%] translate-y-20"
        />
      </Box>
      <Image
        src={image}
        width={2000}
        height={500}
        alt="visi-misi"
        className="w-full h-64"
      />
    </Box>
  );
}

export default Banner;
