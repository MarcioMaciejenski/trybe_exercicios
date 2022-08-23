const express = require('express');
const activities = require('./data/activities');

const app = express();
app.use(express.json());

/* Crie um endpoint do tipo GET com a rota /myActivities/:id, que possa listar uma atividade do array por id 🚀 */
app.get('/myActivities/:id', (req, res) => {
  const activity = activities.find(({ id }) => id === Number(req.params.id));
  res.status(200).json(activity);
});

/* Crie um endpoint do tipo GET com a rota /myActivities, que possa listar todas as atividades do array 🚀 */
app.get('/myActivities', (req, res) => {
  res.status(200).json({ activities });
});

/* Crie um endpoint do tipo GET com a rota /filter/myActivities, que possa listar todas as atividades filtradas por status do array. A rota deve receber a informação por query e a chave deve-se chamar status. A chave status vai trazer consigo valor de Feito ou A fazer e o endpoint deve fazer o filtro das atividades 🚀 (http://localhost:3001/filter/myActivities?status=Feito) ou
(http://localhost:3001/filter/myActivities?status=A%20fazer) */

app.get('/filter/myActivities', (req, res) => {
  const { status } = req.query;
  let filterActivity = activities;

  if (status) {
    filterActivity = activities.filter((activity) => activity.status === status);
  }

  res.status(200).json({ activities: filterActivity });
});

/* Crie um endpoint do tipo GET com a rota /search/myActivities, que possa listar todas as atividades filtradas por um termo específico do array. A rota deve receber a informação por query e a chave deve-se chamar q. A chave vai trazer consigo valor de 'cachorro' por exemplo, e o filtro deve trazer apenas as atividades com esse termo, se não encontrar, traga um array vazio 🚀 */
app.get('/search/myActivities', (req, res) => {
  const { q } = req.query;
  let filteredActivities = [];

  if (q) {
    filteredActivities = activities.filter((activity) => activity.description.includes(q));
  }
  res.status(200).json({ activities: filteredActivities });
});
module.exports = app;
