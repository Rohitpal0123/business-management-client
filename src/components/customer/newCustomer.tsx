"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function NewCustomer() {
  return (
    <form>
      <div className="flex flex-col  w-[400px] h-4/5 rounded-lg  items-start">
        <div className="w-full space-y-3">
          <div className=" w-full">
            <Label htmlFor="name" className="text-base text-slate-800">
              Name
            </Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="w-full py-6 pl-4 text-base"
            />
          </div>
          <div className="w-full">
            <Label htmlFor="address" className="text-base text-slate-800">
              Address
            </Label>
            <Input
              type="text"
              name="address"
              id="address"
              placeholder="Address"
              className="w-full py-6 text-md"
            />
          </div>
          <div className="w-full">
            <Label htmlFor="contactNumber" className="text-base text-slate-800">
              Contact Number
            </Label>
            <Input
              type="number"
              name="contactNumber"
              id="contactNumber"
              placeholder="Contact Number"
              className="w-full py-6 text-md"
            />
          </div>
          <div className="w-full">
            <Label htmlFor="quantity" className="text-base text-slate-800">
              Quantity
            </Label>
            <Input
              type="number"
              id="quantity"
              placeholder="Quantity"
              className="w-full py-6 text-md"
            />
          </div>
          <div className="w-full">
            <Label htmlFor="agreedRate" className="text-base text-slate-800">
              Agreed Rate
            </Label>
            <Input
              type="number"
              id="agreedRate"
              placeholder="Agreed Rate"
              className="w-full py-6 text-md"
            />
          </div>
          <RadioGroup defaultValue="false">
            <Label className="itali">Is this a special order ?</Label>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="true" id="r1" />
              <Label htmlFor="r1">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="false" id="r2" />
              <Label htmlFor="r2">No</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </form>
  );
}


{
  // <Tabs defaultValue="add" className="w-[700px] mt-5">
  //       <TabsList className="grid w-full grid-cols-3 h-16">
  //         <TabsTrigger value="get" className="p-[13px] text-base">
  //           Show All Customers
  //         </TabsTrigger>
  //         <TabsTrigger value="add" className="p-[13px] text-base">
  //           Create New Customer
  //         </TabsTrigger>
  //         <TabsTrigger value="update" className="p-[13px] text-base">
  //           Update Existing Customer
  //         </TabsTrigger>
  //       </TabsList>
  //       <TabsContent value="get">
  //         <Card>
  //           <CardHeader>
  //             <CardTitle>Get Customers</CardTitle>
  //             <CardDescription>
  //               Change your password here. After saving, you'll be logged out.
  //             </CardDescription>
  //           </CardHeader>
  //           <CardContent className="space-y-2"></CardContent>
  //           <CardFooter>
  //             <Button className="bg-[#101540] hover:bg-[#262e7e]">
  //               Save password
  //             </Button>
  //           </CardFooter>
  //         </Card>
  //       </TabsContent>
  //       <TabsContent value="add">
  //         <Card>
  //           <CardHeader>
  //             <CardTitle>Create New Customer</CardTitle>
  //             <CardDescription>
  //               Enter customer detail to create a new customer. Click{" "}
  //               <span className="text-black font-semibold">Add</span> when
  //               you&apos;e done.
  //             </CardDescription>
  //           </CardHeader>
  //           <CardContent>
  //             <NewCustomer /> {/* <NewCustomer /> */}
  //           </CardContent>
  //           <CardFooter>
  //             <Button className="text-xl px-9 py-6 rounded-lg bg-[#101540] hover:bg-[#262e7e]">
  //               Add Customer
  //             </Button>
  //           </CardFooter>
  //         </Card>
  //       </TabsContent>
  //       <TabsContent value="update">
  //         <Card>
  //           <CardHeader>
  //             <CardTitle>Update Customer Info</CardTitle>
  //             <CardDescription>
  //               Change your password here. After saving, you'll be logged out.
  //             </CardDescription>
  //           </CardHeader>
  //           <CardContent className="space-y-2"></CardContent>
  //           <CardFooter>
  //             <Button className="bg-[#101540] hover:bg-[#262e7e]">
  //               Update
  //             </Button>
  //           </CardFooter>
  //         </Card>
  //       </TabsContent>
  //     </Tabs>
}