const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const connect = require("./DB/connection");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
connect();

// import all routes
const products = require("./routes/product");
app.use("/api/v1", products);

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});
