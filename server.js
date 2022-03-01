// console.log('Hello world');
const express = require("express");
const app = express();
const { APP_PORT, URL } = require("./config");
const connectDb = require("./db");
const router = require("./routes");

app.get("/hello", (req, res) => {
  res.send("Welocme to home page");
});

app.use(express.json());
app.use('/api/v1/task',router)
// YR:CONNECT DB
const start = async () => {
  try {
    await connectDb(URL);
    app.listen(APP_PORT, () => {
      console.log("server intalised", APP_PORT);
    });
  } catch (error) {
    console.log("Error", error);
  }
};
start();
