import { revalidatePath } from "next/cache";

export async function getAllCustomer() {
  try {
    console.log("fetching customers...");
    const response = await fetch("https://business-management-server-il50.onrender.com/customer", {
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
