export const signup = async (payoload: any) => {
  try {
    const response = await fetch(
      "https://business-management-server-il50.onrender.com/user/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payoload),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("🚀 ~ error:", error);
    console.log("error occured");
    return error;
  }
};
