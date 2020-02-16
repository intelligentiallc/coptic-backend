const express = require("express");
const bodyParser = require("body-parser");
const formData = require('express-form-data');
const cors = require('cors')
const apiRoutes = require("./app/routers");
const dotenv = require('dotenv');
const fileUpload = require('express-fileupload');
dotenv.config();
const app = express();
const port = process.env.PORT || 8080;
require("./database/config");
app.use(fileUpload({
    createParentPath: true,
}));

app.use(cors({
    origin: process.env.CLIENT_ORIGIN
}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", apiRoutes);

app.get("/", (req, res) => res.send("Hello World with Express"));
app.listen(port, () => console.log("Running RestHub on port " + port));
