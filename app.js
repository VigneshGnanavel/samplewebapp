const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hi today friday in key sparks and time is 11.30!');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
