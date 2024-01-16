"use client";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useMediaQuery } from "@mantine/hooks";
import { useGetListHeroQuery } from "@/store/api.slice";

function CarouselHero() {
  const isSmallerScreen = useMediaQuery("(max-width: 30em)");
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  const { data: responseHero } = useGetListHeroQuery();

  return (
    <Carousel
      withIndicators
      draggable
      loop
      styles={{
        viewport: {
          borderRadius: 15,
        },
      }}
      height={isSmallerScreen ? 250 : 400}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      {responseHero?.data?.map((hero: any, index: number) => (
        <Carousel.Slide key={index}>
          <Image
            src={hero.file_path}
            width={400}
            height={200}
            alt="testing"
            className="w-full h-full aspect-video"
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

export default CarouselHero;
