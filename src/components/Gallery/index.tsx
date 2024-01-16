import { Carousel } from "@mantine/carousel";
import { Box } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React, { useRef } from "react";
import TitleSection from "../TitleSection";
import { useGetListGalleryQuery } from "@/store/api.slice";

function Gallery() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const { data: responseGallery } = useGetListGalleryQuery();

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
        height={200}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        slideSize={{ base: "100%", sm: "50%", lg: "25%" }}
        slidesToScroll={1}
        align="start"
      >
        {responseGallery?.data?.map((gallery: any, index: number) => (
          <Carousel.Slide key={index}>
            <Image
              src={gallery.file_path}
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
