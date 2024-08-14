import express, { json } from "express";
import cors from "cors";
import cookiesParser from "cookie-parser";
import router from "./login.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 8081;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true
  })
);

app.use(cookiesParser());

//both index.js and login.js should be in same directory
app.use("/", router);

//Start the Server
app.listen(PORT, () => console.log(`Server is running  at ${PORT}`));
