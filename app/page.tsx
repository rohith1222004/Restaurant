'use client'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";

 function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl dark:bg-[#1f2937]">
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sign in to your account</h2>
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
                <Link className="text-sm font-medium text-gray-600 hover:underline dark:text-gray-400" href="#">
                  Forgot password?
                </Link>
              </div>
              <Input id="password" required type="password" />
            </div>
            <Link href="/Home"><Button
              className="mt-8 w-full transform transition-all duration-300 hover:scale-[1.02] hover:bg-gray-900 dark:hover:bg-gray-700"
              type="submit"
            >
              Sign in
            </Button></Link>
          </form>
          {/* <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            Don't have an account?
            <Link className="font-medium text-gray-600 hover:underline dark:text-gray-400" href="#">
              Sign up
            </Link>
          </div> */}
        </div>
      </div>
      </motion.div>
    </AuroraBackground>
  );
}
export default AuroraBackgroundDemo