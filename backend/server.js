const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const router = require('./router/routes');
const connectDB = require("./dbconn/db");
const PORT = process.env.PORT || 5000;

const app = express();
dotenv.config();

connectDB();

app.use(cors(), router);

app.listen(PORT, console.log(`server is running at ${PORT}`));
