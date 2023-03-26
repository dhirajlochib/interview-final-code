//auth check middleware

const jwt = require('jsonwebtoken');
require("dotenv").config();


module.exports = function (req, res, next) {
    //Authorization: Bearer <token>
    const auth = req.headers.authorization;
    if (!auth) {
        res.status(401).send({ message: 'No token provided' });
        return;
    }
    const token = auth.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            res.status(401).send({ message: 'Unauthorized' });
            return;
        }
        req.email = decoded.email;
        next();
    }
    );
}