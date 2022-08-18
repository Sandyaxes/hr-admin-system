const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '@KeepCoding#00',
    database : 'adminDB'
});

module.exports = connection;