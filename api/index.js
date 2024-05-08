const authRoutes = require("./routes/authRoutes");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const app = express();

const cors = require("cors");

const port = 8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://monishthirukachi:Vidya1128@cluster0.ykmdktf.mongodb.net/medha"
  )
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to database");
  });


app.use("/api/v1/auth", authRoutes);

app.listen(port);
