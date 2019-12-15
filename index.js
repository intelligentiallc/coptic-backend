const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const apiRoutes = require("./app/routers");
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 8080;
require("./database/config");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", apiRoutes);

app.get("/", (req, res) => res.send("Hello World with Express"));
app.listen(port, () => console.log("Running RestHub on port " + port));
