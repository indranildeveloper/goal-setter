import express from "express";
import path from "path";
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

// Serve Frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", (req, res) =>
    res.sendfile(
      path.resolve(__dirname, "../", "client", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production!"));
}

app.use(errorHandler);

app.listen(port, () => console.log(`Server running at port: ${port}`));
