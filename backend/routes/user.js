const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const requireLogin = require("../middlewares/requireLogin");
const POST = mongoose.model("POST");
const USER = mongoose.model("INSTAUSER");

router.get("/user/:id", async (req, res) => {
    USER.findOne({ _id: req.params.id })
        .select("-password")
        .then(user => {
            POST.find({ postedBy: req.params.id })
                .populate("postedBy", "_id ")
                .then(post => {
                    res.json({ user, post });
                })
                .catch(err => {
                    return res.status(422).json({ error: err });
                })
        })
        .catch(err => {
            return res.status(422).json({ error: "User not found" });
        });
})

module.exports = router;