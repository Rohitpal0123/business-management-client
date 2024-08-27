"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link"; // Importing Link component

export default function Signup() {
  return (
    <div className="flex h-screen w-screen">
      {/* Left Side Image */}
      <div className="w-1/2 h-full">
        <img
          src="/signup.svg"
          alt="Image"
          className=" w-full h-full"
        />
      </div>

      {/* Right Side Form */}
      <div className="flex h-full justify-center w-1/2 items-center">
        <div className="flex flex-col  w-5/6 h-4/5 rounded-lg justify-center items-center">
          <div className="p-6 text-3xl self-start pl-[100px] font-bold text-[#101540]">
            Welcome Back !
            <p className="text-sm font-light mt-1">
              Enter your credentials below
            </p>
          </div>

          <div className="w-4/6 space-y-3">
            <div className="w-full">
              <Label htmlFor="email" className="text-base text-slate-800">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full py-6 text-md"
              />
            </div>
            <div className="w-full">
              <Label htmlFor="password" className="text-base text-slate-800">
                Password
              </Label>
              <Input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full py-6 text-md"
              />
            </div>
          </div>

          <div className="flex">
            <Button className="mt-8 mb-6 w-[405px] h-12 text-xl font-extrabold hover:bg-[#262e7e] bg-[#101540]">
              Log In
            </Button>
          </div>

          <p className="text-sm font-light mt-1">
            Don't have an account?
            <Link href="/signup">
              <span className="text-blue-500 font-semibold hover:underline ml-1">
                Sign Up
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
