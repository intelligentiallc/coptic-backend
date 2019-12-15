const router = require("express").Router();
const CreateUserRoutes = require("./userRoutes");
const CreateListRoutes = require("./listRoutes ");

let allRoutes= CreateUserRoutes(router)
allRoutes = CreateListRoutes(allRoutes)




module.exports = allRoutes;
