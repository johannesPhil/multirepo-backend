const express = require("express");
const router = express.Router();
const userModel = require("../models/user");

router.post("/", async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const user = await userModel.createUser(userName, email, password);
    res.status(201).json({ ...user });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: error });
  }
});

router.get("/", async (req, res) => {
  const users = await userModel.getAllUsers();

  return res.status(200).json(users);
});

module.exports = router;
