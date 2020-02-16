const router = require("express").Router();
const CreateUserRoutes = require("./userRoutes");
const CreateListRoutes = require("./listRoutes ");
const CreateItemRoutes = require("./itemRoutes");

let allRoutes= CreateUserRoutes(router)
allRoutes = CreateListRoutes(allRoutes)
allRoutes = CreateItemRoutes(allRoutes)


module.exports = allRoutes;
