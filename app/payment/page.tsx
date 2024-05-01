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
  import Link from "next/link"
function payment() {
    return(
        // <h1></h1>
    <div className="h-full w-full  dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.05] relative items-center justify-around pb-16" style={{height:"100vh"}}>
        <div className="flex items-center justify-between px-4 py-2  ">
      {/* Left side: Logo and Restaurant Name */}
      <div className="flex items-center space-x-2 ml-5">
        <Link href="/Home"><Image src="/logo.gif" width={50} height={50} alt="logo" /></Link>
        <h1 className="text-xl font-semibold text-gray-500">Le Meridien</h1>
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