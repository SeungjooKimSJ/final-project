require('dotenv/config');
const express = require('express');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const ClientError = require('./client-error');
const pg = require('pg');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();
const jsonMiddleware = express.json();

app.use(staticMiddleware);
app.use(errorMiddleware);
app.use(jsonMiddleware);

app.get('/api/transactions', (req, res, next) => {
  const sql = `
    select *
      from "transactions"
  `;

  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.post('/api/transactions', (req, res, next) => {
  const status = req.body.status;
  const date = req.body.date;
  const amount = parseInt(req.body.amount, 10);
  const category = req.body.category;
  const description = req.body.description;
  // const { status, date, amount, category, description } = req.body;

  if (!status || !date || !amount || !category || !description) {
    throw new ClientError(400, 'must fill all of a transaction information');
  } else if (!Number.isInteger(amount) || amount < 1) {
    throw new ClientError(400, 'amount must be a positive integer');
  } else {
    const sql = `
      insert into "transactions" ("status", "date", "amount", "category", "description")
        values ($1, $2, $3, $4, $5)
      returning *
    `;

    const params = [status, date, amount, category, description];

    db.query(sql, params)
      .then(result => {
        res.status(201).json(result.rows);
      })
      .catch(err => next(err));
  }
});

// app.post('/api/transactions/');

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
