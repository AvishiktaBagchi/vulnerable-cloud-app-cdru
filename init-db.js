const { db } = require("./app/db");

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER, username TEXT, password TEXT)");
    db.run("DELETE FROM users");

    db.run("INSERT INTO users VALUES (1, 'admin', 'password123')");
});

db.close();