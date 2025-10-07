import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import researchRoutes from "./routes/researchRoutes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../src/views")));

app.use("/api", researchRoutes);

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "../src/views", "index.html"));
});

export default app;
