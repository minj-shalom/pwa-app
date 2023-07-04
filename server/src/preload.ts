import dotenv from "dotenv";

export default function preload() {
  dotenv.config();
  if (!process.env.SERVER_PORT) {
    throw new Error("'SERVER_PORT' env not found!");
  }
  if (!process.env.ADMIN_EMAIL) {
    throw new Error("'ADMIN_EMAIL' env not found!");
  }

  const port = Number(process.env.SERVER_PORT);
  const email = String(process.env.ADMIN_EMAIL);

  return {
    port,
    email,
  };
}
