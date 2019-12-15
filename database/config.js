const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/coptic", { useNewUrlParser: true , useUnifiedTopology: true });
const db = mongoose.connection;
if (!db) console.log("Error connecting db");
else console.log("Db connected successfully");