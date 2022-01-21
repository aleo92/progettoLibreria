const { Client } = require('pg')

const client = new Client({
  user: 'postgres',
  host: process.env.DB_HOST,
  database: 'book',
  password: 'postgres',
  port: process.env.DB_PORT,
})                               
client.connect()             

module.exports = client