"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link"; // Importing Link component
import { signup } from "@/utility/actions/authentication/signup";
import { redirect } from "next/navigation";
import { toast } from "sonner";
export default function Signup() {
  async function handleSignup(formData: FormData) {
    const body = {
      email: formData.get("email"),
      password: formData.get("password"),
      firstName: formData.get("first-name"),
      lastName: formData.get("last-name"),
    };
    const response: any = await signup(body);
    console.log("signup response::", response);
    if (response.data && response.data.token) {
      console.log("response successful");
      let token = response.data.token;
      console.log("token::", token);
      localStorage.setItem("token", token);
      toast.success("Signup Successful");
      redirect("/");
    } else {
      console.log("response", response);
      toast.error(response.error);
    }
  }

  return (
    <div>
      <form action={handleSignup} className="flex h-screen w-screen">
        {/* Left Side Image */}
        <div className="w-full h-full">
          <img
            src="/signup.svg"
            alt="Image"
            className="w-full h-full rounded-2xl"
          />
        </div>

        {/* Right Side Form */}
        <div className="flex h-full justify-center w-full items-center">
          <div className="flex flex-col  w-5/6 h-4/5 rounded-lg justify-center items-center">
            <div className="p-6 text-3xl self-start pl-[100px] font-bold text-[#101540]">
              Create an account
              <p className="text-sm font-light mt-1">
                Enter your details below to create your account
              </p>
            </div>

            <div className="w-4/6 space-y-3">
              <div className="flex space-x-4">
                <div className="w-full">
                  <Label
                    htmlFor="first-name"
                    className="text-base text-slate-800"
                  >
                    First Name
                  </Label>
                  <Input
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder="First Name"
                    className="w-full py-6 text-md"
                  />
                </div>
                <div className="w-full">
                  <Label
                    htmlFor="last-name"
                    className="text-base text-slate-800"
                  >
                    Last Name
                  </Label>
                  <Input
                    type="text"
                    name="last-name"
                    id="last-name"
                    placeholder="Last Name"
                    className="w-full py-6 text-md"
                  />
                </div>
              </div>

              <div className="w-full">
                <Label htmlFor="email" className="text-base text-slate-800">
                  Email
                </Label>
                <Input
                  type="email"
                  name="email"
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
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full py-6 text-md"
                />
              </div>
              <div className="w-full">
                <Label htmlFor="password" className="text-base text-slate-800">
                  Confirm Password
                </Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Confirm Password"
                  className="w-full py-6 text-md"
                />
              </div>
            </div>

            <div className="flex">
              <Button
                type="submit"
                className="mt-8 mb-6 w-[405px] h-12 text-xl font-extrabold bg-[#101540] hover:bg-[#262e7e]"
              >
                Sign up
              </Button>
            </div>

            <p className="text-sm font-light mt-1">
              Already have an account?
              <Link href="/login">
                <span className="text-blue-500 font-semibold hover:underline ml-1">
                  Log In
                </span>
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
