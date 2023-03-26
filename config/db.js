//SQL Db Connection


var mysql = require('mysql');

var connectDb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'new_data'
}
);

connectDb.connect((err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Database Connected');
    }
});

module.exports = connectDb;