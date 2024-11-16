import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json()); //allow us to accept json data in req.body

app.use("/api/products", productRoutes);

//   res.send("Server is Ready !!");

// console.log(process.env.MONGO_URI);

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});

//
