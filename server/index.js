// dependecies
const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

// use cors and json other wise data will not be sent to the server
app.use(express.json());
app.use(cors());

// Running the server
app.listen(3001, () => {
    console.log('Server is running on port 3001');
})

//Create database
const db = mysql.createConnection({ 
    user: 'root',
    host: 'localhost', 
    password: '',  // ifa any enter here
    database: 'plantdb', // created using xampp
})
//Let us create a rout to the server that will register a user 
app.post('/register', (req, res) => {
    const sentEmail = req.body.Email;
    const sentUsername = req.body.Username;
    const sentPassword = req.body.Password;

    console.log('Received data:', sentEmail, sentUsername, sentPassword);

    const SQL = 'INSERT INTO users (email, username, password) VALUES (?, ?, ?)';
    const values = [sentEmail, sentUsername, sentPassword];

    db.query(SQL, values, (err, result) => {
        if (err) {
            console.error('SQL Error:', err);
            res.status(500).send({ error: 'Error registering user' });
        } else {
            console.log('User registered successfully');
            res.send({ message: 'User registered' });
        }
    });
});

// Create another route for login page so that  registered user can log in
app.post('/login', (req, res) => {
    const sentEmail = req.body.Email;
    const sentUsername = req.body.Username;
    const sentPassword = req.body.Password;

    console.log('Received data:', sentEmail, sentUsername, sentPassword);

    const SQL = 'INSERT INTO users (email, username, password) VALUES (?, ?, ?)'
    const VALUES = [sentEmail, sentUsername, sentPassword];
});