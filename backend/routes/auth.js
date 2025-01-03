const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const USER = mongoose.model("INSTAUSER");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../key');

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
            return res.status(400).json({ error: 'User already exists with this email or username' });
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

router.post('/signin', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Please enter email and password' });
    }

    USER.findOne({ email: email }).then((user) => {

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        bcrypt.compare(password, user.password).then((isMatch) => {
            if (isMatch) {
                // return res.status(200).json({ message: 'Login successfully' });

                const token = jwt.sign({ _id: user.id }, jwt_secret,);
                console.log(' token..!', token);
                res.json({ token: token });

            } else {
                return res.status(400).json({ error: 'Invalid password' });
            }

        }).catch((err) => {
            console.log(err);
            // return res.status(400).json({ message: 'Invalid password' });
        })


    })
})

module.exports = router;