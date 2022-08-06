const Doctor = require("../models/doctor"),
    jwt = require("jsonwebtoken");
module.exports = {
    isLoggedIn: async (req, res, next) => {
        if (!req.headers.authorization)
            return res.status(400).send("You don't have the authorization");
        const token = req.headers.authorization.replace("Bearer ", "");
        try {
            let payload = jwt.verify(token, "secret_key");
            req.doctor = await Doctor.findById(payload.id);
            next();
        } catch (e) {
            switch (e.constructor) {
                case jwt.TokenExpiredError:
                    return res.status(401).send("Your token has been expired");
                case jwt.JsonWebTokenError:
                    return res.status(401).send("Your token is unvalid");
            }
        }
    }

   
};