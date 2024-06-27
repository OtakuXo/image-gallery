require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const cors = require("cors");
const connectDb = require("./db/db");
const authincateUser = require("./middleware/auth");

app.use(express.json());
app.use(cors());

const authRouter = require("./Routes/authRoute");
const imageRouter = require("./Routes/ImageRoute");
const userRouter = require("./Routes/userRoute");

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/image", imageRouter);
app.use("/api/v1/user", authincateUser, userRouter);

const port = 5000;

const start = async () => {
  try {
    await connectDb(process.env.MONGOURL);
    app.listen(port, () => {
      console.log(`server is running in port ${port}...`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
