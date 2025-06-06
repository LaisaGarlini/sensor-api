const express = require('express');
const app = express();
const fs = require('fs');
const PORT = process.env.PORT || 3000;

app.get('/status', (req, res) => {
  res.json({ status: 'API está funcionando corretamente!' });
});

app.get('/leituras_sensores', (req, res) => {
  fs.readFile('./dados/leituras_sensores.json', 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Erro ao ler os dados.' });
    const sensores = JSON.parse(data);
    res.json(sensores);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
