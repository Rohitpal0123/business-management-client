import { revalidatePath } from "next/cache";

export async function getAllCustomer() {
  try {
    console.log("fetching customers...");
    const response = await fetch("http://localhost:7345/customer", {
      method: "GET",
    });
    console.log("response", response);

    const data = await response.json();
    console.log("🚀 ~ data:", data)

    return data;
  } catch (error) {
    return [];
  }
}
