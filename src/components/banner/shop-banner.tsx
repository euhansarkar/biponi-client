/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Autoplay from 'embla-carousel-autoplay';

const imgArr = [
  "https://m2ce.sindabad.com/pub/media/scriptlodge/banner/image//web/fashion-ja-1420en.jpg",
  "https://m2ce.sindabad.com/pub/media/scriptlodge/banner/image//web/fashion-ja-1420en.jpg",
  "https://m2ce.sindabad.com/pub/media/scriptlodge/banner/image//web/fashion-ja-1420en.jpg",
  "https://m2ce.sindabad.com/pub/media/scriptlodge/banner/image//web/fashion-ja-1420en.jpg",
  "https://m2ce.sindabad.com/pub/media/scriptlodge/banner/image//web/fashion-ja-1420en.jpg",
  "https://m2ce.sindabad.com/pub/media/scriptlodge/banner/image//web/fashion-ja-1420en.jpg",
];

const ShopBanner = () => {

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        duration: 20,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="w-full h-auto mx-auto mt-4 md:mt-2"
    >
      <CarouselContent>
        {imgArr.map((img, index) => (
          <CarouselItem key={index} className="basic-1/1 h-auto max-h-[300px]">
            <div className="p-0 md:p-1">
              <Card>
                <AspectRatio ratio={16 / 9} className="bg-muted rounded-md">
                  <Image
                    src={img}
                    alt="Photo by Drew Beamer"
                    fill
                    className="rounded-md object-fill h-auto max-h-[300px]"
                  />
                </AspectRatio>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* carousel previous and next disabled here */}

      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
};

export default ShopBanner;
