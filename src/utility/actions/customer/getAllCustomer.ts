export async function getAllCustomer() {
  try {
    console.log("getting all customers...")
    
    const response = await fetch("http://localhost:7345/customer", {
      method: "GET",
    });
    const data = await response.json();
    console.log("data", data);
    return data
  } catch (error) {
    return []
  }
}
