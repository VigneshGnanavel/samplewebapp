const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('working node js app!');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
