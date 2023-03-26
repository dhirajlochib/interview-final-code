//Services

const db = require('../config/db.js');
const jwt = require('jsonwebtoken');
require("dotenv").config();
const bcrypt = require('bcrypt');


//Login Service 

exports.login = function (req, res) {
    const { email, password } = req.body;
    const sql = `SELECT * FROM user WHERE email = '${email}'`;
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if (result.length === 0) {
            res.status(400).send({ message: 'Email not found' });
            return;
        }
        // const hashPass = result[0].password;
        // const match = bcrypt.compareSync(pass, hashPass);
        const match = password === result[0].password;
        // console.log(result[0].password);
        if (!match) {
            res.status(400).send({ message: 'Password is incorrect' });
            return;
        }
        const token = jwt.sign({ email: email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).send({ token: token });
    });
}

exports.register = function (req, res) {
    const { name, email, password, avatar } = req.body;
    const validateEmail = `SELECT * FROM user WHERE email = '${email}'`;
    db.query(validateEmail, (err, result) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if (result.length > 0) {
            res.status(400).send({ message: 'Email already exists' });
            return;
        }

        // const hashPass = bcrypt.hashSync(pass, 10);
        const sql = `INSERT INTO user (name, email, password, avatar) VALUES ('${name}', '${email}', '${password}', '${avatar}')`;
        db.query(sql, (err, result) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            res.status(200).send({ message: 'User Registered' });
        }
        );
    });
}