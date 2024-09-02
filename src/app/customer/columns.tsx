"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { MoreHorizontal } from "lucide-react";
import { HiOutlineUserAdd } from "react-icons/hi";

import { RiDeleteBinLine } from "react-icons/ri";
import { GoPencil } from "react-icons/go";

import { deleteCustomer } from "@/utility/actions/customer/deleteCustomer";

import { toast } from "sonner";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
} from "@/components/ui/alert-dialog";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Checkbox } from "@/components/ui/checkbox";

import { updateCustomer } from "@/utility/actions/customer/updateCustomer";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type CustomerData = {
  id: number;
  name: string;
  address: string;
  contactNumber: string;
  quantity: number;
  agreedRate: number;
  isSpecialOrder: boolean;
};

interface ColumnProps {
  refreshData: () => void; // Refresh data function passed from page.tsx
}

const handleDelete = async (
  customer: CustomerData,
  refreshData: () => void
) => {
  console.log("first");
  const response: any = await deleteCustomer(customer.id);
  console.log("FOURTH");
  console.log(response.message);
  if (response.message) {
    console.log("FIFTH");
    toast.success("Customer Deleted, please refresh the page");
    refreshData(); // Trigger data refresh after deletion
  } else {
    console.log("SIXTH");
  }
};

const handleUpdate = async (
  formData: FormData,
  refreshData: () => void,
  customer: CustomerData
) => {
  console.log("first");
  console.log(formData);
  const body = {
    name: formData.get("name"),
    address: formData.get("address"),
    contactNumber: formData.get("contactNumber"),
    quantity: formData.get("quantity"),
    agreedRate: formData.get("agreedRate"),
    isSpecialOrder: formData.get("isSpecialOrder"),
  };

  const id = customer.id;

  const response: any = await updateCustomer(body, id);

  console.log("create customer response::", response);
  console.log(response.error);

  if (response.data) {
    console.log("🚀 ~ response.data:", response.message);
    console.log("response successful");
    toast.success("Customer updated successfully!");
    refreshData();
  } else {
    console.log("response", response);
    toast.error(response.error);
  }
};

export const columns = ({
  refreshData,
}: ColumnProps): ColumnDef<CustomerData>[] => [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="pl-0"
        >
          Id
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="pl-0"
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "contactNumber",
    header: "Contact Number",
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="pl-0"
        >
          Quantity
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "agreedRate",
    header: () => <div className="text-right">Agreed Rate</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("agreedRate"));
      const formatted = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const customer = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="w-full flex items-center">
                    <GoPencil className="text-base mr-2 border-1 border-white" />
                    Edit
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[507px]">
                  <DialogHeader>
                    <DialogTitle>Edit Customer</DialogTitle>
                    <DialogDescription>
                      Enter customer details carefully as all delivery and
                      transaction will be based on the given details.
                    </DialogDescription>
                  </DialogHeader>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.currentTarget);
                      handleUpdate(formData, refreshData, customer);
                    }}
                  >
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input
                          type="text"
                          name="name"
                          placeholder="name"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                          Address
                        </Label>
                        <Input
                          type="text"
                          name="address"
                          placeholder="address"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="contactNumber" className="text-right">
                          Contact No.
                        </Label>
                        <Input
                          type="number"
                          name="contactNumber"
                          placeholder="contactNumber"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="quantity" className="text-right">
                          Quantity
                        </Label>
                        <Input
                          type="number"
                          name="quantity"
                          placeholder="quantity"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="rate" className="text-right">
                          Rate
                        </Label>
                        <Input
                          type="number"
                          name="agreedRate"
                          placeholder="agreedRate"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="isSpecialOrder" className="text-right">
                          Special Order ?
                        </Label>
                        <Select name="isSpecialOrder" defaultValue="false">
                          <SelectTrigger className="w-[100px]">
                            <SelectValue placeholder="No" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="true">Yes</SelectItem>
                              <SelectItem value="false">No</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit" className="px-10 py-5 text-base">
                        Save Changes
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button className="w-full flex items-center text-red-500">
                    <RiDeleteBinLine className="text-base mr-2 border-1 border-white" />
                    Delete
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This will permanently delete your customer data and remove
                      it from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => handleDelete(customer, refreshData)}
                      className="hover:text-white border-[#e2e8f0] hover:bg-red-500"
                    >
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
