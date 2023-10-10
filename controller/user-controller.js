const express = require('express');
const connection = require('../db/db-connection');
const bcrypt = require('bcrypt');

const saltRounds = 10; // Define saltRounds here

userRegister = (req, res) => {
  // Hash the user's password before storing it
  bcrypt.hash(req.body.password, saltRounds, (err, hashedPassword) => {
    if (err) {
      // Handle the error, e.g., by logging or returning an error response
      console.error('Error hashing password:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    // Insert the user data with the hashed password into the database
    connection.query(
      'INSERT INTO user (id, name, email, phone, username, password) VALUES (?, ?, ?, ?, ?, ?)',
      [req.body.id, req.body.name, req.body.email, req.body.phone, req.body.username, hashedPassword],
      (err, result) => {
        if (err) {
          // Handle the error, e.g., by logging or returning an error response
          console.error('Error inserting user:', err);
          return res.status(500).json({ error: 'Internal Server Error' });
        }

        // User registered successfully
        res.status(200).json({ message: 'User registered successfully' });
      }
    );
  });
};

module.exports = { userRegister };
