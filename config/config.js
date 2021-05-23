require('dotenv').config();

// console.log(process.env)
const root = process.env.DBUSER
const password = process.env.DBPASSWORD
const database = process.env.DBDATABASE
const host = process.env.DBENDPOINT

console.log(root, password, database, host)

module.exports = {
  "development": {
    "username": root,
    "password": password,
    "database": database,
    "host": host,
    "dialect": "mysql"
  },
  "test": {
    "username": root,
    "password": password,
    "database": database,
    "host": host,
    "dialect": "mysql"
  },
  "production": {
    "username": root,
    "password": password,
    "database": database,
    "host": host,
    "dialect": "mysql"
  }
}
