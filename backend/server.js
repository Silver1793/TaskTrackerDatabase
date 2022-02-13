const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const exerciseRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

require("dotenv").config();

const app = express();

const port = process.env.PORT || 6001;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use(cors());
app.use(express.json());
app.use("/exercises", exerciseRouter);
app.use("/users", usersRouter);

app.listen({ port }, () => {
  console.log(`Server is running on ${port}`);
});
