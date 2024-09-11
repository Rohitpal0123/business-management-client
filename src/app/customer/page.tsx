"use client";
import { columns } from "./columns"; // This should be a function that returns the column definitions
import { DataTable } from "./dataTable";
import { useCustomerContext } from "@/utility/store/customerContext";

export default function Customer() {
  // Use the customer context to get data and functions
  const { customers, updateCustomer, deleteCustomer } = useCustomerContext();

  console.log("customerData", customers);
  return (
    <div className="container flex justify-center mx-auto py-10">
      <DataTable
        columns={columns({ updateCustomer, deleteCustomer })}
        data={customers}
      />
    </div>
  );
}