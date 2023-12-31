const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

const studentsRouter = require("./routes/students");
const teachersRouter = require("./routes/teachers");
const port = process.env.PORT || 4000;

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});
try {
  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
  });
} catch (error) {
  console.log("errrorrrr");
}
app.use(cors());
app.use(express.json());
app.use("/students", studentsRouter);
app.use("/teachers", teachersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
