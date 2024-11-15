import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.error(`Error:${error.message}`);
    process.exit(1); //1 means exit with fail, 0 mens success
  }
};
