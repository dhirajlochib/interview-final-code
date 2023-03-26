const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./routes/auth.js');
require("dotenv").config();
const homePageRoutes = require('./routes/user.js');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//main api routes '/api'
app.use('/api', authRoutes);
app.use('/', homePageRoutes);

port = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log(`Server is running on PORT ${port}`);
}
);