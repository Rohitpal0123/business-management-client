
export const signup = async (payoload: any) => {
  try {
    const response = await fetch("http://localhost:7345/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payoload),
    });
    const data = await response.json();
    return data
  } catch (error) {
    console.log("🚀 ~ error:", error);
    console.log("error occured");
    return error
  }
};
