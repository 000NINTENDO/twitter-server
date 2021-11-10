const mongoose = require("mongoose");

module.exports.dbConnection = () => {
  mongoose.connect(
    "mongodb+srv://twitter-server:twitter-server@twitter-server.65zrx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  );

  const db = mongoose.connection;

  db.on("error", () => {
    console.log("Problem occured while establishing mongodb connection");
  });

  db.on("open", () => {
    console.log("MongoDb connnection established successfully");
  });
};
