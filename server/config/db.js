import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    // console.log(conn.connections[0].host);
    console.log(
      `MongoDB connected: ${conn.connections[0].host}`.cyan.underline
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
