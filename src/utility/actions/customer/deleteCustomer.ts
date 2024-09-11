import { BASE_URL } from "../../constants" 

export const deleteCustomer = async (id: number) => {
  try {
    console.log("SECOND");
    const response = await fetch(`${BASE_URL}/customer/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("THIRD");
    if (!response.ok) {
      throw new Error("Failed to delete customer");
    }
    const data = await response.json();
    console.log("🚀 ~  THIRD deleteDATA:", data);
    return data;
  } catch (error) {
    console.log("🚀 ~ error:", error);
    return error;
  }
};
