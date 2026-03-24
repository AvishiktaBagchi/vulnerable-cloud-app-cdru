const express = require("express");
const router = express.Router();
const { findUser } = require("../db");

router.post("/login", (req, res) => {
    const { username, password } = req.body;

    findUser(username, password, (err, user) => {
        if (user) {
            res.json({ message: "Login successful", token: "insecure-token" });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    });
});

module.exports = router;