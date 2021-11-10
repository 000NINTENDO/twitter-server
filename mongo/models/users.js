const { Schema, model } = require("mongoose");

const UsersSchema = new Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    username: String,
  },
  { timestamps: true }
);

const Users = model("users", UsersSchema);

exports.Users = Users;
