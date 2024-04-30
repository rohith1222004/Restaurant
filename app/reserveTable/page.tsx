'use client'
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
import Table from "@/components/Table"
  import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { CardContainer } from "@/components/ui/3d-card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import Link from "next/link"
  

function reserveTable() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      setIsOpen(false); // Reset state on component mount
    }, []);
  
    const handleOpenDialog = () => {
      setIsOpen(true);
    };
  
    const handleCloseDialog = () => {
      setIsOpen(false);
    };
    function handleContinueDialog(): void {
        router.push('/payment')
    }

return(
  <div className="h-full w-full  dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.05] relative items-center justify-around">
    <div className="flex items-center justify-between px-4 py-2 mb-6 ">
  {/* Left side: Logo and Restaurant Name */}
        <div className="flex items-center space-x-2  ml-5">
            <Link href="/"><Image src="/logo.gif" width={50} height={50} alt="logo" /></Link>
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
                    <NavigationMenuContent>
                    </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
                </NavigationMenu>
            </div>
    </div>
    <div className="flex justify-around">
    <Table/>
    <Card className="w-1/4  bg-slate-200 pt-5" style={{height:"83vh"}}>
        <CardContent className="flex m-2 mt-5">
            <div className="w-14 h-5 bg-orange-500 rounded-full mr-5"></div>
            <h1 className="font-semibold text-gray-600">Available Seats</h1>
        </CardContent>
        <CardContent className="flex m-2">
        <div className="w-14 h-5 bg-gray-400 rounded-full mr-5"></div>
            <h1 className="font-semibold text-gray-600">Not Available Seats</h1>
        </CardContent>
        <ScrollArea className="h-[400px] rounded-md border p-4">
        <CardContent>
            <h1  className="font-semibold text-gray-600">11:30am</h1>
            {/* card */}
            <div className="flex flex-col justify-center items-center">
            <div className="bg-white rounded-lg shadow-md p-4 w-64 mt-5">
                <div className="flex justify-between mb-2">
                    <h2 className="text-lg font-semibold">T1</h2>
                    <p className="text-gray-500">No. of People : 4</p>
                </div>
                <hr className="my-2 border-gray-300" />
                <p className="text-sm text-gray-500 font-semibold">Rohith Kumar</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 w-64 mt-5">
                <div className="flex justify-between mb-2">
                    <h2 className="text-lg font-semibold">T3</h2>
                    <p className="text-gray-500">No. of People : 4</p>
                </div>
                <hr className="my-2 border-gray-300" />
                <p className="text-sm text-gray-500 font-semibold">Vishal</p>
            </div>
            </div>
        </CardContent>
        <CardContent>
            <h1  className="font-semibold text-gray-600">12:30am</h1>
            {/* card */}
            <div className="flex flex-col justify-center items-center">
            <div className="bg-white rounded-lg shadow-md p-4 w-64 mt-5">
                <div className="flex justify-between mb-2">
                    <h2 className="text-lg font-semibold">T6</h2>
                    <p className="text-gray-500">No. of People : 4</p>
                </div>
                <hr className="my-2 border-gray-300" />
                <p className="text-sm text-gray-500 font-semibold">SasiDharan</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 w-64 mt-5">
                <div className="flex justify-between mb-2">
                    <h2 className="text-lg font-semibold">T5</h2>
                    <p className="text-gray-500">No. of People : 4</p>
                </div>
                <hr className="my-2 border-gray-300" />
                <p className="text-sm text-gray-500 font-semibold">Rohith Kumar</p>
            </div>
            </div>
        </CardContent>
        </ScrollArea>
        <div className="items-center justify-center flex mt-10">
        <Button onClick={handleOpenDialog}>Reserve</Button>

        <AlertDialog open={isOpen} >
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
                <div style={{marginTop:10}}><Label className="">Name</Label></div>
               <Input/>

               <div style={{marginTop:10}}><Label className="">Preferred Table</Label></div>
               <Input/>
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCloseDialog}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleContinueDialog}>Continue</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
            <Button  className="ml-5 bg-gray-400">Cancel</Button>
        </div>

    </Card>
    </div>
   </div>





)    
}
export default reserveTable;