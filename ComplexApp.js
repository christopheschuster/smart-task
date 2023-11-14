/*
   Filename: ComplexApp.js

   This code is a sophisticated and elaborate app built using JavaScript and various libraries.
   It incorporates several modules and implements various advanced functionalities.

   Author: Your Name
   Date: October 1, 2022
*/

// Import required libraries/modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Initialize express app
const app = express();
app.use(bodyParser.json());

// Connect to MongoDB database
mongoose.connect('mongodb://localhost/complex_app', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// Define model/Schema for User
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  createdAt: { type: Date, default: Date.now }
});

// Create User model from schema
const User = mongoose.model('User', userSchema);

// Define API endpoints

// GET endpoint to retrieve all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send('An error occurred while retrieving users');
  }
});

// POST endpoint to create a new user
app.post('/users', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate inputs
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already registered' });
    }

    // Hash the password using bcrypt
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).send('An error occurred while creating a user');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});