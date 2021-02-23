const express = require('express');

const app = express();

const port = 3000;

app.get('/', (_, res) => {
  res.sendFile('./landing-page/home.html', { root: __dirname });
});

app.get('/about', (_, res) => {
  res.sendFile('./landing-page/about.html', { root: __dirname });
});

app.get('/contact', (_, res) => {
  res.sendFile('./landing-page/contact.html', { root: __dirname });
});

app.listen(port, () => console.log(`listening on port ${port}!`));
