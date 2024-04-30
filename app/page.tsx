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
            {/* <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink> */}
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
      
      <div className="flex justify-center items-center flex-col md:flex-row md:justify-evenly md:mb-8">
        {/* Carousel */}
        <Carousel
          className="w-full md:w-2/5 lg:w-1/3" // Adjust width based on screen size
          plugins={[Autoplay({ delay: 2000 })]}
        >
          <CarouselContent>
            <CarouselItem className="flex justify-center items-center">
              <Image src="/food_2.jpg" height={450} width={450} alt="food1" />
            </CarouselItem>
            <CarouselItem className="flex justify-center items-center">
              <Image src="/food.jpg" height={500} width={500} alt="food1" />
            </CarouselItem>
            <CarouselItem className="flex justify-center items-center">
              <Image src="/food_3.jpg" height={450} width={450} alt="food1" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Text3DCard */}
        <div className="md:ml-8">
          <Text3DCard />
        </div>
      </div>
   

      {/* why us */}
     
      <h1 className="flex justify-center m-10 text-3xl font-semibold text-gray-600 "> Why Us?</h1>
      <div className="flex justify-center items-center mt-8">
        <Card className="bg-gray-200 w-full md:w-4/5 lg:w-3/4 p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card Content 1 */}
            <div className="flex items-center">
              <Image src="/delivery.jpg" height={150} width={150} alt="delivery" className="rounded-lg" />
              <div className="ml-4">
                <h2 className="font-bold text-gray-700 text-lg md:text-xl">Fastest Delivery</h2>
                <p className="text-sm md:text-base text-gray-600">It is a long established fact that a reader will be distracted by the readable content.</p>
              </div>
            </div>

            {/* Card Content 2 */}
            <div className="flex items-center">
              <Image src="/delivery.jpg" height={150} width={150} alt="ingredients" className="rounded-lg" />
              <div className="ml-4">
                <h2 className="font-bold text-gray-700 text-lg md:text-xl">Quality Ingredients</h2>
                <p className="text-sm md:text-base text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>

            {/* Card Content 3 */}
            <div className="flex items-center">
              <Image src="/delivery.jpg" height={150} width={150} alt="service" className="rounded-lg" />
              <div className="ml-4">
                <h2 className="font-bold text-gray-700 text-lg md:text-xl">Excellent Service</h2>
                <p className="text-sm md:text-base text-gray-600">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Popular dishes */}
      <h1 className="flex justify-center m-10 text-3xl font-semibold text-gray-600 ">Popular Dishes</h1>
    

      {/* Cards Container - Flex with Wrap */}
      <div className="flex flex-wrap justify-evenly items-center mt-8">
        {/* Card 1 */}
        <Card className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <CardContent className="flex flex-col justify-center items-center">
            <Image src="/burger.jpg" height={150} width={150} alt="food" className="m-2" />
            <h1 className="font-semibold text-lg md:text-xl text-gray-800 text-center my-2">Tasty Burger with Beef</h1>
            <p className="text-sm md:text-base text-center">Tasty burger with beef and cheese dipped in white sauce.</p>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <CardContent className="flex flex-col justify-center items-center">
            <Image src="/pizza.jpg" height={150} width={150} alt="food" className="m-2" />
            <h1 className="font-semibold text-lg md:text-xl text-gray-800 text-center my-2">Cheese Pizza</h1>
            <p className="text-sm md:text-base text-center">Delicious pizza topped with cheese and fresh ingredients.</p>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <CardContent className="flex flex-col justify-center items-center">
            <Image src="/burger.jpg" height={150} width={150} alt="food" className="m-2" />
            <h1 className="font-semibold text-lg md:text-xl text-gray-800 text-center my-2">Classic Cheeseburger</h1>
            <p className="text-sm md:text-base text-center">Traditional cheeseburger with beef and melted cheese.</p>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-wrap justify-evenly items-center mt-8">
        {/* Card 1 */}
        <Card className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <CardContent className="flex flex-col justify-center items-center">
            <Image src="/burger.jpg" height={150} width={150} alt="food" className="m-2" />
            <h1 className="font-semibold text-lg md:text-xl text-gray-800 text-center my-2">Tasty Burger with Beef</h1>
            <p className="text-sm md:text-base text-center">Tasty burger with beef and cheese dipped in white sauce.</p>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <CardContent className="flex flex-col justify-center items-center">
            <Image src="/pizza.jpg" height={150} width={150} alt="food" className="m-2" />
            <h1 className="font-semibold text-lg md:text-xl text-gray-800 text-center my-2">Cheese Pizza</h1>
            <p className="text-sm md:text-base text-center">Delicious pizza topped with cheese and fresh ingredients.</p>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <CardContent className="flex flex-col justify-center items-center">
            <Image src="/burger.jpg" height={150} width={150} alt="food" className="m-2" />
            <h1 className="font-semibold text-lg md:text-xl text-gray-800 text-center my-2">Classic Cheeseburger</h1>
            <p className="text-sm md:text-base text-center">Traditional cheeseburger with beef and melted cheese.</p>
          </CardContent>
        </Card>
      </div>
      {/* Contact Us Section */}
      <h1 className="flex justify-center m-10 text-3xl font-semibold text-gray-600 ">Contact Us</h1>

      {/* Contact Form Section */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-8">
        {/* Contact Form (column layout on mobile) */}
        <div className="mb-4 md:mb-0"> {/* Margin bottom only on mobile */}
          <ContactForm />
        </div>

        {/* Text (row layout on larger screens) */}
        <div className="text-center md:text-left"> {/* Centered text on mobile, left-aligned on larger screens */}
          <div className="text-4xl font-bold text-gray-500 dark:text-white m-10 w-96">Contact us to clear your doubts!</div>
        </div>
      </div>


    </div>
  );
}

