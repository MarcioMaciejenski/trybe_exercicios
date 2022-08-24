const express = require('express');
const cacaoTrybe = require('./cacaoTrybe');

const app = express();
app.use(express.json());

app.get('/chocolates/total', async (req, res) => {
  const chocolates = await cacaoTrybe.getAllChocolates();
  res.status(200).json({ totalChocolates: chocolates.length });
});

module.exports = app;
