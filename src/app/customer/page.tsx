"use client";
import { useCallback } from "react";
import { useState, useEffect } from "react";
import { CustomerData, columns } from "./columns";
import { DataTable } from "./dataTable";

import { getAllCustomer } from "@/utility/actions/customer/getAllCustomer";

export default function Customer() {
  console.log("first");

  const [data, setData] = useState<CustomerData[]>([]);

  const fetchData = useCallback(async () => {
    const customerData = await getAllCustomer();
    console.log("🚀 ~ customerData:", customerData)
    setData(customerData);

  }, []);

  useEffect(() => {
    fetchData();
  },[fetchData]); 
  return (
    <div className="container flex justify-center mx-auto py-10">
      <DataTable columns={columns({ refreshData: fetchData })} data={data} refreshData={fetchData} />
    </div>
  );
}
