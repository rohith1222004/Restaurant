'use client'
import Payment from "@/components/payment"
import Image from "next/image"
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
function payment() {
    return(
        // <h1></h1>
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
                </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
            </NavigationMenu>
            </div>
        </div>
        <Payment/>
        </div>

    )
}

export default payment