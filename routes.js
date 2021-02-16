const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>First Page</title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></input></form></body>'
    );
    res.write('</html>');
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    const body = [];
    // listen to certain event
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      // console.log(parsedBody); // message=<input value>
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });

    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>First Page</title></head>');
  res.write('<body><h1>Hello World</h1></body>');
  res.write('</html>');
  res.end();
};

module.exports = requestHandler;
