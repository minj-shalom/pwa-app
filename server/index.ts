import cors from "cors";
import express from "express";
import preload from "./src/preload";
import webpush from "web-push";
import SubscribeRouter from "./src/subscribe/subscribe.router";

const app = express();
const { port, email } = preload();

const webpushKeys = {
  publicKey:
    "BKs77j4GvBobTHxZJqbN55eXoCF6wJNnN9_C-r4-WO7bM9RXwct9c8XmYKdMGBp9poI7oY7JcgBDseX7_3Dy50k",
  privateKey: "lS0_AYMza_bdxbxP0OExNdv5DQOJMTfi-DDcqcz0df0",
};

webpush.setVapidDetails(
  `mailto:${email}`,
  webpushKeys.publicKey,
  webpushKeys.privateKey
);

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173", "https://pwa.minj-shalom.dev"],
    methods: "GET, POST, PATCH, PUT, DELETE",
  })
);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api/subscribe", SubscribeRouter);
app.listen(port, () => {
  console.log(`Express app has been open for port ${port}!`);
});
