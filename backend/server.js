const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const postRoutes = require("./Routes/route.js");
// const app = express();
const path = require("path");

const port = 3500;
var app = express();

app.use(cors());

app.use(express.json());

app.use("/assets/image", express.static(path.join(__dirname, "assets/image")));

mongoose.connect("mongodb://localhost:27017/Filez");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use("/api", postRoutes);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
