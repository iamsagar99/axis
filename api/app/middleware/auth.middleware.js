const jwt = require("jsonwebtoken");
const CONFIG = require("../../config/config.json");
const connectionPromise = require('../../config/connection');

const loginCheck = async (req, res, next) => {
    const db = await connectionPromise;  // Wait for connection Promise to resolve

    let token = null;

    if (req.headers['authorization']) {
        token = req.headers['authorization']; // e.g., "Bearer <token>"
    }

    if (req.headers['x-xsrf-token']) {
        token = req.headers['x-xsrf-token'];
    }

    if (req.query['token']) {
        token = req.query['token'];
    }

    if (!token) {
        return next({
            status: 401,
            msg: "Unauthorized"
        });
    }

    try {
        const parts = token.split(" ");
        token = parts[parts.length - 1];
        console.log("Token:", token);
        const data = jwt.verify(token, CONFIG.jwt.secret || "defaultsecret");
        
        // Use async/await instead of callback here:
        const [results] = await db.query("SELECT * FROM users WHERE id = ? LIMIT 1", [data.id]);

        if (results.length === 0) {
            return next({
                status: 403,
                msg: "Access denied"
            });
        }

        req.auth_user = results[0];
        next();

    } catch (e) {
        return next({
            status: 401,
            msg: "Token not verified"
        });
    }
};

module.exports = loginCheck;
