import express from "express";
import dotenv from "dotenv";

import { errorHandler } from "./middleware/errorMiddleware";
import goalRoutes from "./routes/goalRoutes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;

app.use("/api/goals", goalRoutes);
app.use(errorHandler);

app.listen(port, (req, res) => console.log(`Server running at port: ${port}`));
