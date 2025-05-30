const jwt = require("jsonwebtoken");
const CONFIG = require("../../config/config.json");
const connectionPromise = require("../../config/connection.js");

class AuthService {
    loginValidate(data) {
        let error = {};
        if (!data.email) error["email"] = "Email is required";
        if (!data.password) error["password"] = "Password is required";

        return Object.keys(error).length ? error : null;
    }

    registerValidate(data) {
        let error = {};
        if (!data.name) error["username"] = "Username is required";
        if (!data.email) error["email"] = "Email is required";
        if (!data.password) error["password"] = "Password is required";

        return Object.keys(error).length ? error : null;
    }

    async getUserByEmail(email) {
        try {
            const db = await connectionPromise;  // wait for connection
            const [rows] = await db.query("SELECT * FROM users WHERE email = ? LIMIT 1", [email]);
            return rows[0];
        } catch (err) {
            throw err;
        }
    }

    async createUser(data) {
        try {
            const db = await connectionPromise;
            const sql = `INSERT INTO users (username, email, password_hash, role) VALUES (?, ?, ?, ?)`;
            const [result] = await db.query(sql, [
                data.name,
                data.email,
                data.password,
                data.role
            ]);
            return {
                id: result.insertId,
                ...data
            };
        } catch (err) {
            throw err;
        }
    }

    generateAccessToken(data) {
        return jwt.sign(data, CONFIG.jwt.secret || "defaultsecret", { expiresIn: "1d" });
    }
}

module.exports = AuthService;
