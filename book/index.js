require('dotenv').config();
const client = require("./db.js");
const bp = require("body-parser");

//EXPRESS server
const express = require("express");
const book = require('./db.js');
const app = express();
app.use(bp.json());
const port = 3000;

app.get("/book", (req, res) => {
  client.query("SELECT * FROM book", (err, result) => {
    if (!err) {
      const customers = result.rows;
      console.log(customers);
      res.send(customers);
    }
  });
});

app.get("/boook:id", (req, res) => {
  client.query(`Select * from book where id=${req.params.id}`, (err, result) => {
    if (!err) {
      const customer = result.rows[0];
      console.log(book);
      if (book) {
        res.statusCode = 200;
        res.send(book);
      } else {
        res.statusCode = 404;
        res.send();
      }
    } else {
      res.status = 500;
      res.send();
      console.log(err);
    }
  });
});

app.post("/book", (req, res) => {
  console.log(req.body);
  const customer = req.body;
  let insertQuery = `insert into book(firstName, lastName) 
                     values('${book.title}', '${book.author}')`;

  client.query(insertQuery, (err, result) => {
    console.log("Query...");
    if (!err) {
      res.send("Insertion was successful");
    } else {
      console.log(err.message);
      res.send();
    }
  });
});

//---------------------------------------------------------------------------------------UPDATE customer

app.put("/book/:id", (req, res) => {
  let customer = req.body;
  let updateQuery = `update customer
                       set title = '${book.title}',
                       author = '${book.author}'
                       where id = ${req.params.id}`;

  client.query(updateQuery, (err, result) => {
    if (!err) {
      res.send("Update was successful");
    } else {
      console.log(err.message);
      res.send();
    }
  });
});

//---------------------------------------------------------------------------------------DELETE customer

app.delete("/book/:id", (req, res) => {
  let insertQuery = `delete from book where id=${req.params.id}`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Deletion was successful");
    } else {
      console.log(err.message);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

