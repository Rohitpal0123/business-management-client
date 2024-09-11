import dotenv from "dotenv";
dotenv.config();
const LOCALHOST_URL = process.env.NEXT_PUBLIC_LOCALHOST_URL;
console.log("🚀 ~ LOCALHOST_URL:", LOCALHOST_URL)
const DEV_URL = process.env.NEXT_PUBLIC_DEV_URL;
console.log("🚀 ~ DEV_URL:", DEV_URL)

const BASE_URL =
  process.env.NEXT_PUBLIC_NODE_ENV === "development" ? LOCALHOST_URL : DEV_URL;

export { LOCALHOST_URL, DEV_URL, BASE_URL };

