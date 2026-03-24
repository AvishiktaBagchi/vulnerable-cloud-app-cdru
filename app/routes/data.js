const express = require("express");
const router = express.Router();
const { getAllData } = require("../../db");

// NO AUTH CHECK 
router.get("/all", (req, res) => {
    res.json({
        data: getAllData(),
        exposed: true
    });
});

module.exports = router;