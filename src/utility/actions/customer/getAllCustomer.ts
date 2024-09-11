import { BASE_URL } from "../../constants" 

export async function getAllCustomer() {
  try {
    console.log("fetching customers...");
    const response = await fetch(`${BASE_URL}/customer`, {
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
