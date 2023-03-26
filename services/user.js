
const db = require('../config/db');
require("dotenv").config();
const bcrypt = require('bcrypt');

// Get User Data From JWT Token
exports.getUserData = function (req, res) {
    const { email } = req;
    const sql = `SELECT * FROM user WHERE email = ?`;
    db.query(sql, [email], (err, result) => {
        if (!err) {
            res.status(200).send(result);
        }
        else {
            res.status(500).send('Error on the server.');
        }
    });
}

exports.updateData = function (req, res) {
    const { email } = req;
    const { name, avatar, password } = req.body;
    const getUserData = `SELECT * FROM user WHERE email = ?`;
    db.query(getUserData, [email], (err, result) => {
        console.log(result[0].password);
        bcrypt.compare(password, result[0].password, (err, match) => {
            console.log(match);
            if (match) {
                const sql = `UPDATE user SET name = ?, avatar = ? WHERE email = ?`;
                db.query(sql, [name, avatar, email], (err, result) => {
                    if (!err) {
                        res.status(200).send('User Data Updated');
                    }
                    else {
                        res.status(500).send('Error on the server.');
                    }
                });
            }
            else {
                res.status(400).send('Password is incorrect');
            }
        }
        );
    });
}