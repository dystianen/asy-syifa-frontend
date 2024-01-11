import { Carousel } from "@mantine/carousel";
import { Box, Divider, Stack, Text, Title } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React, { useRef } from "react";
import TitleSection from "../TitleSection";

function Gallery() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const data = [
    "/assets/ustd-nas3.jpg",
    "/assets/ustd-nas.jpg",
    "/assets/ustd-nas.jpg",
    "/assets/ustd-nas.jpg",
    "/assets/ustd-nas.jpg",
    "/assets/ustd-nas.jpg",
    "/assets/ustd-nas.jpg",
    "/assets/ustd-nas.jpg",
  ];
  return (
    <Box pb={100}>
      <TitleSection
        title="Gallery"
        desc="Galeri foto kegiatan pembelajaran kami serta peringatan hari besar
          Islam di TPQ Asy-Syifa’"
      />
      <Carousel
        withControls={false}
        draggable
        loop
        height={250}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
        slidesToScroll={1}
        align="start"
      >
        {data.map((image, index) => (
          <Carousel.Slide key={index}>
            <Image
              src={image}
              width={400}
              height={200}
              alt="testing"
              className="w-full h-full"
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
}

export default Gallery;
