const mongoose = require("mongoose");
if (process.env.NODE_ENV === "development") {
  mongoose.connect("mongodb://localhost/coptic", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
} else {
  mongoose.connect(
    "mongodb+srv://mina:123@coptic-snvzk.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
}
const db = mongoose.connection;
if (!db) console.log("Error connecting db");
else console.log("Db connected successfully");
