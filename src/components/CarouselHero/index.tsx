import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useMediaQuery } from "@mantine/hooks";

function CarouselHero() {
  const isSmallerScreen = useMediaQuery("(max-width: 30em)");
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  const data = [
    "/assets/ustd-nas3.jpg",
    "/assets/ustd-nas.jpg",
    "/assets/foto1.png",
  ];

  return (
    <Carousel
      withIndicators
      draggable
      loop
      styles={{
        viewport: {
          borderRadius: 15,
        },
        control: {
          color: "white",
        },
      }}
      height={isSmallerScreen ? 250 : 400}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
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
  );
}

export default CarouselHero;
