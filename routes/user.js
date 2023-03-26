//Home Page routes

const express = require('express');
const router = express.Router();
const user = require('../services/user.js');
const checkAuth = require('../middleware/checkAuth.js');

router.get('/',
    checkAuth,
    (req, res) => {
        user.getUserData(req, res);
    }
);

router.post('/update',
    checkAuth,
    (req, res) => {
        user.updateData(req, res);
    }
);

module.exports = router;