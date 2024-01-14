import { Box, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import React from "react";

type PropsBanner = {
  title: string;
  image: string;
};

function Banner({ title, image }: PropsBanner) {
  const isSmallerScreen = useMediaQuery("(max-width: 30em)");

  return (
    <Box mb={32} className="relative">
      <Box className="absolute bg-[#00000085] w-full h-full">
        <Text
          c={"white"}
          fz={{base: 20, md:38}}
          fw={600}
          className="absolute left-[15%] md:left-[25%] top-[43%] md:top-[40%]"
        >
          {title}
        </Text>
      </Box>
      <Box
        className="absolute h-full right-0"
        style={{
          width: isSmallerScreen ? "100px" : "400px",
          borderBottom: `${isSmallerScreen ? "177px" : "256px"} solid #4FDE80`,
          borderLeft: `${isSmallerScreen ? "50px" : "150px"} solid transparent`,
        }}
      >
        <Image
          src={"/assets/logo.png"}
          width={100}
          height={100}
          alt="logo"
          className="absolute left-[35%] md:left-[50%] -translate-x-[60%] translate-y-16 md:translate-y-20"
        />
      </Box>
      <Image
        src={image}
        width={2000}
        height={500}
        alt="visi-misi"
        className="w-full h-44 md:h-64"
      />
    </Box>
  );
}

export default Banner;
