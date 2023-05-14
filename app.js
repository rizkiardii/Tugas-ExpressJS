require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router");

app.use("/", router);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(process.env.PORT);
console.log(`Server started at http://localhost:${process.env.PORT}`);
