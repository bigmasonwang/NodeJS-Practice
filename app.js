const http = require('http');
const express = require('express');
const { StringDecoder } = require('string_decoder');

const app = express();

app.use((req, res, next) => {
  console.log('in the middleware');
  next();
});

app.use((req, res, next) => {
  console.log('in the another middleware');
  res.send('<h1>Hello from express</h1>');
  next();
});

app.listen(3000);
