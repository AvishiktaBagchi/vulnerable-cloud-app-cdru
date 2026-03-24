const express = require("express");
const router = express.Router();
const { findUser } = require("../../db");

// LOGIN 
router.post("/login", (req, res) => {
    const { username, password } = req.body;

    const user = findUser(username, password);

    if (user) {
        res.json({
            success: true,
            message: "Login successful",
            user
        });
    } else {
        res.status(401).json({
            success: false,
            message: "Invalid credentials"
        });
    }
});

router.get("/login-test", (req, res) => {
    res.send(`
        <h2>Login Test Page</h2>
        <p>Use POST /auth/login via Postman or curl</p>
    `);
});

module.exports = router;