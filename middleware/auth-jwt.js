// jwt middleware

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

        // if everything good, save to request for use in other routes
        req.email = decoded.email;
        next();
    });
}