const AuthService = require("../services/auth.service");
const argon2 = require("argon2");

class AuthController {
    constructor() {
        this.auth_svc = new AuthService();
    }

    login = async (req, res, next) => {
        try {
            console.log("data")
            const data = req.body;
            const validated = this.auth_svc.loginValidate(data);
            if (validated) {
                return next({
                    status: 400,
                    msg: validated
                });
            }
            const user =  await this.auth_svc.getUserByEmail(data.email);
            console.log(user)
            if (!user) {
                throw "User does not exist";
            }

            const isMatch = await argon2.verify(user.password_hash, data.password);
            if (!isMatch) {
                throw "Invalid credentials";
            }

            const access_token = this.auth_svc.generateAccessToken({
                id: user.id,
                name: user.name,
                role: user.role
            });

            res.json({
                result: {
                    user,
                    access_token
                },
                status: true,
                msg: "Login successful"
            });
        } catch (error) {
            console.log("Login error:", error);
            next({
                status: 400,
                msg: error
            });
        }
    };

    register = async (req, res, next) => {
        const data = req.body;
        console.log(data)
        try {
            const validation = this.auth_svc.registerValidate(data);
            if (validation) {
                return next({
                    status: 400,
                    msg: validation
                });
            }

            data.password = await argon2.hash(data.password);
            data.role = data.role || "editor";
            const result = await this.auth_svc.createUser(data);

            res.json({
                result,
                status: true,
                msg: "User registered successfully"
            });
        } catch (err) {
            console.log("Register error:", err);
            next({
                status: 500,
                msg: err
            });
        }
    };

    verifyUser = (req, res, next) => {
        if (req.auth_user) {
            res.json({
                result: req.auth_user,
                msg: "Verified",
                status: true
            });
        } else {
            next({
                status: 403,
                msg: "Unauthorized"
            });
        }
    };
}

module.exports = AuthController;
