const express = require('express');
const teams = require('../../data/equipos.db.json');

const app = express();
const port = process.env.PORT || 3001;

app.get('/api/v1/teams', (req, res) => {
  res.json(teams);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
