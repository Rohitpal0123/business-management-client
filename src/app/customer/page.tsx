import { CustomerData, columns } from "./columns";
import { DataTable } from "./dataTable";

import { getAllCustomer } from "@/utility/actions/customer/getAllCustomer";

async function getCustomerData(): Promise<CustomerData[]> {
  const customerData = await getAllCustomer();
  console.log("🚀 ~ customerData:", customerData)
  return customerData;
}

export default async function Customer() {
  console.log("first")
  const data = await getCustomerData();
  return (
    <div className="container flex justify-center mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
