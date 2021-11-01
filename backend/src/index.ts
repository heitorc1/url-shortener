import express from "express";
import dotenv from "dotenv";
import path from "path";

import { MongoConnection } from "./database/MongoConnection";

import { router } from "./routes";

import cors from "cors";

dotenv.config({
  path: path.join(__dirname, "..", "..", ".env"),
});

const api = express();
api.use(express.json());
api.use(cors());

const database = new MongoConnection();
database.connect();

api.use(router);

api.listen(process.env.API_PORT, () => {
  console.log(
    `Server is runnig on ${process.env.API_URL}:${process.env.API_PORT}`
  );
});
