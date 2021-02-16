// ES5
const http = require('http');
// function requestListener(req, res) {}
// http.createServer(requestListener);

// ES6
// import { createServer } from 'http';

const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3000);
