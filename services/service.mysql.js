const mysql = require('mysql2')

function MySqlService() {
    
    let connection = null

    this.conectar = () => {
        connection = mysql.createConnection({
            host: '172.17.0.4',
            user: 'root',
            password: '123456',
            database: 'ImdbDB'
        })
    }

    this.executeQuery = async (queryC, obj) => {
        let p = new Promise((r, f) => {
            connection.query(queryC, (error, results, fields) => {
                if (error) {
                    f(error)
                }

                if (results) r(results)
            })
        })
        return p
    }

}


module.exports = MySqlService