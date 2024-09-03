export const updateCustomer = async (payload: any, id: number) => {
    try {
      // Filter out any empty values from the payload
      const filteredPayload = Object.fromEntries(
        Object.entries(payload).filter(([key, value]) => value !== "")
      );
  
      console.log("Filtered Payload to be sent:", filteredPayload);
      console.log("Updating customer...");
  
      const response = await fetch(`https://business-management-server-il50.onrender.com/customer/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filteredPayload),
      });
  
      console.log("API response:", response);
  
      // Handle non-OK responses
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Failed to update customer: ${errorData.message || response.statusText}`
        );
      }
  
      const data = await response.json();
      console.log("🚀 ~ Updated customer data:", data);
      return { success: true, data }; // Return success with data
    } catch (error: any) {
      console.error("🚀 ~ Error updating customer:", error.message);
      return { success: false, error: error.message }; // Return failure with error message
    }
  };
  