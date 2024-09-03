
export const createCustomer = async (payload: any) => {
  try {
    console.log(payload);
    console.log("creating customer...");
    const response = await fetch("https://business-management-server-il50.onrender.com/customer/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    console.log("responseAPI", response);
    if (!response.ok) {
      throw new Error("Failed to create customer");
    }

    const data = await response.json();
    console.log("🚀 ~ data:", data)
    return data;
  } catch (error) {
    console.log("🚀 ~ error:", error);
    return error;
  }
};
