const express = require("express");
const { Users } = require("../../mongo/models/users");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { firstname, lastname, password, username } = req.body;

  const user = await Users.findOne({ username });

  if (user) {
    res.json({
      success: false,
      message: "User already registered",
      data: {},
    });
  }

  const newUser = new Users({
    firstname,
    lastname,
    password,
    username,
  });
  await newUser.save();

  return res.json({
    success: true,
    message: "User registered successfully",
    data: newUser,
  });
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  if (!username && !password) {
    return res.json({
      success: false,
      message: "Please provide username and password!",
      body: {},
    });
  }

  const user = await Users.findOne({ username, password });

  if (user?.username) {
    return res.json({
      success: true,
      message: "Login successfully",
      body: user,
    });
  } else {
    return res.json({
      success: false,
      message: "User not found!",
      body: {},
    });
  }
});

module.exports = router;
