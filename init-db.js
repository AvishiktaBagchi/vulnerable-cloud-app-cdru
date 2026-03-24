const fs = require("fs");

const db = {
    users: [
        { id: 1, username: "admin", password: "admin123", role: "admin" },
        { id: 2, username: "student", password: "password", role: "user" }
    ],
    data: [
        { id: 1, secret: "Top Secret Cloud Config" },
        { id: 2, secret: "Leaked API Key: 12345-ABCDE" }
    ]
};

fs.writeFileSync("db.json", JSON.stringify(db, null, 2));

console.log("Database initialized");