"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Separator } from "@/components/ui/separator";
import { SlChart } from "react-icons/sl";
import { LuUsers2 } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { VscHistory } from "react-icons/vsc";
import { HiOutlineHome } from "react-icons/hi2";
import { IoReceiptOutline } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";

import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  const handleCustomer = () => {
    console.log("first");
    router.push("/customer");
  };

  const handleHome = () => {
    console.log("first");
    router.push("/");
  };
  return (
    <div className="flex justify-between my-3 px-3">
      <div className="grid grid-cols-1 gap-2 ">
        <Sheet>
          <SheetTrigger
            className="data-[state=closed]:duration-100 data-[state=open]:duration-100"
            asChild
          >
            <AiOutlineMenu className=" text-3xl hover:bg-slate-100" />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader className="mt-4">
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <Separator orientation="horizontal" />
            <div className="flex flex-col pl-4 font-medium text-xl mt-5 items-start">
              <SheetClose asChild>
                <button
                  onClick={handleHome}
                  className=" flex rounded-lg py-4 pl-2 w-full hover:bg-[#101540] hover:text-white hover:text-[24px] hover:pl-4"
                >
                  <HiOutlineHome className=" h-6 w-6" />
                  <div className="ml-2">Home</div>
                </button>
              </SheetClose>

              <SheetClose asChild>
                <button className=" flex rounded-lg py-4 pl-2 w-full hover:bg-[#101540] hover:text-white hover:text-[24px] hover:pl-4">
                  <SlChart className=" h-6 w-6" />
                  <div className="ml-2">Dashboard</div>
                </button>
              </SheetClose>

              <SheetClose asChild>
                <button
                  onClick={handleCustomer}
                  className=" flex items-center rounded-lg py-4 pl-2 w-full hover:bg-[#101540] hover:text-white hover:text-[24px] hover:pl-4 "
                >
                  <LuUsers2 className="h-6 w-6" />
                  <div className="ml-2">Customers</div>
                </button>
              </SheetClose>

              <SheetClose asChild>
                <button className=" flex rounded-lg items-center py-4 pl-2 w-full hover:bg-[#101540] hover:text-white hover:text-[24px] hover:pl-4 ">
                  <TbTruckDelivery className=" h-6 w-6" />
                  <div className="ml-2">Delivery</div>
                </button>
              </SheetClose>

              <Separator orientation="horizontal" className="my-2" />

              <SheetClose asChild>
                <button className=" flex items-center rounded-lg py-4 pl-2 w-full hover:bg-[#101540] hover:text-white hover:text-[24px] hover:pl-4 ">
                  <IoReceiptOutline className="mt-[3px] h-6 w-6" />
                  <div className="ml-2">Billing</div>
                </button>
              </SheetClose>

              <SheetClose asChild>
                <button className=" flex items-center rounded-lg py-4 pl-2 w-full hover:bg-[#101540] hover:text-white hover:text-[24px] hover:pl-4 ">
                  <MdPayment className=" h-6 w-6" />
                  <div className="ml-2">Payments</div>
                </button>
              </SheetClose>

              <SheetClose asChild>
                <button className=" flex items-center rounded-lg py-4 pl-2 w-full hover:bg-[#101540] hover:text-white hover:text-[24px] hover:pl-4 ">
                  <VscHistory className=" h-6 w-6 font-thin" />
                  <div className="ml-2">Transaction History</div>
                </button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
