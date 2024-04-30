'use client'

import { ModeToggle } from "@/components/toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { ThreeDCardDemo } from "@/components/ThreeCard";
import { TypewriterEffectSmoothDemo } from "@/components/TypeWritting";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Text3DCard } from "@/components/Text3DCard";
import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Card, CardDescription, CardContent,CardFooter,CardHeader,CardTitle } from "@/components/ui/card";


export default function Home() {
  return (
  <div className="h-full w-full  dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.05] relative items-center justify-around">
      
 <div className="flex items-center justify-between px-4 py-2  ">
  {/* Left side: Logo and Restaurant Name */}
  <div className="flex items-center space-x-2">
    <Image src="/logo.gif" width={50} height={50} alt="logo" />
    {/* <h1 className="text-xl font-semibold te xt-gray-600">Restaurant Name</h1> */}
  </div>

  {/* Right side: Navigation Menu */}
  <div className="flex items-center space-x-4">
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuTrigger>Book</NavigationMenuTrigger>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuTrigger>Contact Us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
</div>



        {/* Hero Page */}
        <div className="flex flex-col md:flex-row justify-around items-center">
          <TypewriterEffectSmoothDemo/>

          <div className="">
            <ThreeDCardDemo />
          </div>
        </div>
        <h1 className="flex justify-center m-10 text-3xl font-semibold text-gray-600 ">Featured Items</h1>
        
        
        <div className="flex justify-evenly mb-48">

        {/* Carousel */}


        <Carousel
        className="w-1/5"
           plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
        <CarouselContent>
           <CarouselItem className="flex justify-center items-center">
                      <Image src='/food_2.jpg' height={500} width={500} alt="food1"/>
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
                      <Image src='/food.jpg' height={500} width={500} alt="food1"/>
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
                      <Image src='/food_3.jpg' height={500} width={500} alt="food1"/>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
          <Text3DCard/>
        {/* <h1 className="w-1/2 justify-center items-center flex text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </h1> */}
      </div>

      {/* why us */}
      <h1 className="flex justify-center m-10 text-3xl font-semibold text-gray-600 ">Why Us?</h1>
      <div className="flex justify-center items-center">
        <Card className="bg-gray-200 w-3/4 p-16">
        <CardContent className="flex items-center">
            <Image src={'/delivery.jpg'} height={150} width={150} alt="delivery" />
            <div>
              <h1 className="font-bold text-gray-700">Fastest Delivery</h1>
              <p className="">It is a long established fact that a reader will be distracted by the readable </p>
            </div>
            <Image src={'/delivery.jpg'} height={150} width={150} alt="delivery" />
            <div>
              <h1 className="font-bold text-gray-700">Fastest Delivery</h1>
              <p className="">It is a long established fact that a reader will be distracted by the readable </p>
            </div>       
            <Image src={'/delivery.jpg'} height={150} width={150} alt="delivery" />
            <div>
              <h1 className="font-bold text-gray-700">Fastest Delivery</h1>
              <p className="">It is a long established fact that a reader will be distracted by the readable </p>
            </div>
        </CardContent>
      </Card>
    </div>

      {/* Popular dishes */}
      <h1 className="flex justify-center m-10 text-3xl font-semibold text-gray-600 ">Popular Dishes</h1>
          <div className="flex justify-evenly">
          <Card className="w-1/5">
            <CardContent className="flex flex-col justify-center items-center">
              <Image src={'/burger.jpg'} height={150} width={150} alt="food" />
              <p className="font-semibold text-gray-700 text-center">Tasty Burger with beef and cheese dipped with white sause</p>
            </CardContent>
          </Card>
          <Card className="w-1/5">
            <CardContent className="flex flex-col justify-center items-center">
              <Image src={'/shawarma.jpg'} height={150} width={150} alt="food"className="m-5" />
              <p className="font-semibold text-gray-700 text-center">Tasty Burger with beef and cheese dipped with white sause</p>
            </CardContent>
          </Card>  
          <Card className="w-1/5">
            <CardContent className="flex flex-col justify-center items-center">
              <Image src={'/pizza.jpg'} height={150} width={150} alt="food" className="m-5"/>
              <p className="font-semibold text-gray-700 text-center">Tasty Burger with beef and cheese dipped with white sause</p>
            </CardContent>
          </Card>
          </div>

          <div className="flex justify-evenly mt-20">
          <Card className="w-1/5">
            <CardContent className="flex flex-col justify-center items-center">
              <Image src={'/burger.jpg'} height={150} width={150} alt="food" />
              <p className="font-semibold text-gray-700 text-center">Tasty Burger with beef and cheese dipped with white sause</p>
            </CardContent>
          </Card>
          <Card className="w-1/5">
            <CardContent className="flex flex-col justify-center items-center">
              <Image src={'/burger.jpg'} height={150} width={150} alt="food" />
              <p className="font-semibold text-gray-700 text-center">Tasty Burger with beef and cheese dipped with white sause</p>
            </CardContent>
          </Card>  
          <Card className="w-1/5">
            <CardContent className="flex flex-col justify-center items-center">
              <Image src={'/burger.jpg'} height={150} width={150} alt="food" />
              <p className="font-semibold text-gray-700 text-center">Tasty Burger with beef and cheese dipped with white sause</p>
            </CardContent>
          </Card>
          </div>
      {/* Contact Us */}
      <h1 className="flex justify-center m-10 text-3xl font-semibold text-gray-600 ">Contact Us</h1>
      
      <div className="justify-center items-center flex mb-20 w-full">
      
      {/* <AuroraBackground> */}
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex  gap-4 items-center justify-center px-4"
        >
        <ContactForm/>
        <div className="text-4xl  font-bold text-gray-700 w-96 dark:text-white text-center">
          Contact Us to clear your doubts!
        </div>
      </motion.div>
    {/* </AuroraBackground> */}
      </div>





    </div>
  );
}


