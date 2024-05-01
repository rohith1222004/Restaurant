import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Component() {
  return (
    <div className="grid grid-cols-[3fr_3fr] h-screen">
      <div className="bg-[url('/restaurant_2.jpg')] bg-cover bg-center" />
      <div className="flex flex-col items-center justify-center px-8 sm:px-12 md:px-16">
        {/* <Card className="w-full max-w-md space-y-6 p-8"> */}
        <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4  w-full"
          >
            <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl dark:bg-[#1f2937]">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex flex-col items-center justify-center">
                    <Image src={'/logo.gif'} width={50} height={50} alt="logo" />
                    <h2 className="text-2xl font-bold tracking-tight text-gray-700 dark:text-white">le meridien</h2>
                  </div>
                  <div className="h-0.5 w-full bg-slate-300 "></div>
                  <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white ">Sign in to your account</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Enter your email and password below to access your account.
                  </p>
                </div>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="name@example.com" required type="email" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link href="#" className="text-sm font-medium text-gray-600 hover:underline dark:text-gray-400">
                        Forgot password?
                      </Link>
                    </div>
                    <Input id="password" required type="password" />
                  </div>
                  <Button
                    className="w-full transform transition-all duration-300 hover:scale-[1.02] hover:bg-gray-900 dark:hover:bg-gray-700"
                    type="submit"
                  >
                    Sign in
                  </Button>
                </form>
                <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Don't have an account?
                  <Link href="#" className="font-medium text-gray-600 hover:underline dark:text-gray-400">
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        {/* </Card> */}
      </div>
    </div>
  )
}