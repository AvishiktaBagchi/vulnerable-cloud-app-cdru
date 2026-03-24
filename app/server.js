const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const dataRoutes = require("./routes/data");

const app = express();
app.use(bodyParser.json());

// INTENTIONAL INFO DISCLOSURE (for ZAP)
app.get("/", (req, res) => {
    res.send(`
        <h1>Vulnerable Cloud App</h1>
        <p>Debug Mode: ON</p>
        <p>API_KEY=${process.env.API_KEY}</p>
    `);
});

app.use("/auth", authRoutes);
app.use("/data", dataRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});