const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const teamRoutes = require("./routes/teams");

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("tiny"));
app.use("/", teamRoutes);
module.exports = app;
