const mongoose = require("mongoose");
require("dotenv").config();

module.exports.dbConnection = () => {
  mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useNewUrlParser: true,
  });

  const db = mongoose.connection;

  db.on("error", () => {
    console.log("Problem occured while establishing mongodb connection");
  });

  db.on("open", () => {
    console.log("MongoDb connnection established successfully");
  });
};
