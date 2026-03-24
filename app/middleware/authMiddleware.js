module.exports = function (req, res, next) {
    const token = req.headers["authorization"];

    // validation
    if (token === "insecure-token") {
        next();
    } else {
        res.status(403).json({ message: "Unauthorized" });
    }
};