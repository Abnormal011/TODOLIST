import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Task } from "./models/taskModel.js";
import taskRoute from "./routes/taskRoute.js";
import cors from 'cors';


const app = express();
app.use(cors());

// Middleware for parsing json
app.use(express.json());
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET','POST','PUT','DELETE'],
//         allowedHeaders: ['Content-Type']
//     })
// )

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("welcome to mern stack tutorial");
});

app.use('/tasks',taskRoute)

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log("App is listing to PORT: ${PORT}");
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });
