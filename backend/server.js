const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const router = require("./router/routes");
const connectDB = require("./dbconn/db");
const { notFound, errorHandler } = require("./middlewares/ErrorMiddleware");
const PORT = process.env.PORT || 5000;

const app = express();

dotenv.config();
connectDB();

app.use(
  cors({
    credentials: true,
  })
);
app.use(express.json());
app.use(router);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`server is running at ${PORT}`));
