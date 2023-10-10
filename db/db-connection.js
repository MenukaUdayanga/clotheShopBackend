const mysql = require('mysql')

let connection;

function getconnection() {

    if (!connection) {

        connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'institute'
          })
    }

    return connection;
}

module.exports=getconnection();