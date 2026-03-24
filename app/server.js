const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const dataRoutes = require("./routes/data");

const app = express();
app.use(bodyParser.json());

// debug info
app.get("/", (req, res) => {
    res.send(`App running in DEBUG mode. API_KEY=${process.env.API_KEY}`);
});

app.use("/auth", authRoutes);
app.use("/data", dataRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});