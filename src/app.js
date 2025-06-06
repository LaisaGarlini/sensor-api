const express = require('express');
const leituras = require('../dados/leituras_sensores.json');

const app = express();

app.get('/status', (req, res) => {
  res.json({ status: 'API está funcionando corretamente!' });
});

app.get('/leituras_sensores', (req, res) => {
  res.json(leituras);
});

module.exports = app;
