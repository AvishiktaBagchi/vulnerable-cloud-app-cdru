const fs = require("fs");
const db = JSON.parse(fs.readFileSync("db.json"));

// query
function findUser(username, password, callback) {
    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
    db.get(query, callback);
}

module.exports = { db, findUser };