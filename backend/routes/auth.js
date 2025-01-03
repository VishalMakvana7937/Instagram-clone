const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const USER = mongoose.model("INSTAUSER");
const bcrypt = require('bcrypt');

router.get('/', (req, res) => {
    res.send('Hello World!');
})

router.post('/signup', (req, res) => {
    const { name, userName, email, password } = req.body;

    if (!name || !userName || !email || !password) {
        return res.status(400).json({ message: 'Please fill in all fields' });
    }

    USER.findOne({ $or: [{ email: email }, { userName: userName }] }).then((SavedUser) => {
        console.log(SavedUser);
        if (SavedUser) {
            return res.status(400).json({ message: 'User already exists with this email or username' });
        }

        bcrypt.hash(password, 12).then((hashedPassword) => {
            const user = new USER({ name, userName, email, password: hashedPassword });
            user.save()
                .then(() => {
                    res.json({ message: 'Register successfully' });
                })
                .catch((err) => {
                    res.status(400).json({ message: 'Error creating user' });
                })
        })
    })

})

module.exports = router;