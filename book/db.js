const { Book } = require('pg')

const book = new Book({
  user: 'postgres',
  host: process.env.DB_HOST,
  database: 'book',
  password: 'postgres',
  port: process.env.DB_PORT,
})                               
client.connect()             

module.exports = book