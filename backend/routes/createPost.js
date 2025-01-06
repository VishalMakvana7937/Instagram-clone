const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const requireLogin = require("../middlewares/requireLogin");
const POST = mongoose.model("POST");

router.get("/allposts", requireLogin, (req, res) => {
    POST.find()
        .populate("postedBy", "_id name")
        .then(posts => res.json(posts))
        .catch(err => console.log(err))
})

router.post("/createPost", requireLogin, (req, res) => {
    const { body, pic } = req.body;
    console.log(pic)

    if (!body || !pic) {
        return res.status(422).json({ error: "Please add all the fields" })
    }

    console.log(req.user)
    const post = new POST({
        body,
        photo: pic,
        postedBy: req.user
    })
    post.save().then((result) => {
        return res.json({ post: result })
    }).catch(err => console.log(err))

})

router.get("/myposts", requireLogin, (req, res) => {
    console.log(req.user);
    POST.find({ postedBy: req.user._id })
        .populate("postedBy", "_id name")
        .then(myposts => {
            res.json(myposts)
        })
})

// Assuming POST is the model you're working with, and requireLogin is middleware
router.put("/like", requireLogin, async (req, res) => {
    try {
        // Find and update the post to push the user's ID into the likes array
        const result = await POST.findByIdAndUpdate(
            req.body.postId, // Correct the key name to match the body parameter
            {
                $push: { likes: req.user._id }
            },
            { new: true } // Ensure the updated document is returned
        );

        return res.json(result);
    } catch (err) {
        // Handle any errors and return an appropriate response
        return res.status(422).json({ error: err.message });
    }
});


router.put("/unlike", requireLogin, async (req, res) => {
    try {
        const result = await POST.findByIdAndUpdate(
            req.body.postId, // Use `postId` instead of `postid`
            {
                $pull: { likes: req.user._id }
            },
            { new: true } // This will return the modified document instead of the original
        );

        // Send the updated post as a response
        return res.json(result);
    } catch (err) {
        return res.status(422).json({ error: err.message });
    }
});


module.exports = router