const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Import the User model

// Signup Route
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        if (!username || !email || !password) {
            return res.status(400).json({ error: 'Username, email, and password are required' });
        }

        // Create a new user
        const user = new User({ username, email, password });

        // Save to MongoDB
        await user.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        if (error.code === 11000) {
            // Handle duplicate email error
            res.status(400).json({ error: 'Email already exists' });
        } else {
            res.status(400).json({ error: error.message });
        }
    }
});

// Login Route
router.post('/login', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        if (!username || !email || !password) {
            return res.status(400).json({ error: 'Username, email, and password are required' });
        }

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: 'Invalid email or password' });

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: 'Invalid email or password' });

        // Create and send token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
