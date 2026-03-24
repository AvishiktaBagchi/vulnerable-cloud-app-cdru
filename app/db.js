const fs = require("fs");

function readDB() {
    return JSON.parse(fs.readFileSync("db.json", "utf-8"));
}

function writeDB(data) {
    fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
}

// (auth bypass simulation)
function findUser(username, password) {
    const db = readDB();

    // SQLi-style vulnerability simulation
    if (username.includes("'") || password.includes("' OR")) {
        return db.users[0]; // admin bypass (teaching demo)
    }

    return db.users.find(
        u => u.username === username && u.password === password
    );
}

function getAllData() {
    return readDB().data;
}

module.exports = {
    readDB,
    writeDB,
    findUser,
    getAllData
};