const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, (req, res) => {
    res.json({ secretData: "This is sensitive data!" });
});

module.exports = router;