// dependecies
const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

// use cors and json other wise data will not be sent to the server
app.use(express.json());
app.use(cors());

// Running the server
app.listen(3002, () => {
    console.log('Server is running on port 3002');
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
    const Values = [sentEmail, sentUsername, sentPassword];

    db.query(SQL, Values, (err, results) => {
        if (err) {
            // console.error('SQL Error:', err);
            // res.status(500).send({ error: 'Error registering user' });
            res.send({ error: err });
        } else {
            console.log('User registered successfully');
            // res.send({ message: 'User registered' });
        }
    });
});
// successfull

//Let us create a rout to the server that will login a user
app.post('/login', (req, res) => {
    const sentLoginUsername = req.body.LoginUsername;
    const sentLoginPassword = req.body.LoginPassword;

    console.log('Received data:', sentLoginUsername, sentLoginPassword);

    const SQL = 'SELECT * FROM users WHERE username = ? AND password = ?';
    const Values = [sentLoginUsername, sentLoginPassword];

    db.query(SQL, Values, (err, results) => {
        if (err) {
            
            res.send({ error: err });
        }
        if(results.length > 0){
            res.send(results);
        }else{
            res.send({message: "Wrong username/password combination!"});
        }
    });
});