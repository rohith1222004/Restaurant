"use client";
import { Button } from "./ui/button";
import { TypewriterEffectSmooth } from "./ui/typeWritting";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Build",
      className:"text-5xl md:text-7xl  text-gray-700 font-bold ",
    },
    {
      text: "awesome",
      className:"text-5xl md:text-7xl text-gray-700 font-bold ",
    },
  ];
  return (
    <div className="lg:w-2/4  ">
        <TypewriterEffectSmooth words={words} cursorClassName="bg-black-200" />
        {/* <p className="w-2/3 text-gray-500 font-medium text-base md:text-lg lg:text-xl">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </p> */}
        <p className=" lg:w-2/3 md:1/3 text-gray-500 font-medium ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <div>
        <Button className="mt-5">Reserver Table</Button>
        <Button className="mt-5 ml-5 bg-gray-200  text-black">Food Menu</Button>
        </div>
        <h1 className="mt-10 mb-5 w-2/3 text-gray-500 font-bold">Trusted By</h1>
        <Carousel
        className="w-4/5"
           plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
        <CarouselContent>
          <CarouselItem className="basis-1/3">
            <Image src={'/swiggy.svg'} height={150} width={150} alt="logo" />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Image src={'/zomato.svg'} height={150} width={150} alt="logo" />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <Image src={'/swiggy.svg'} height={150} width={150} alt="logo" />
          </CarouselItem>     <CarouselItem className="basis-1/3">
            <Image src={'/zomato.svg'} height={150} width={150} alt="logo" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

  </div>
  );
}
