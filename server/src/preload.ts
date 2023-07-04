import dotenv from "dotenv";

export default function preload() {
  dotenv.config();
  if (!process.env.SERVER_PORT) {
    throw new Error("'SERVER_PORT' env not found!");
  }

  const port = Number(process.env.SERVER_PORT);

  return {
    port,
  };
}
