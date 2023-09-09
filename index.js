import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const { PORT } = process.env;

app.get("/", (_req, res) => res.send("CI / CD project"));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
