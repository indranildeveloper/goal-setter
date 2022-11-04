import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import connectDB from "./config/db";
import { errorHandler } from "./middleware/errorMiddleware";
import goalRoutes from "./routes/goalRoutes";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const app = express();

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.PORT || 5000;

app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running at port: ${port}`));
