// ES5
const http = require('http');
// function requestListener(req, res) {}
// http.createServer(requestListener);

// ES6
// import { createServer } from 'http';

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers);
  // process.exit();
  const url = req.url;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>First Page</title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></input></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>First Page</title></head>');
  res.write('<body><h1>Hello World</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
