import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRoutes from "./route/book.route.js";
import userRoutes from "./route/user.route.js";

dotenv.config();

const app = express();

//required to read JSON body
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4001;
const URI = process.env.MongoDBURI;

// Proper MongoDB connection
mongoose.connect(URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("MongoDB error:", error));

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Routes
app.use("/book", bookRoutes);
app.use("/user",userRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
