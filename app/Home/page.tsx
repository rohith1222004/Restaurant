// 'use client'
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { motion } from "framer-motion";
// import React from "react";
// import { AuroraBackground } from "@/components/ui/aurora-background";

//  function AuroraBackgroundDemo() {
//   return (
//     <AuroraBackground>
//       <motion.div
//         initial={{ opacity: 0.0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{
//           delay: 0.3,
//           duration: 0.8,
//           ease: "easeInOut",
//         }}
//         className="relative flex flex-col gap-4 items-center justify-center px-4"
//       >
//       <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl dark:bg-[#1f2937]">
//         <div className="space-y-4">
//           <div className="space-y-2">
//             <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sign in to your account</h2>
//             <p className="text-gray-500 dark:text-gray-400">
//               Enter your email and password below to access your account.
//             </p>
//           </div>
//           <form className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <Input id="email" placeholder="name@example.com" required type="email" />
//             </div>
//             <div className="space-y-2">
//               <div className="flex items-center justify-between">
//                 <Label htmlFor="password">Password</Label>
//                 <Link className="text-sm font-medium text-gray-600 hover:underline dark:text-gray-400" href="#">
//                   Forgot password?
//                 </Link>
//               </div>
//               <Input id="password" required type="password" />
//             </div>
//             <Link href="/"><Button
//               className="mt-8 w-full transform transition-all duration-300 hover:scale-[1.02] hover:bg-gray-900 dark:hover:bg-gray-700"
//               type="submit"
//             >
//               Sign in
//             </Button></Link>
//           </form>
//           {/* <div className="text-center text-sm text-gray-500 dark:text-gray-400">
//             Don't have an account?
//             <Link className="font-medium text-gray-600 hover:underline dark:text-gray-400" href="#">
//               Sign up
//             </Link>
//           </div> */}
//         </div>
//       </div>
//       </motion.div>
//     </AuroraBackground>
//   );
// }
// export default AuroraBackgroundDemo

'use client'

import { ModeToggle } from "@/components/toggle";
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
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay"
import { Text3DCard } from "@/components/Text3DCard";
import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Card, CardDescription, CardContent,CardFooter,CardHeader,CardTitle } from "@/components/ui/card";


export default function Home() {
  return (
  <div className="h-full w-full  dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.05] relative items-center justify-around">
      
 <div className="flex items-center justify-between px-4 py-2 ">
  {/* Left side: Logo and Restaurant Name */}
  <div className="flex items-center space-x-2 ml-5">
    <Link href="/Home"><Image src="/logo.gif" width={50} height={50} alt="logo" /></Link>
    {/* <h1 className="text-xl font-semibold te xt-gray-600">Restaurant Name</h1> */}
  </div>

  {/* Right side: Navigation Menu */}
  <div className="flex items-center space-x-4 mt-5 mr-5">
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
          <NavigationMenuTrigger>Contact Us</NavigationMenuTrigger>
          <Link href="/"><NavigationMenuTrigger>Logout</NavigationMenuTrigger></Link>
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

        <h1 className="flex justify-center m-10 text-4xl font-bold text-gray-600 " style={{color:"#FF6500"}}>We serve the real food!</h1>
      
        <div className="flex justify-center items-center flex-col md:flex-row md:justify-evenly md:mb-8">
          {/* Carousel */}
          <Carousel
            className="w-full md:w-2/5 lg:w-1/3" // Adjust width based on screen size
            plugins={[Autoplay({ delay: 1500 })]}
          >
            <CarouselContent>
              <CarouselItem className="flex justify-center items-center">
                <Image src="/food_2.jpg" height={400} width={400} alt="food1" />
              </CarouselItem>
              <CarouselItem className="flex justify-center items-center">
                <Image src="/food.jpg" height={450} width={450} alt="food1" />
              </CarouselItem>
              <CarouselItem className="flex justify-center items-center">
                <Image src="/food_3.jpg" height={400} width={400} alt="food1" />
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
     
      <h1 className="flex justify-center m-10 text-4xl font-bold text-gray-600 "style={{color:"#FF6500", marginTop:150}}> Why Us?</h1>
      <div className="flex justify-center items-center mt-8">
        <Card className="bg-gray-200 w-full md:w-4/5 lg:w-7/8 p-4 md:p-8">
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
      <h1 className="flex justify-center m-10 text-4xl font-bold text-gray-600 "style={{color:"#FF6500", marginTop:150}}>Popular Dishes</h1>
    

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
      <h1 className="flex justify-center m-10 mb-16 text-4xl font-bold text-gray-600 "style={{color:"#FF6500", marginTop:150}}>Contact Us</h1>

      {/* Contact Form Section */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-8">
        {/* Contact Form (column layout on mobile) */}
        <div className="mb-4 md:mb-0"> {/* Margin bottom only on mobile */}
          <ContactForm />
        </div>

        {/* Text (row layout on larger screens) */}
        <div className="text-center md:text-left"> {/* Centered text on mobile, left-aligned on larger screens */}
          <div className="text-3xl font-bold text-gray-700 dark:text-white ml-16 w-96">We are here to serve you!</div>
          <div className=" text-base font-normal text-gray-700 dark:text-white ml-16 mt-4 w-96">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, quisquam mollitia? Quos obcaecati a temporibus accusamus beatae sint voluptates ratione.</div>
        </div>
      </div>

    {/* Footer */}
    <section className="mt-20 w-full py-12  bg-zinc-900 dark:bg-zinc-100">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none text-white" >
          Stay Connected
        </h2>
        <p className="mx-auto max-w-[700px] text-zinc-100 md:text-lg dark:text-zinc-800 mt-3">
          Subscribe to our newsletter and follow us on our social media.
        </p>
        <div className="w-full max-w-md space-y-2 ">
          <form className="flex space-x-2  items-center justify-center mt-5 mb-5">
            <Input className="max-w-lg flex-1 text-zinc-900 bg-white" placeholder="Enter your email" type="email" />
            <Button className="text-white border-white" type="submit" variant="outline" style={{backgroundColor:"#FF6500"}}>
              Subscribe
            </Button>
          </form>
        </div>
        <div className="flex justify-center space-x-4">
          <Link aria-label="Facebook page" className="text-white" href="#">
            <FacebookIcon className="h-6 w-6" />
          </Link>
          <Link aria-label="Twitter profile" className="text-white" href="#">
            <TwitterIcon className="h-6 w-6" />
          </Link>
          <Link aria-label="Instagram profile" className="text-white" href="#">
            <InstagramIcon className="h-6 w-6" />
          </Link>
          <Link aria-label="LinkedIn profile" className="text-white" href="#">
            <LinkedinIcon className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </section>
    </div>
  );
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}