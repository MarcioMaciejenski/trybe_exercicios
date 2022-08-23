const express = require('express');
const activities = require('./data/activities');

const app = express();
app.use(express.json());

// Crie um endpoint do tipo GET com a rota /myActivities/:id, que possa listar uma atividade do array por id 🚀
app.get('/myActivities/:id', (req, res) => {
  const activity = activities.find(({ id }) => id === Number(req.params.id));
  res.status(200).json(activity);
});

// Crie um endpoint do tipo GET com a rota /myActivities, que possa listar todas as atividades do array 🚀
app.get('/myActivities', (req, res) => {
  res.status(200).json({ activities });
});

module.exports = app;
