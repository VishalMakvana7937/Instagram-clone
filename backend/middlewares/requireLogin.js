const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../key");
const mongoose = require("mongoose");
const USER = mongoose.model("INSTAUSER");


module.exports = (req, res, next) => {

    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ error: "You must be logged in 1" });
    }

    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, jwt_secret, (err, payload) => {
        if (err) {
            return res.status(401).json({ error: "You must be logged in 2" });
        }

        const { _id } = payload;
        USER.findById(_id).then((user) => {
            req.user = user;
            next();
        })
    })

    

}