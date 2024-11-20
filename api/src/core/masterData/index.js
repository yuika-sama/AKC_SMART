import express from "express"
import cors from "cors";
import mongoose from "mongoose";
import authRouters from "./routes/authRoute.js";
import dotenv from 'dotenv';
dotenv.config();

const tAuthAPP = () => {
  return new Promise((resolve, reject) => {
    const app = express();
    app.use(express.json());
    app.use(cors());

    app.use("/api/v1", authRouters);

    const mongoDBURL = process.env.MONGGODB_URL;

    mongoose
      .connect(mongoDBURL)
      .then(() => {
        console.log('App connected to database');
        resolve(app);
      })
      .catch((error) => {
        console.error('Error connecting to database:', error);
        reject(error);
      });
  });
};

export default tAuthAPP;