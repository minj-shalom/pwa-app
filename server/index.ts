import cors from "cors";
import express from "express";
import preload from "./src/preload";

const app = express();
const { port } = preload();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
    methods: "GET, POST, PATCH, PUT, DELETE",
  })
);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.listen(port, () => {
  console.log(`Express app has been open for port ${port}!`);
});
