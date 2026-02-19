import express from "express";
import colors from "colors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./router/authrouter.js";



const app = express();

dotenv.config({ path: './config.env' });

app.use(express.json());
app.use(morgan("dev"));

connectDB();

app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("<h1>Welcome to ecommerce app</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`.bgCyan.white);
});
