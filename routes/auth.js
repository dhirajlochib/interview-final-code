//auth routes

const express = require('express');
const router = express.Router();

const auth = require('../services/auth.js');

router.post('/login', (req, res) => {
    auth.login(req, res);
});
router.post('/register', (req, res) => {
    auth.register(req, res);
});




module.exports = router;
