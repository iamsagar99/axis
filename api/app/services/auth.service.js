const jwt = require("jsonwebtoken");
const CONFIG = require("../../config/config.json");
const db = require("../../config/connection.js");

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

    getUserByEmail(email) {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM users WHERE email = ? LIMIT 1", [email], (err, rows) => {
                if (err) return reject(err);
                resolve(rows[0]);
            });
        });
    }

    createUser(data) {
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO users (username, email, password_hash, role) VALUES (?, ?, ?, ?)`;
            db.query(sql, [
                data.name,
                data.email,
                data.password,
                data.role
            ], (err, result) => {
                if (err) return reject(err);
                resolve({
                    id: result.insertId,
                    ...data
                });
            });
        });
    }

    generateAccessToken(data) {
        return jwt.sign(data, CONFIG.JWT_SECRET || "defaultsecret", { expiresIn: "1d" });
    }
}

module.exports = AuthService;
